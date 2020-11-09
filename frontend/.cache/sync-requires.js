const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\React_Node_Projects\\Starberry_Projects\\test-project-2\\frontend\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\React_Node_Projects\\Starberry_Projects\\test-project-2\\frontend\\src\\pages\\404.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("D:\\React_Node_Projects\\Starberry_Projects\\test-project-2\\frontend\\src\\pages\\articles.js"))),
  "component---src-pages-card-js": hot(preferDefault(require("D:\\React_Node_Projects\\Starberry_Projects\\test-project-2\\frontend\\src\\pages\\card.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\React_Node_Projects\\Starberry_Projects\\test-project-2\\frontend\\src\\pages\\index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("D:\\React_Node_Projects\\Starberry_Projects\\test-project-2\\frontend\\src\\pages\\using-typescript.tsx")))
}

