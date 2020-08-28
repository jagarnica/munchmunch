// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    /* eslint-disable no-param-reassign */
    // This is only done because there is no other really good way to do this yet.
    page.matchPath = `/*`;
    createPage(page);
  }
};
