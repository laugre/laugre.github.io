/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            subtitle
            image
            text
            quote
            objectif
            client
            year
            role
            technology
          }
        }
      }
    }
  `);
  results.data.allProjectsJson.edges.forEach(edge => {
    const project = edge.node;
    createPage({
      path: `/projects/${project.slug}/`,
      component: require.resolve('./src/templates/project.js'),
      context: {
        title: project.title,
        slug: project.slug,
        subtitle: project.subtitle,
        image: project.image,
        text: project.text,
        quote: project.quote,
        objectif: project.objectif,
        client: project.client,
        year: project.year,
        role: project.role,
        technology: project.technology,
      },
    });
  });
};
