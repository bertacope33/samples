# sky55 readme

##Required Packages/Dependiencies
- [ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Node 4.2.3 ](https://nodejs.org/en/download/)
- [Bower 1.6.8](http://bower.io/)
- [grunt 0.4.5](http://gruntjs.com/installing-grunt)
- [grunt-cli 0.1.13](http://gruntjs.com/using-the-cli)
- [scss-lint](https://github.com/brigade/scss-lint#installation)

*All other packages will be installed by node and bower

##Build Instructions
1. In Terminal navigate to folder root and run:
  1. `npm install`
  2. `bower install`
  3. `grunt`

*Generall speaking the first two steps will only produce results the first time installing or when dependencies have changed.

##Build Options
  1. 'grunt' is the default command and simply builds from the source files and moves/copies completed files to the 'assets' folder. This 'assets' folder is what will be linked to the aem and hybris instances and will include all of the css, js, images and fonts needed for the styling.
  2. 'grunt server' this will build all of the assets into a server instance that will run on 127.0.0.1:9000. Any HTML file that is in the 'app' folder will be accessible from this environment, and will be hooked up with live reload functionality, meaning that any save to an html file, scss file or js file will instantly kick off a build and refresh the localhost. This task is for development only.
  3. 'validate-js' will run jshint against all of the custom javascript files to check for errors.
  4. 'validate-css' will run scss-lint against the custom sass files to check for errors.
  5. 'compile-sass' will comile all of the sass files and write the compiled code to app/css. This task does not move the compiled code to the assets folder.

##Directory Structure
- 'app' is all of the source files
- 'assets' is the directory that needs to be hooked up to Hybris and AEM as the UI assets
- 'node_modules' is a dependency folder for Grunt to use during the ui build process

