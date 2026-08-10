---
title: Nell Lecture Companion
date: 2020-01
description: A cross-platform lecture companion app.
published: true
github: https://github.com/james-litch/nell_app
tech:
  - Flutter
  - GraphQL
  - Node.js
  - MongoDB
---

Nell is a cross-platform lecture companion app, built as my university dissertation project. It aims to increase student engagement during lectures by giving students a direct, low-friction way to ask questions and take part in live quizzes, without interrupting the flow of the lecture itself.

## Features

- Ask questions to the lecturer in real time during a live lecture, without needing to speak up in front of the class
- Take part in interactive quizzes set by the lecturer
- Email and password authentication using JWTs, with separate roles for students and lecturers controlling what each can see and do within a lecture session
- Lecturer dashboard for creating and managing lecture sessions, quizzes, and viewing incoming student questions
- Cross-platform support via Flutter, allowing the same codebase to run on both iOS and Android

## Challenges

- Designing a real-time system where student questions and quiz results update live for the lecturer without needing to manually refresh
- Implementing secure email/password authentication with JWTs, including handling token expiry and refresh without disrupting the user experience
- Structuring role-based access so lecturers and students had appropriately different permissions and views once authenticated
- Modelling lecture, session, and quiz data in MongoDB in a way that stayed flexible as features were added throughout the dissertation
- Balancing the scope of the app against dissertation deadlines, prioritising a solid core experience over a long feature list

## Learnings

- Learned how to build a cross-platform mobile app from scratch using Flutter, including managing state and navigation across a multi-role app
- Gained practical experience implementing JWT-based authentication and role-based authorisation in a Node.js backend
- Learned how to design a GraphQL API and schema from the ground up, rather than just consuming an existing one
- Developed a better understanding of NoSQL data modelling with MongoDB, particularly for data that doesn't fit neatly into rigid relational structures
- Strengthened my research and academic writing skills through producing the accompanying dissertation, including justifying technical decisions and evaluating the finished app against its original goals
