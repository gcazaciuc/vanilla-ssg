# Vanilla-SSG

A very minimalistic, single function static site generator
based on ES6 template strings.

It makes use of the minimalistic `renderly` package (https://github.com/gcazaciuc/renderly) for rendering the templates.

## Getting started

Install the vanilla-ssg package:

```console
npm i vanilla-ssg
```

The vanilla-ssg package is meant to be used programatically in order to generate static sites.

This is the simplest and most flexible way.

After installing, create a Javascript file that will contain the code for the generator.

Let's call it `generate.js` :

```javascript
const { createPage } = require("vanilla-ssg");

const createClient = require("../HttpClient");
const client = createClient();

(async function() {
  const posts = await client.get("https://jsonplaceholder.typicode.com/posts");

  createPage(`posts`, { posts }, `examples/posts.tpl`);
  posts.forEach(post => {
    createPage(`posts/${post.id}`, post, `examples/post.tpl`);
  });
})();
```

There is a **single** API method called `createPage` taking in the
page url, page data and the template to apply.
It's output is an HTML file that is written to disk.

The purpose of the script is to retrieve any needed data to generate the site and to call `createPage` API in order to create the HTML.
