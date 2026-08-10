---
title: Scan.com
date: 2026-05
description: A marketplce for connecting patients looking for medical scans with healthcare providers.
published: true
url: https://uk.scan.com
tech:
  - Ruby on Rails
  - TypeScript
  - Node.js
  - React.js
  - Tailwind CSS
  - Sidekiq
  - Storybook
  - S3
  - Cloudinary
  - Stripe SDK
  - PayPal SDK
---

Scan.com is a marketplace connecting patients looking for medical scans with healthcare providers, making it easier to find, book, and pay for scans like MRIs and CT scans. The platform is built on a Ruby on Rails backend with a React/TypeScript frontend, and spans everything from patient-facing booking flows to provider-facing tools and partner integrations.

## Features

- Embeddable widget allowing partner sites to offer scan booking directly within their own pages, without sending users away to a separate site
- Payment handling for scans, integrating both Stripe and PayPal
- Custom-built CMS, giving non-technical team members the ability to manage marketing pages and content without developer involvement
- Responsive, optimised images across the platform using Cloudinary, keeping pages fast
- Shared component library built and documented in Storybook, ensuring visual and behavioural consistency across the app
- Background job processing with Sidekiq, handling asynchronous and scheduled tasks like emails, provider notifications, and scan processing

## Challenges

- Designing the embeddable widget to work reliably across a wide variety of partner site environments, styles, and technical setups without conflicting with their existing code
- Structuring payment logic to cleanly support both Stripe and PayPal
- Building a custom CMS flexible enough for non-technical users, without giving up the structure and validation needed to keep content consistent
- Providing on-call support for a live, patient-facing healthcare platform, where issues needed to be triaged and resolved quickly given the sensitivity of the service
- Scaling the Storybook component library across a growing codebase while keeping components genuinely reusable rather than one-off variants
- Managing image delivery performance at scale via Cloudinary across a large and growing catalogue of providers and scan types

## Learnings

- Gained real experience designing and shipping an embeddable third-party widget, including the constraints that come with running inside someone else's site
- Learned how to implement and reason about payment integrations at a deeper level, working directly with the Stripe and PayPal SDKs
- Developed a better understanding of the trade-offs involved in building a custom CMS versus adopting an off-the-shelf solution
- Strengthened my on-call and incident response skills, learning how to stay calm and methodical when supporting a live, user-facing healthcare product
- Learned how a well-maintained Storybook component library pays off over time, especially as a team and codebase both grow
- Picked up practical experience with image optimisation and delivery at scale using Cloudinary
