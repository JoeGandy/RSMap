import React, {Component} from 'react'
import Helmet from "./layout";

export default class Header extends Component {
    render() {
        return (
            <div className="_header">
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
            </div>
        )
    }
}