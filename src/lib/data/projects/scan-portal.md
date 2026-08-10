---
title: Scan Portal
date: 2026-01
description: A B2B platform to allow healthcare providers to manage patient scans.
published: true
url: https://portal.scan.com/admin/login
tech:
  - TypeScript
  - Ruby on Rails
  - Node.js
  - React.js
  - Tailwind CSS
  - React Query
---

Scan Portal is a B2B platform built for clinicians to book scans on behalf of their patients. Rather than a patient booking for themselves, a clinician can search for and arrange a scan, track its progress, and manage patient records, all from one dashboard. It's built on a Rails/Node backend with a React and TypeScript frontend, and shares its underlying data with Scan.com's consumer-facing products via Scan API.

## Features

- Clinician-facing booking flow for arranging scans on behalf of patients, without the patient needing to book themselves
- Patient record management, letting clinicians track multiple patients and their associated scans and referrals in one place
- Data fetching and caching handled with React Query, keeping booking and patient data fresh without unnecessary manual refreshes or re-fetching
- Optimistic mutations for common actions like creating or updating a booking, updating the UI instantly while the request completes in the background for a fast, responsive feel

## Challenges

- Designing a booking flow around a clinician acting on behalf of a patient, rather than the more typical self-service consumer booking flow
- Implementing optimistic mutations correctly across booking and patient actions, including rolling back cleanly in the UI whenever a mutation failed and surfacing that failure to the clinician
- Managing complex, interdependent server state (patients, bookings, scan statuses) cleanly with React Query, rather than reaching for manual state management for every piece of data
- Getting cache invalidation right across related queries, so an optimistic update to a booking reliably stayed consistent with that patient's record shown elsewhere
- Coordinating with the shared Scan API backend to ensure the portal's data stayed consistent with the consumer-facing products built on top of the same system

## Learnings

- Learned how booking flows differ when designed for a clinician acting on a patient's behalf, particularly around what information needs to be captured and who it needs to be visible to
- Gained deep, practical experience implementing optimistic mutations with React Query, including handling rollback and error states so the UI never gets left in an inconsistent state
- Learned how much optimistic updates can improve perceived performance, alongside the added complexity of getting rollback and cache invalidation right
- Strengthened my understanding of working against a shared backend API, and the coordination needed when multiple products depend on the same data source
- Learned more about structuring a large-scale React/TypeScript codebase in a way that keeps data-fetching logic maintainable as features grow
