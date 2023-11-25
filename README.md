# About

A proof of concept for Playwright demonstrating various capabilities, targetted to Cypress' real-world test application.

# Requirements

Have `npm` installed and available.

# Installation

1. Clone this repository
2. Run `npm run setup` to install dependencies and Playwright browsers
3. Clone the [Cypress RWA application](https://github.com/cypress-io/cypress-realworld-app) in a seperate folder and follow setup instructions there
4. Copy the `example.env` file and rename it to `.env`. Update your `APP_LOCATION` if Step 3 lives in a seperate location

# Running the tests

Execute `npm run test`. The target app server will start running if it isn't already.
