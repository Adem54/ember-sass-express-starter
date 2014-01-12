Ember + Sass + Express App Kit
==============================

![Alt](https://lh6.googleusercontent.com/-A6yCTan8L18/UtHxPg9U1gI/AAAAAAAADzw/Ov1P-8oymx4/w500-h376-no/logo-235e394c.png)
![Alt](https://lh6.googleusercontent.com/-NteYFnZZGKI/UtHxPT7EqLI/AAAAAAAADzc/Wmyj-FmIp7E/w500-h148-no/MongoDB_Logo.png)
![Alt](https://lh6.googleusercontent.com/-_z1-DOIYRGo/UtHxPt_tfxI/AAAAAAAADzs/S9dNTRV6fnQ/w500-h250-no/nodejs_logo.png)
![Alt](https://lh4.googleusercontent.com/-tO81OpzrRLQ/UtHxPi-wUgI/AAAAAAAADzk/yOe91cZHLvU/w500-h190-no/emberjs.png)

## Overview
This project provides a starting point for your Ember apps with Express web framework serving as a RESTful API  back-end. Directory structure is heavily influenced by [ember-tools](https://github.com/rpflorence/ember-tools) and [Ember App Kit](https://github.com/stefanpenner/ember-app-kit). In fact it is designed to work with ember-tools for quickly scaffolding models, views, template, routes and controllers. Here is an example from ember-tools's github page:

![Alt](https://lh3.googleusercontent.com/-953Nn0wsC_E/UtICtjFhYII/AAAAAAAAD0M/4TzndfztrP4/w1200-h694-no/687474703a2f2f636c2e6c792f696d6167652f32473078333233753135306d2f656d6265722e676966-3.gif)

Thanks to Ember's *Convention-over-Configuration* we are quickly able to generate application files with a simple command. That is a huge time saver in the long run.

**Versions:** Ember 1.3, Ember Data 1.0b5, Handlebars 1.1.2, jQuery 2.0.3


## Prerequisites
- Node.js
- MongoDB

## Usage
Clone the repo, navigate to it, and then install all the dependencies:
```
npm install
```
To start a web server, run `node app.js`. Note: MongoDB must be running or else the server won't start. Then visit `http://localhost:3000`. There are no server-side views, thus you will not see `res.render` anywhere in the code. The `index.html` is loaded implicitly from the `/public` folder. And `index.html` in turn loads the entire Ember application.

Updating *.scss stylesheets will automatically result in generating a proper css file, as long as the Express server is running. This ability is provided by the `node-sass` library.

## TODO
- Authentication (Local + Facebook)
- Express Middleware

## Tests
There are currently no actual Ember tests, but I plan to add QUnit tests in the future. Why QUnit and not Mocha or Jasmine? QUnit is the default testing framework in Ember, and I have no preference for any testing framework, so I chose to stick with the defaults. But of course feel free to swap it for something else.

## Contributing
Please feel free to submit a bug, propose an enhancement, send pull requests. This project is definitely not set in stone, and I plan to keep always improving it as I learn better practices from Ember and Node.js communities.
