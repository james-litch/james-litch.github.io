---
title: Android University Timetable App
date: 2019-06
description: An Android timetable app created for the univerity's software project.
published: true
github: https://github.com/james-litch/UoLTimetables
tech:
  - Java
  - MySQL
  - PHP
---

This was a university software project to build a native Android app that gives students a clean, mobile-friendly way to view their timetables. A PHP backend served timetable data from a MySQL database, which the Android app consumed to display each student's schedule.

## Features

- Native Android app built in Java, displaying a student's weekly timetable
- Map view showing the location of each lecture, letting students see exactly where their next session is on campus
- PHP REST API backend for fetching timetable data, decoupling the app from direct database access
- MySQL database storing course, module, and scheduling information
- User-specific timetables, so each student only sees the modules and sessions relevant to them

## Challenges

- Mapping university room and building names to accurate map coordinates, since existing timetable data only had room codes rather than usable location data
- Integrating Android's map APIs and handling permissions for location-based features
- Coordinating as part of a team project, agreeing on API contracts between the Android frontend and PHP backend early enough to work in parallel

## Learnings

- Gained practical experience with native Android development in Java, including UI layout and activity/fragment lifecycle management
- Learned how to integrate map functionality into an Android app, including plotting locations and handling user permissions
- Learned how to design and consume a simple REST API, and the basics of structuring a PHP backend around a MySQL database
- Developed a better understanding of relational database design for real-world
- Built experience working as part of a team on a shared codebase with a defined frontend/backend split
