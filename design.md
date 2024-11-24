# Design Document

This design docuemnt cointains the following contents:

- [Design Document](#design-document)
  - [Introduction](#introduction)
  - [Scope](#scope)
  - [Architecture](#architecture)
  - [User Stories](#user-stories)
    - [User](#user)
    - [Sponsor](#sponsor)
    - [Organizer](#organizer)
  - [Functional Requirements](#functional-requirements)
  - [Non-Functional Requirements](#non-functional-requirements)

## Introduction

This document describes the design of the project. It includes the architecture, the data model, the API, the user interface, etc.

## Scope

This design document is for the website of literary festival Sahiti conducted by NIT Calicut. The scope of the design document is for designers, developers, and organizers to understand the project and its requirements.

 The website is a platform for the literary enthusiasts to explore the various activities and opportunities available in the festival. The website is a single-page application (SPA) built with React.

## Architecture

The project is a web application with a client-server architecture. The client is a single-page application (SPA) built with React. The server is a RESTful API built with Node.js and Express. The client and server communicate over HTTP using JSON. The server stores data in a strapi database.

## User Stories

### User

As a user I want to :

1. explore the list of activites, competitions, and workshops available in the festival.
2. know the schedule of the festival.
3. register for the festival's events.
4. buy tickets for the festival.
5. know the location of the festival.
6. know about the speakers and judges of the festival.
7. know about the sponsors of the festival.
8. know about the organizers of the festival.
9. know the contact information of the organizers.
10. know the rules and regulations of the festival and its events.
11. know the terms and conditions of the festival.
12. know various policies like privacy policy, refund policy, cancellation policy and their details.
13. know the history of the festival.

### Sponsor

As a sponsor I want to...

1. checkout the various sponsorship options available.
2. to register for sponsorship.
3. to ensure that my sponsorship is acknowledged.
4. to make sure that my sponsorship is utilized effectively.
5. to know the benefits of sponsoring the festival.
6. to know the terms and conditions of sponsoring the festival.
7. to know the contact information of the organizers.
8. to know the location of the festival.
9. to know the schedule of the festival.
10. to know the rules and regulations of the festival and its events.

### Organizer

As an organizer I want to...

1. manage the list of activites, competitions, and workshops available in the festival.
2. manage the schedule of the festival.
3. manage the registration for the festival's events.
4. manage the tickets for the festival.
5. manage the location of the festival.
6. manage the speakers and judges of the festival.
7. manage the sponsors of the festival.
8. manage the contact information of the organizers.
9. manage the rules and regulations of the festival and its events.
10. manage the terms and conditions of the festival.
11. manage various policies like privacy policy, refund policy, cancellation policy and their details.
12. manage the history of the festival.
13. manage the various sponsorship options available.
14. manage the registration for sponsorship.


## Functional Requirements

The website should have a...

1. `homepage` with a list of activites, competitions, and workshops available in the festival.
2. `schedule` page with the schedule of the festival.
3. `registration` page for the festival's events.
4. `tickets` page for the festival.
5. `contact` page with the contact information of the organizers.
6. `speakers` page with the speakers and judges of the festival.
7. `sponsors` page with the sponsors of the festival.
8. `location` page with the location of the festival.
9. `terms` page with the terms and conditions of the festival, and various policies like privacy policy, refund policy, cancellation policy and their details.

The admin should be able to...

1. manage the list of activites, competitions, and workshops available in the festival.
2. manage the schedule of the festival.
3. manage the registration for the festival's events.
4. manage the tickets for the festival.
5. manage the location of the festival.
6. manage the speakers and judges of the festival.
7. manage the sponsors of the festival.
8. manage the contact information of the organizers.
9. manage the rules and regulations of the festival and its events.
10. manage the terms and conditions of the festival.
11. manage various policies like privacy policy, refund policy, cancellation policy and their details.

The website should be...

1. responsive for mobile, tablet, and desktop.
2. have a unified design and theme like navigation, layout, color scheme, typography, and spacing.
3. have animations and transitions for a better user experience.

## Non-Functional Requirements

The website should be...

1. able to handle registration for users with custom API.
2. able to handle payments for tickets with custom API.
3. able to handle registration for sponsors with custom API.
4. able to handle payments for sponsorship with custom API.
5. able to handle contact form submissions with custom API.

The website should be...

1. fast and responsive with a loading time of less than 3 seconds.
2. secure with HTTPS, CORS, and CSRF protection.
3. SEO optimized.