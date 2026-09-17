---
title: "Mastering Core Web Vitals in SPA Architectures"
description: "Strategies for achieving 100/100/100 Lighthouse scores in Single Page Applications."
pubDate: 2024-05-22
categories: ["Performance"]
tags: ["CWV", "SPA", "optimization"]
---

# Mastering Core Web Vitals

Optimizing performance in modern web applications requires a deep understanding of Core Web Vitals (CWV): Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).

## Tackling INP in React

Interaction to Next Paint measures responsiveness. In React, heavy renders can block the main thread, leading to poor INP scores.

- **Yielding to the Main Thread**: Break up long tasks using techniques like `setTimeout` or `scheduler.postTask`.
- **Concurrent Features**: Utilize React 18's `useTransition` to mark non-urgent state updates, keeping the UI responsive during complex re-renders.

## Preventing CLS

Layout shifts happen when elements change size or position dynamically. Always reserve space for dynamic content, such as images or ads, by setting explicit `width` and `height` attributes or using CSS `aspect-ratio`.
