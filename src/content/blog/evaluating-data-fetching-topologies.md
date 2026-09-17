---
title: "Evaluating Data Fetching Topologies: GraphQL Federation vs. RESTful Gateways vs. RPC (tRPC/Server Actions)"
description: "An unbiased, architectural breakdown comparing network performance, type safety overhead, and organizational scalability across federated graphs, REST gateways, and full-stack RPC bridges."
pubDate: "2026-02-17"
categories: ["Architecture", "Network"]
tags: ["graphql", "rest", "rpc", "trpc", "api"]
draft: true
---

# Evaluating Data Fetching Topologies: GraphQL Federation vs. RESTful Gateways vs. RPC

> **Architectural Thesis:** The choice of data fetching topology dictates the entire organizational velocity of the engineering team. REST scales well but lacks strict typing. GraphQL provides excellent client flexibility but introduces catastrophic N+1 backend query problems and cache complexity. Modern RPC (tRPC/Server Actions) offers flawless end-to-end type safety but tightly couples the frontend to the backend monorepo.

## The 18-Year Context Bracket

For a decade, REST was the undisputed king. We requested a resource, we got a JSON blob. But as UIs became deeply nested, REST fell apart due to over-fetching and the "N+1 request" waterfall problem. Facebook introduced GraphQL to allow clients to declare exactly what data they needed in a single query. It was revolutionary, but it shifted immense complexity to the backend (requiring DataLoaders and complex AST parsing). Recently, as the industry shifted heavily towards full-stack TypeScript frameworks (Next.js, Nuxt), a new contender emerged: RPC via tRPC or React Server Actions. RPC bypasses schema definition files entirely, relying on TypeScript inference to guarantee exact type safety from the database straight to the UI component.

## Deep Technical Scaffolding

- **RESTful Gateways (The Reliable Standard):**
  - Why HTTP verbs and URL paths map perfectly to browser caching heuristics.
  - The OpenAPI/Swagger friction: Code generation steps are often brittle and fall out of sync with actual deployments.
- **GraphQL Federation (The Enterprise Behemoth):**
  - Unifying dozens of microservices into a single Supergraph (e.g., Apollo Federation).
  - The N+1 Problem: Why resolving nested graphs destroys database performance without strict Dataloader batching.
  - Client-Side Caching: Why normalized caches (Apollo Client) are memory-heavy and prone to cache-invalidation bugs when mutating deeply nested list items.
- **RPC & Server Actions (The Full-Stack Monorepo):**
  - How tools like tRPC work: Exposing server functions directly to the client without a formal API schema.
  - The catch: RPC forces tight coupling. It assumes your frontend and backend are written in the exact same language (TypeScript) and live in the exact same monorepo or share a strict private package.

## Code Block Placeholders

### Example: The REST Waterfall

```typescript
// [Insert a classic React useEffect chain showing 3 sequential REST calls
// (getUser -> getPosts -> getComments) demonstrating the cascading latency problem]
```

### Example: The GraphQL DataLoader Solution

```typescript
// [Insert a backend GraphQL resolver utilizing DataLoader to batch
// 100 individual "author" ID requests into a single SQL IN(...) query
// to prevent the N+1 problem]
```

### Example: The tRPC Type-Safe Bridge

```typescript
// [Insert a full-stack tRPC example showing a Zod-validated server router
// and the corresponding React client hook, demonstrating how changing
// the server type instantly throws a TypeScript error in the client component]
```

## Architectural Trade-offs / Gotchas Matrix

| Metric                         | REST                                       | GraphQL                                            | RPC (tRPC / Server Actions)              |
| :----------------------------- | :----------------------------------------- | :------------------------------------------------- | :--------------------------------------- |
| **Client-Side Complexity**     | Low (Basic fetch)                          | High (Requires normalized cache client)            | Low (Generated hooks)                    |
| **Type Safety**                | Poor (Unless using strict OpenAPI codegen) | Good (Schema driven, but codegen required)         | Flawless (Inferred directly from source) |
| **Organizational Scalability** | High (Language agnostic)                   | Very High (Federated teams)                        | Low (Requires TS Monorepo)               |
| **Caching**                    | Excellent (Native HTTP semantics)          | Poor (Requires POST requests, bypasses HTTP cache) | Poor (Typically POST based)              |
