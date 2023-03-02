# Calculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker up

The dockwe was configuration to up angular and nginex server. run `docker build -t ${image-name} .` after that list for confirm image and run `docker run --name ${container-name}-container -d -p 8080:80 ${image-name}` and access http://localhost:8080/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
