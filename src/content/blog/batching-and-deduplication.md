---
title: "Batching and Deduplication: Implementing an Enterprise Cache-Pruning Strategy at the Application Boundary"
description: "When hundreds of components request overlapping data simultaneously. How to build an internal data proxy that groups concurrent requests into singular queries while implementing strict TTL cache-invalidations."
pubDate: "2026-02-24"
categories: ["Architecture", "Performance"]
tags: ["caching", "deduplication", "batching", "performance"]
draft: true
---

# Batching and Deduplication: Implementing an Enterprise Cache-Pruning Strategy at the Application Boundary

> **Architectural Thesis:** In heavily componentized architectures, child components are entirely ignorant of the data fetched by their siblings. Without a centralized, intelligent batching and deduplication layer at the application boundary, a single page load can accidentally trigger 50 identical network requests, instantly bottlenecking both client CPU and server capacity.

## The 18-Year Context Bracket

In the jQuery era, we fetched the data once at the top of the script, stored it in a massive global `window.appData` object, and manipulated it directly. It was efficient but impossible to maintain. Modern component architectures (React, Vue) encourage components to be entirely self-sufficient—declaring their own data needs. If you render a list of 50 `UserAvatar` components, and each component independently calls `fetchUser(id)`, you will hammer your backend with 50 isolated HTTP requests. Libraries like React Query or SWR mitigate this via caching, but relying solely on UI-layer caching is dangerous. A true UI Architect builds deterministic, framework-agnostic batching utilities (similar to GraphQL DataLoader) directly into the API client layer, ensuring deduplication occurs at the transport level.

## Deep Technical Scaffolding

- **The Deduplication Matrix:**
  - _In-Flight Deduplication:_ If Request A for `/api/config` is currently pending, and Component B requests `/api/config`, Component B should not fire a new request. It should simply attach a `.then()` to Request A's pending Promise.
- **The Batching Engine (The Microtask Queue):**
  - How to leverage the JavaScript Event Loop (Microtasks) to group synchronous calls into a single asynchronous payload.
  - If 50 components request `getUser(1)`, `getUser(2)`, ..., `getUser(50)` within the exact same synchronous render tick, the batcher collects the IDs and fires a single `GET /api/users?ids=1,2...50`.
- **Time-to-Live (TTL) and Stale-While-Revalidate (SWR):**
  - Defining strict memory eviction policies based on LRU (Least Recently Used) caching.
  - The SWR pattern: Instantly returning the stale cache data for a fast UI render, while silently firing a background network request to update the cache and re-trigger a UI render.
- **Memory Leaks in Cache Layers:**
  - The danger of infinite maps holding onto object references.
  - Utilizing `WeakMap` or setting strict `setTimeout` deletion rules to ensure the client browser does not OOM (Out Of Memory) when the user navigates through 500 pages of data.

## Code Block Placeholders

### Example: In-Flight Promise Deduplication

```typescript
// [Insert a proxy wrapper around the native fetch API. Show a Map
// storing the Request URL as a key and the Promise as a value.
// Demonstrate returning the cached Promise if the request is still pending,
// and deleting the key from the Map in the .finally() block.]
```

### Example: The Microtask Batcher

```typescript
// [Insert a batching function that accepts a single ID, pushes it into an array,
// and uses queueMicrotask or Promise.resolve().then() to wait for the synchronous
// call stack to clear before sending the aggregated array to a bulk API endpoint]
```

### Example: LRU Cache Eviction

```typescript
// [Insert a lightweight Least Recently Used cache implementation that keeps
// track of access timestamps and automatically deletes the oldest entries
// when the map size exceeds a specified memory threshold (e.g., 500 items)]
```

## Architectural Trade-offs / Gotchas Matrix

| Metric                 | No Caching (Raw Fetch)              | Global Store (Redux)                | Intelligent Transport Cache (React Query / Custom) |
| :--------------------- | :---------------------------------- | :---------------------------------- | :------------------------------------------------- |
| **Network Efficiency** | Terrible (Massive duplication)      | Good (If manually coordinated)      | Flawless (Automatic deduplication/batching)        |
| **Data Freshness**     | Always exact                        | Hard to keep synced                 | High (Managed via SWR and TTLs)                    |
| **Code Complexity**    | Low                                 | High (Requires massive boilerplate) | Moderate (Moves complexity out of components)      |
| **Memory Footprint**   | Low (Garbage collected immediately) | High (Requires manual deletion)     | Moderate (Handled by LRU/WeakMaps)                 |
