[![Build Status](https://snap-ci.com/NinaDaPraia/simone/branch/master/build_image)](https://snap-ci.com/NinaDaPraia/simone/branch/master)

# Stack
    - NodeJS
    - Karma
    - Jasmine (can be changed as we talked before)
    - AngularJS 1.4.3
    - Lodash (Restangular's dependency)
    - Restangular
    - [SnapCI](http://snap-ci.com)

# Project's Structure
    - index.html
    - package.json: keep the necessary dependencies that will be install using npm.
    - karma.conf.js: karma config for run tests.
    - app.js
    - app-controller.js
    - app-controller_test.js
    - components: folder where entities of the application can be kept.
    - styles: css files.
    
# Start development
Run the command 'npm install' for get all dependencies in your environment.
To run tests written using Jasmine, use the command 'npm test' or 'karma start'.

