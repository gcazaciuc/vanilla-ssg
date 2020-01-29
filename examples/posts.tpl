<html>
  <head>
    <meta name="description" content="Homepage" />
  </head>
  <body>
    <div id="app">
     All posts: 
     <ul>
        ${posts.map((post) => render(`examples/single_post.tpl`, post))}
     </ul>
    </div>
  </body>
</html>
