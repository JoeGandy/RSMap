import React from "react"
import Header from "./Partials/header";
import Footer from "./Partials/footer";
import Helmet from "react-helmet";

require('../scss/main.scss');

export default class extends React.Component {
    render() {
        return <div className="_main_content_wrapper">
            <Helmet title={"RSMap - Old School Runescape"}>
                <meta charSet="utf-8"/>
                <meta name="description"
                      content="RSMap is an advanced map built outside of osrs"/>
                <meta name="keywords" content="rsmap osrs map runescape"/>
                <html lang="en"/>
            </Helmet>
                <Header/>
                <div className="_main_window">
                    <div className="_main_window_content">
                        {this.props.children}
                        <Footer/>
                        <div style={{clear: 'both'}}/>
                    </div>
                </div>
        </div>
    }
    }