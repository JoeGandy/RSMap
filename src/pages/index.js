import React from "react";
import Layout from "../components/layout";
import L from 'leaflet'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import {withPrefix} from 'gatsby'


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markerPos: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.latlng);
        this.setState({markerPos: e.latlng});
    }

    render() {

        const marker = this.state.markerPos ? (
            <Marker
                position={this.state.markerPos}
            >
                <Popup>You are here</Popup>
            </Marker>
        ) : null;

        return <Layout>
            <div id={"map-container"}>
                <Map
                    zoom={6}
                    center={[76.40881056467734, 10037.197265]}
                    maxZoom={8}
                    onClick={this.handleClick}
                >
                    <TileLayer
                        attribution="RSMap - From OSRS Data"
                        url={withPrefix("/map/generated/{z}/{x}/{y}.png")}
                    />
                    {marker}
                </Map>
            </div>
        </Layout>
    }
}