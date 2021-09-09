# A starter template for a typescript project

This is somewhat minimal starting point for a (frontend) typescript project. 

The toolchain is pre-configured and includes the following:

* [Sass](https://sass-lang.com/)
* [ResetCss](https://meyerweb.com/eric/tools/css/reset/)
* [Webpack](https://webpack.js.org/)
* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)
* [Jasmine](https://jasmine.github.io/)

All the included configuration files have been placed in the project root for convenience, although as the project scales upwards, it may be preferrable to adjust the project layout, e.g. create seperate directories for configuration, sample data, tests etc. 


## Quick note on style / code format

I personally use IDE extensions for applying code format on save. 

The current settings are as follows:

* Tabs and not spaces
* Tab size is 4
* YES I USE SEMICOLONS!
* Double quotes are the best quotes


## Testing

This template comes with the `Jasmine` test framework.

It is lightweight and depencency free and perfect for unit testing purposes. 

For integration / end-to-end testing (or any testing where a DOM required), 

I would highly recommend `Playwright` which can easily be integrated with `Jasmine` or any other test framework. 

*Official site:* https://playwright.dev


## Build pipeline

The current build setup will be sufficient for `modern browsers`, 

however it may be preferrable to use [Babel](https://babeljs.io/) for older browsers (e.g. IE) or more optimized builds. 

## Contact

Feel free to contact me if you have any questions regarding this template!

Steffen Park <dev@istherepie.com>
