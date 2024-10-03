# Cypress Testing Project

## 0. What are we testing, and what is this about?

This project is a suite of automated tests created using Cypress for end-to-end testing of a web application (https://www.automationexercise.com/). It ensures that critical functionalities of the website work as expected and helps catch bugs.

The tests include, but are not limited to:

- User interactions (e.g., filling out forms, clicking buttons)
- Navigation across different pages
- Verifying UI components and functionality

## 1. Requirements

Before you can run the Cypress tests, ensure you have the following:

- Node.js (version 12 or higher recommended)
- npm (comes with Node.js)

Cypress is installed as a development dependency, so you'll need to install the project dependencies before running the tests.

## 2. How to Install

To set up this project locally, follow these steps:

### 1. Clone the repository:

```
git clone https://github.com/ominouswart/cypress-project.git
```

### 2.Navigate into the project directory:

```
cd cypress-project
```

### 3.Install the dependencies:

```
npm install
```

## 3. How to Run Tests

There are two ways to run the Cypress tests:

### Option 1: Open Cypress Test Runner (Interactive Mode)

This option opens the Cypress test runner, where you can manually select and observe the test executions in a browser:

```
npm run test
```

or

```
npx cypress open
```

### Option 2: Run Tests in Command-Line (Headless Mode)

This option runs all tests in the command line without opening the Cypress interface, useful for CI or faster execution:

```
npm run test:cmd
```

or

```
npx cypress run
```

## 4. Issues with Tests or Website

### Common Issues:

- Flaky Tests: Some tests may be timing-dependent and might occasionally fail due to network speed or asynchronous actions on the site.
- Cross-browser testing: Cypress supports testing in multiple browsers, but be aware that browser-specific issues might arise.