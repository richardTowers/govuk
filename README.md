richardtowers/govuk
===================

An experimental monolithic frontend for GOV.UK, an alternative to the "microservices" approach currently employed.

Based on https://github.com/beckal/typed-govuk, but incorporating a couple of new ideas:

1. All the existing frontend "microservices" are included as git submodules, to allow this frontend to consume hardcoded content such as rails translations files
1. Uses https://github.com/colinhacks/zod for runtime type checking of rails translations files (and eventually content-schemas), enabling both compiletime and runtime type checking

![Screenshot showing VSCode editor hints for properties within a translation file](/docs/images/zod-completion-screenshot.png)

I'm also interested in the idea of compiling the existing ERB templates into JavaScript, but I suspect that idea is impractical.
