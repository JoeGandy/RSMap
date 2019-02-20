import React from "react";
import Layout from "../components/layout";
import OSRSMap from "../components/OSRSMap";


export default class extends React.Component {
    render() {

        return <Layout>
            <div id={"map-container"}>
                <OSRSMap />
            </div>
        </Layout>
    }
}