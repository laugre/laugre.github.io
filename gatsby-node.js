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
            id
            title
            slug
            subtitle
            image
            imageMobile
            text
            quote
            objectif
            client
            year
            role
            technology
            medias {
              title
              caption
              type
              media
            }
          }
        }
      }
    }
  `);
  results.data.allProjectsJson.edges.forEach((edge, index) => {
    const project = edge.node;
    const projectNumber = results.data.allProjectsJson.edges.length;
    const prevId = index == 0 ? projectNumber - 1 : index - 1;
    const nextId = index == projectNumber - 1 ? 0 : index + 1;
    createPage({
      path: `/projects/${project.slug}/`,
      component: require.resolve('./src/templates/project.js'),
      context: {
        index: project.id,
        title: project.title,
        slug: project.slug,
        subtitle: project.subtitle,
        image: project.image,
        imageMobile: project.imageMobile,
        text: project.text,
        quote: project.quote,
        objectif: project.objectif,
        client: project.client,
        year: project.year,
        role: project.role,
        technology: project.technology,
        medias: project.medias,
        previous: results.data.allProjectsJson.edges[prevId].node,
        next: results.data.allProjectsJson.edges[nextId].node,
      },
    });
  });
};
