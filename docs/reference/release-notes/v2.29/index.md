---
date: "2020-12-15"
version: "2.29.0"
---

# [v2.29](https://github.com/gatsbyjs/gatsby/compare/gatsby@2.29.0-next.0...gatsby@2.29.0) (December 2020 #2)

---

Welcome to `gatsby@2.29.0` release (December 2020 #2)

Key highlights of this release:

- [Query on Demand](#query-on-demand) - TODO
- [Lazy Images](#lazy-images) - TODO
- [Improvements to our CLI](#improvements-to-our-cli) - improved `create-gatsby` & new `plugin` command

Other notable changes:

- [Performance improvements](#performance-improvements)

Sneak peak to next releases:

- TODO

**Bleeding Edge:** Want to try new features as soon as possible? Install `gatsby@next` and let us know
if you have any [issues](https://github.com/gatsbyjs/gatsby/issues).

[Previous release notes](../v2.28/index.md)<br>
[Full changelog](https://github.com/gatsbyjs/gatsby/compare/gatsby@2.29.0-next.0...gatsby@2.29.0)

## Query on Demand

TODO

## Lazy Images

TODO

## Improvements to our CLI

In [v2.27](../v.27/index.md#create-gatsby) we introduced `create-gatsby`, a new and interactive way to create a Gatsby site. You can run it in your terminal with `npm init gatsby`.

A couple of papercuts were fixed but we also added new features:

- Prompt for your site name instead of a folder name
- Automatically add this name to your `siteMetadata` and `package.json`
- Add `-y` flag. This flag bypasses all prompts other than namin your site

The regular `gatsby-cli` received a new command to list out all plugins in your site by running `gatsby plugin ls`.

## Performance improvements

We were able to ship a bunch of performance improvements both to Gatsby itself and its plugins:

- The PR [28375](https://github.com/gatsbyjs/gatsby/pull/28375) fixed an unguided search in `gatsby-source-contentful` that can significantly drop your time for an incremental build (and perhaps others). In this case (for a site with 80k elements) it dropped the time from 5 minutes to sub-second.
- The PR [28525](https://github.com/gatsbyjs/gatsby/pull/28525) drops the `async` keyword from the `wrappingResolver` that wraps all resolvers passed on to GraphQL. In practice this means a 5-10% overall improvement to the runtime of a site.

## Contributors

A big **Thank You** to [everyone who contributed](https://github.com/gatsbyjs/gatsby/compare/gatsby@2.29.0-next.0...gatsby@2.29.0) to this release 💜