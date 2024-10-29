# MyPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## References

[1] https://codepen.io/Nayan-Ladumor/pen/pomzjYY
[2] https://codepen.io/varadmadhvani1/pen/WNWWXQW


## structure of the app
```
src/
│
├── app/
│   ├── core/                       # CoreModule: Global singleton services and core components
│   │   ├── services/               # Services with singleton scope
│   │   ├── guards/                 # Route guards for authorization and authentication
│   │   └── interceptors/           # HTTP interceptors for request/response manipulation
│   │
│   ├── shared/                     # SharedModule: Shared components, directives, and pipes
│   │   ├── components/             # Reusable components
│   │   ├── directives/             # Custom directives
│   │   └── pipes/                  # Custom pipes
│   │
│   ├── features/                   # FeatureModules: Each feature gets its own module
│   │   ├── home/                   # Home feature module
│   │   ├── about/                  # About feature module
│   │   ├── portfolio/              # Portfolio feature module
│   │   ├── contact/                # Contact feature module
│   │   ├── blog/                   # Optional: Blog feature module (if included)
│   │   ├── not-found/              # Not-found (404) page module
│   │   └── feature-routing.module.ts # Routing module for features
│   │
│   ├── app.component.ts            # Main app component
│   ├── app.component.html          # Main app template
│   ├── app.module.ts               # Root app module
│   ├── app.routes.ts               # Routes configuration
│   ├── app.config.ts               # App-wide configuration
│   └── app-routing.module.ts       # Root routing module
│
└── assets/                         # Static assets (images, fonts, etc.)
```