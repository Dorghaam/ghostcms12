const ghostContentAPI = require("@tryghost/content-api");

// Init Ghost API
const api = new ghostContentAPI({
  url: "http://localhost:2368",
  key: "",
  version: "v5.0",
});

module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });
  eleventyConfig.addGlobalData("questions", () =>
    api.posts.browse({ filter: "tag:question" }).catch((err) => {
      console.error(err);
    })
  );
};
