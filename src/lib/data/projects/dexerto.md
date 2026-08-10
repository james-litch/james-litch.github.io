---
title: Dexerto
date: 2022-09
description: A modern Next.js rebuild of an old Wordpress news site.
published: true
url: https://dexerto.com
tech:
  - Next.js
  - Node.js
  - Tailwind CSS
  - Cypress
  - Headless Wordpress
  - GraphQL
  - PHP
  - Storybook
---

Dexerto is a news website specialising in gaming and internet culture. This project set out to redesign the site from the ground up, leveraging the speed and caching capabilities of Next.js. The existing Wordpress site was turned into a headless CMS, of which GraphQL was used to query the data.

## Features

- Static generation with incremental revalidation, so articles load near-instantly while staying up to date with fresh content from the CMS
- Headless Wordpress backend queried via GraphQL, decoupling content editing from the frontend and allowing editors to keep their familiar workflow
- Automated Google Ads insertion into article body content, parsing the rich text and programmatically injecting ad slots at set intervals between paragraphs
- A shared component library documented in Storybook, giving design and engineering a single source of truth for UI patterns
- End-to-end test coverage with Cypress across critical flows like article pages, navigation, and search
- Fully responsive layouts built with Tailwind CSS

## Challenges

- Preserving SEO rankings through the migration, including careful handling of URL structures and redirects for years of existing content
- Inserting Google Ads into dynamically rendered article content without causing layout shift, particularly on slower connections where ad scripts load after the surrounding text
- Tuning caching and revalidation strategy to handle high, spiky traffic typical of gaming news cycles
- Keeping PHP-side Wordpress logic and the new Next.js frontend cleanly separated while they had to run in parallel during rollout

## Learnings

- Gained a much deeper understanding of headless CMS architecture and the tradeoffs of GraphQL vs REST for content-heavy sites
- Learned how to balance SSG/ISR strategies against content freshness requirements for a fast-moving news site
- Picked up techniques for safely injecting third-party ad scripts into server-rendered content without hurting Core Web Vitals
- Saw firsthand how a Storybook-driven component library speeds up collaboration between design and engineering
- Reinforced the value of E2E tests when migrating a business-critical, high-traffic site
