---
title: "Distributed Client State: Syncing Micro-Frontends via Event Buses, Custom Elements, and SharedMemory"
description: "How to handle shared global state when your micro-frontends use different frameworks. Exploring clean messaging protocols via custom DOM event buses and cross-thread shared buffers."
pubDate: "2026-03-13"
categories: ["Architecture", "Platform"]
tags: ["micro-frontends", "state-management", "architecture", "event-bus"]
draft: true
---

# Distributed Client State: Syncing Micro-Frontends via Event Buses, Custom Elements, and SharedMemory

> **Architectural Thesis:** The single fastest way to destroy the autonomy of a Micro-Frontend (MFE) architecture is to couple them via a shared global state manager like Redux. To preserve isolated deployments, MFEs must communicate via highly decoupled, native DOM messaging protocols, treating each other as entirely agnostic distributed systems.

## The 18-Year Context Bracket

When teams transition from monoliths to Micro-Frontends, their first instinct is to pull their global Redux or Vuex store up to the "Host" shell and force every child application to connect to it. This completely ruins the point of MFEs. If the Host dictates the state schema, Team A cannot deploy a change without coordinating with the Host team to update the TypeScript types. Furthermore, if Team B decides to use Vue, and the Host uses React/Redux, the integration breaks. In a proper MFE architecture, components communicate the same way microservices do on the backend: through agnostic event buses and pub/sub mechanisms. The DOM provides exactly what we need natively, without any third-party dependencies.

## Deep Technical Scaffolding

- **The Fallacy of Shared State Stores:**
  - Why sharing memory references across Module Federation boundaries leads to prototype chain corruption and catastrophic React re-renders.
  - The "Host Shell" should be thin: It handles routing and authentication layout, nothing more.
- **The Native CustomEvent Bus:**
  - Standardizing a strict event payload schema (e.g., `acme:cart:added`) across the enterprise.
  - Attaching event listeners to the global `window` object and dispatching serialized data payloads.
  - Enforcing immutable payloads: Why you must `JSON.stringify/parse` or use `structuredClone` to prevent a child MFE from mutating the payload object reference and poisoning a sibling MFE.
- **Web Components (Custom Elements) as the Boundary:**
  - Passing state downwards natively using DOM attributes.
  - Why observing `attributeChangedCallback` inside a Web Component is the safest framework-agnostic way to push Host state into a Vue or Svelte child.
- **Advanced Topology: Cross-Tab Sync via `BroadcastChannel`:**
  - When the user adds an item to the cart in Tab A, the cart icon in Tab B (rendered by a completely different MFE) must update instantly.

## Code Block Placeholders

### Example: The MFE Anti-Pattern (The Bad)

```typescript
// [Insert an example of a Host application passing its internal Redux store
// instance down into an isolated MFE, showing how a change in the MFE causes
// a massive, unintended top-down re-render of the entire portal]
```

### Example: The Agnostic CustomEvent Bus

```typescript
// [Insert a lightweight, type-safe event dispatcher utilizing the native
// window.dispatchEvent(new CustomEvent()). Demonstrate how the payload
// is structured-cloned to guarantee immutability across MFE boundaries.]
```

### Example: Web Component Attribute Binding

```typescript
// [Insert a CustomElement definition that acts as a wrapper for a React MFE.
// Show how it listens to static DOM attributes (like data-theme="dark")
// and safely maps those native DOM changes into the React component's props.]
```

## Architectural Trade-offs / Gotchas Matrix

| Metric                     | Shared Redux Store                | Window CustomEvents                                  | Web Component Attributes           |
| :------------------------- | :-------------------------------- | :--------------------------------------------------- | :--------------------------------- |
| **Framework Agnostic**     | No (React specific usually)       | Flawless (Vanilla JS)                                | Flawless (Native DOM)              |
| **Deployment Autonomy**    | Terrible (Tightly coupled schema) | Excellent (Decoupled messaging)                      | Excellent (Decoupled props)        |
| **Traceability/Debugging** | Excellent (Redux DevTools)        | Poor (Hard to track event flows)                     | Moderate (Inspectable in DOM tree) |
| **Type Safety**            | High (Strict TS compilation)      | Low (Requires manual schema validation across repos) | Low (Strings only)                 |
