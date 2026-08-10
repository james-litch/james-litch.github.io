---
title: MyStats.gg
date: 2022-01
description: A stats tracking application developed for various online games.
published: true
tech:
  - TypeScript
  - Next.js
  - Tailwind CSS
  - Node.js
---

MyStats.gg is a stats tracking application built for players of various online games, giving users a clean, visual way to track their performance over time. I worked primarily on the frontend, building out the graphs and interactive data visualisations used throughout the app. The backend leveraged existing third-party game APIs, with background workers used to fetch and cache new data where those APIs had rate limits or other constraints.

## Features

- Interactive graphs and charts visualising player stats over time, allowing users to spot trends and track improvement
- Drill-down views letting users explore their stats in more detail, beyond a single high-level summary
- Support for tracking stats across multiple different online games from a single account
- Background data-fetching workers, keeping user stats up to date by pulling fresh data from third-party game APIs on a scheduled basis
- Responsive, data-dense UI built to present a lot of information clearly without overwhelming the user

## Challenges

- Designing interactive graphs and visualisations that stayed readable and performant even with large amounts of historical stat data
- Working around rate limits and other constraints on the third-party game APIs the backend depended on, without leaving users with stale data
- Architecting background workers to intelligently fetch and cache new data ahead of time, rather than hitting external APIs directly on every user request
- Keeping the frontend resilient to inconsistent or occasionally missing data from upstream APIs, rather than breaking the UI
- Balancing how much historical data to display versus keeping charts fast to load and easy to interpret

## Learnings

- Gained hands-on experience building complex, interactive data visualisations in a real product used by real players
- Learned practical patterns for working with third-party APIs at scale, particularly around rate limiting and caching strategies
- Developed a better understanding of how background workers and scheduled jobs can be used to smooth over the limitations of external data sources
- Strengthened my TypeScript and Next.js skills, particularly around structuring a data-heavy frontend application
- Learned how to design UI for dense, numerical data in a way that stays approachable rather than overwhelming
