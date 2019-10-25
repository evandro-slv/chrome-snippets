## Chrome Snippets Collection

### Angular.js (legacy)

#### Controller logger

Prints current controller information of element currently selected in devTools (`$0`).

Displayed information:

- Controller name
- Source code (click to navigate)
- Dependencies (Services / Factories) injected in controller

![Demo](./angular - Find controller info.png)

#### Setup

Just change the variables in the snippet with your modules:

    controllersModule = '';
    servicesModule = '' || controllersModule;
    
after:

    controllersModule = 'my-module';
    servicesModule = 'my-other-module' || controllersModule;

> This snippet ignores dependencies starting with `$` or `_`.