---
title: Scan API
date: 2026-05
description: The admin portal and CMS powering Scan.com's B2B and B2C platforms.
published: true
tech:
  - Ruby on Rails
  - TypeScript
  - Node.js
  - React.js
  - Tailwind CSS
  - Sidekiq
  - GraphQL
  - PostgreSQL
---

Scan API is the central admin portal and CMS behind the Scan.com ecosystem, acting as the single source of truth for both B2B and B2C products. It powers the B2B provider portal (scan-portal) as well as the consumer-facing sites, FullBodyScan and uk.scan.com, giving internal teams one place to manage providers, bookings, content, and platform-wide data.

## Features

- Central admin portal for managing providers, scans, bookings, and users across every connected frontend
- Custom CMS enabling non-technical staff to manage content across multiple public-facing sites from one place
- Unified API layer serving both B2B (scan-portal) and B2C (fullbodyscan.com, uk.scan.com) products, keeping business logic consistent rather than duplicated per site
- Role-based access control, allowing different internal teams and external providers to see and manage only what's relevant to them
- Background job processing with Sidekiq for scheduled and asynchronous tasks shared across all connected platforms

## Challenges

- Designing a single API layer flexible enough to serve very different consumers (an internal B2B portal vs public-facing consumer sites) without becoming overly generic or bloated
- Keeping the CMS and admin portal in sync with rapidly evolving requirements from multiple product teams, each building on top of the same underlying data
- Structuring permissions and access control carefully, given the platform's admin tools touch sensitive healthcare and booking data
- Avoiding breaking changes to shared endpoints, since any change could simultaneously affect the B2B portal and both consumer sites
- Balancing the pace of new feature requests from multiple downstream products against the stability needed for a system everything else depends on

## Learnings

- Gained experience designing and maintaining a central API that multiple, quite different, products depend on simultaneously
- Learned how to make architectural decisions with a "many consumers" mindset, thinking beyond the needs of a single frontend
- Developed a stronger sense of how to version and evolve shared APIs without breaking downstream products
- Strengthened my understanding of access control and permissions design in a system handling sensitive healthcare-adjacent data
- Learned how valuable a well-designed admin/CMS layer is in keeping multiple products consistent and reducing duplicated work across teams
