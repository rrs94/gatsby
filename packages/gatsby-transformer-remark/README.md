# gatsby-transformer-remark

Parses Markdown files using [Remark](http://remark.js.org/).

## Install

`npm install --save gatsby-transformer-remark`

## How to use

```javascript
// In your gatsby-config.js
plugins: [`gatsby-transformer-remark`]
```

A full explanation of how to use markdown in Gatsby can be found here:
[Creating a Blog with Gatsby](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/)

There are many Gatsby Remark plugins which you can install to customize how Markdown is processed. Many of them are demoed at https://using-remark.gatsbyjs.org/. See also the [source code for using-remark](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-remark).

## Parsing algorithm

It recognizes files with the following extensions as Markdown:

- md
- markdown

Each Markdown file is parsed into a node of type `MarkdownRemark`.

All frontmatter fields are converted into GraphQL fields. TODO link to docs on
auto-inferring types/fields.

This plugin adds additional fields to the `MarkdownRemark` GraphQL type
including `html`, `excerpt`, `headings`, etc. Other Gatsby plugins can also add
additional fields.

## How to query

A sample GraphQL query to get MarkdownRemark nodes:

```graphql
{
  allMarkdownRemark {
    edges {
      node {
        html
        headings {
          depth
          value
        }
        frontmatter {
          # Assumes you're using title in your frontmatter.
          title
        }
      }
    }
  }
}
```

## Troubleshooting

### Excerpts for non-latin languages

By default, `excerpt` uses `underscore.string/prune` which doesn't handle non-latin characters ([https://github.com/epeli/underscore.string/issues/418](https://github.com/epeli/underscore.string/issues/418)).

If that is the case, you can set `truncate` option on `excerpt` field, like:

```graphql
{
  markdownRemark {
    excerpt (truncate: true)
  }
}
```
