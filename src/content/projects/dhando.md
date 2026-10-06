---
title: "Dhando — AI-Assisted CRM for Small Businesses (work in progress)"
description: "A conversation-first CRM that takes owner-run Indian SMBs from a WhatsApp chat to a GST-compliant invoice."
tags: ["React", "TypeScript", "Go", "PostgreSQL", "Figma"]
order: 1
images:
  - src: "/images/projects/dhando/dhandho-tile-01-today.png"
    highResSrc: "/images/projects/dhando/dhandho-tile-01-today.png"
    alt: "Dhando Today view"
  - src: "/images/projects/dhando/dhandho-tile-02-phone.png"
    highResSrc: "/images/projects/dhando/dhandho-tile-02-phone.png"
    alt: "Dhando Phone view"
  - src: "/images/projects/dhando/dhandho-tile-03-gstr2b.png"
    highResSrc: "/images/projects/dhando/dhandho-tile-03-gstr2b.png"
    alt: "Dhando GSTR2B view"
  - src: "/images/projects/dhando/dhandho-tile-04-pipeline.png"
    highResSrc: "/images/projects/dhando/dhandho-tile-04-pipeline.png"
    alt: "Dhando Pipeline view"
---

- Designed the full product across 167 screens and 11 release phases, from lead capture through quoting, GST invoicing, e-invoicing and GSTR-2B reconciliation.
- Building a 160+ component React/TypeScript design system in Storybook, with automated WCAG 2.1 AA checks and light/dark themes.
- Engineered runtime white-label theming: tenant brand colours generate a full shade ramp with contrast validation, so no tenant needs its own build.
- Architecting a Go/PostgreSQL API with row-level-security multi-tenancy, generating a typed TypeScript client from OpenAPI 3.1.
- Shipping with an agentic workflow that connects Figma, MCP and coding agents, from design file to production code.
