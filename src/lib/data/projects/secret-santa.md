---
title: Secret Santa
date: 2026-10
description: A private gift exchange app for friends and family, with shared rooms and fair random assignments, built with Next.js and Redis.
published: true
url: https://secret-santa-pink-psi.vercel.app
github: https://github.com/james-litch/SecretSanta
tech:
  - Next.js
  - TypeScript
  - Redis
  - Storybook
  - Playwright
---

Secret Santa is a gift exchange app that lets friends and family organise a draw without creating accounts. An organiser creates a room, shares its code, and draws names once everyone has joined. Each participant sees only their own recipient, including the organiser. The current implementation uses Next.js and Redis, with a focus on keeping assignments private and preserving the result when connections fail or requests are retried.

## Features

- Create a room and invite participants with a shareable code, allowing people to join while the organiser is offline
- Automatically updating waiting rooms with connection feedback and a visible participant list
- A single confirmed draw for groups of three or more, with fair random assignments that never pair someone with themselves
- Private recipient views that remain available when participants return in the same browser, until the room expires
- Recovery for interrupted create and join requests, alongside clear explanations for expired rooms and lost browser access

## Challenges

- Committing a draw exactly once while handling simultaneous requests and participants joining during the draw
- Keeping each recipient private through participant-specific responses, room-scoped cookies, and hashed credentials in storage
- Recovering from responses lost after a successful write without creating duplicate rooms, participants, or assignments
- Preserving the original room expiry across retries and revisits, including removing private content when the deadline passes offline

## Learnings

- Gained experience using atomic Redis Lua scripts to enforce room state, membership, and draw rules under concurrent requests
- Developed a deeper understanding of retry-safe operations and the difference between a failed response and a failed write
- Learned how to generate uniformly random valid gift assignments using cryptographic randomness and rejection of self-assignments
- Strengthened testing across unit logic, real Redis integration, Storybook accessibility checks, and browser journeys with deliberately interrupted connections
