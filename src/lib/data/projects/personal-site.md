---
title: Personal Site
date: 2026-05
description: A personal portfolio site created with SvelteKit and Tailwind, with built in dark/light mode.
published: true
url: https://litchfield.dev
github: https://github.com/james-litch/portfolio
tech:
  - SvelteKit
  - Tailwind CSS
  - Vite
  - Mdsvex
---

This is my personal portfolio site, built to showcase my projects and writing. It's built with SvelteKit for fast, minimal-JS page loads, styled with Tailwind, and uses Mdsvex to write project pages and posts directly in markdown alongside Svelte components.

## Features

- Dark/light mode toggle with the user's preference persisted and respected on repeat visits, with no flash of the wrong theme on load
- Project pages authored in markdown via Mdsvex, allowing frontmatter metadata (like this file) to drive layout and listing pages automatically
- Fast page loads powered by SvelteKit's compiler-driven approach and Vite's dev/build tooling
- Fully responsive design built with Tailwind CSS utility classes

## Challenges

- Preventing a flash of unstyled/wrong-theme content on page load when detecting and applying the user's preferred colour scheme
- Getting Mdsvex configured correctly to allow custom Svelte components inside markdown content, rather than just plain text and images

## Learnings

- Gained hands-on experience with SvelteKit's routing and layouts
- Learned how Mdsvex bridges markdown and Svelte, and the tradeoffs of content-as-code versus a traditional CMS
- Picked up practical techniques for implementing theme switching without janky rendering
- Developed a better sense of how to structure a personal site so that adding new projects is quick and low-friction
