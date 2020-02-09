const data =  require("./data/data");

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const { works } = data;

  works.forEach(( work ) => {
    const { slug } = work;
    createPage({
      path: `/works/${slug}`,
      component: require.resolve("./src/components/Work"),
      context: {
        work
      }
    });
    createPage({
      path: `/works/${slug}/preview`,
      component: require.resolve("./src/components/Preview"),
      context: {
        work
      }
    });
  });
};