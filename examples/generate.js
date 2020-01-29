const { createPage } = require("../index");

const createClient = require("../HttpClient");
const client = createClient();

(async function() {
  const posts = await client.get("https://jsonplaceholder.typicode.com/posts");

  createPage(`posts`, { posts }, `examples/posts.tpl`);
  posts.forEach(post => {
    createPage(`posts/${post.id}`, post, `examples/post.tpl`);
  });
})();
