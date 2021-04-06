import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Categories from "../components/Categories";

// TODO Ajouter un "main-not-display" pour les résolutions non prises en charges

const CategoriesTpl = () => {

    // const [datas] = React.useState(data.wpcontent.page);

    return (
        <Layout>
            <Categories />
        </Layout>
    );
};

export default CategoriesTpl;