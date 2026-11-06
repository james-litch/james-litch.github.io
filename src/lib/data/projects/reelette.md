---
title: Reelette
date: 2026-11
description: A shared movie watchlist that takes the indecision out of choosing what to watch, built with Next.js and Supabase.
published: true
url: https://reelette-red.vercel.app
github: https://github.com/james-litch/reelette
tech:
  - Next.js
  - Supabase
  - shadcn/ui
  - TMDB API
---

Reelette is a movie-night companion for groups who spend more time deciding what to watch than actually watching. It brings everyone's suggestions into a shared room, with movie search powered by TMDB and a random picker to make the final decision. Built with Next.js and Supabase, it keeps requests and watch history together so the next movie night starts with a ready-made shortlist.

## Features

- Shared rooms with Google sign-in, expiring invite links, and owner controls for managing membership
- Movie search through TMDB, with posters, release years, and named requestors attached to each suggestion
- Filter requests by genre and requestor, then randomly choose from the matching unwatched movies
- Optional exclusion of the last requestor to give someone else's suggestions a turn, plus a pick-again option for another choice
- Watch history and Letterboxd links, with live updates when room members add, watch, or delete requests

## Challenges

- Enforcing room membership and owner permissions at the database level through Supabase row-level security and checked database functions
- Keeping shared lists up to date after live changes and reconnects without losing someone's filters, search state, or scroll position
- Making random selection respect both active filters and watch history, including cases where no eligible movies remain
- Handling debounced movie searches, cancelled requests, and stale responses while keeping TMDB credentials on the server

## Learnings

- Gained practical experience combining Supabase authentication, row-level security, and private Realtime broadcasts in a collaborative app
- Developed a clearer separation between change notifications and authorised data access, with room data fetched through database permissions
- Learned how to integrate an external movie API while saving consistent metadata snapshots for requests and history
- Built experience translating a simple group decision into explicit selection rules and predictable interface behaviour
