richardtowers/govuk
===================

An experimental monolithic frontend for GOV.UK, an alternative to the "microservices" approach currently employed.

Based on https://github.com/beckal/typed-govuk, but incorporating a couple of new ideas:

1. All the existing frontend "microservices" are included as git submodules, to allow this frontend to consume hardcoded content such as rails translations files
1. Plan to use https://github.com/colinhacks/zod for runtime type checking of both content-schemas and rails translations files

I'm also interested in the idea of compiling the existing ERB templates into JavaScript, but I suspect that idea is impractical.
