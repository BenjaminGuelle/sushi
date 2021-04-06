
import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";

// TODO Ajouter un "main-not-display" pour les résolutions non prises en charges

const BaseTpl = ({ data }) => {

    // const [datas] = React.useState(data.wpcontent.page);

    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export default BaseTpl;