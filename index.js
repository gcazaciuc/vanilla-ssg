const { createRenderer } = require("renderly");

const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const render = createRenderer({
  globals: {
    link: function() {}
  }
});

function createDirStructure(url) {
  const urlParts = url.split("/");
  const file = `${urlParts.pop()}.html`;
  const dir = path.join(...["build"].concat(urlParts));
  mkdirp.sync(dir);
  return { dir, file };
}

function createPage(url, data = {}, layout) {
  const output = render(layout, data);
  const { dir, file } = createDirStructure(url);
  fs.writeFileSync(path.join(dir, file), output);
}

module.exports = {
  createPage
};
