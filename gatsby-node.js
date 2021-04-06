/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({
    graphql,
    actions
  }) => {
  
    const {
      createPage
    } = actions;
    
    const BaseTpl = require.resolve("./src/templates/base.tsx");
    createPage({
      path: '/',
      component: BaseTpl,
      context: {},
    });

    const CategoriesTpl = require.resolve("./src/templates/categoriesTpl.tsx");
    createPage({
      path: '/categories',
      component: CategoriesTpl,
      context: {},
    });

    const OrderTpl = require.resolve("./src/templates/orderTpl.tsx");
    createPage({
      path: '/commandes',
      component: OrderTpl,
      context: {},
    });

    const ArticlesTpl = require.resolve("./src/templates/articlesTpl.tsx");
    createPage({
      path: '/articles',
      component: ArticlesTpl,
      context: {},
    });
  }