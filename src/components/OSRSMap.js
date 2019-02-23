import React, {Component} from 'react'
import {withPrefix} from 'gatsby';
import 'leaflet/dist/leaflet.css';
import {Map, Pane, Rectangle, TileLayer, Polyline} from "react-leaflet";
import MapMarkers from "./MapMarkers";
import * as Icons from "../classes/Icons";
import L from "leaflet";

export default class OSRSMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoomLevel: 6,
            line: null,
            center: {"lat": 76.40881056467734, "lng": 317.13134765625006}
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.centerMap = this.centerMap.bind(this);
    }

    handleZoomEnd() {
        this.setState({zoomLevel: this.map.viewport.zoom});
    }

    handleClick(e) {
        console.debug(JSON.stringify(e.latlng));

        let cloesest_icon = Icons.getClosestIcon(e.latlng.lat, e.latlng.lng);

        this.setState({
            line: [
                e.latlng,
                new L.latLng(cloesest_icon.position.lat, cloesest_icon.position.lng)
            ]
        });
        prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
    }

    centerMap(_center) {
        this.setState({center: {"lat": _center.lat, "lng": _center.lng}})
    }

    render() {
        if (typeof window !== 'undefined') {
            return (
                <Map
                    ref={(ref) => {
                        this.map = ref;
                    }}
                    zoom={6}
                    center={this.state.center}
                    maxZoom={8}
                    minZoom={4}
                    onClick={this.handleClick}
                    onZoomEnd={this.handleZoomEnd}
                >
                    <TileLayer
                        attribution="RSMap - From OSRS Data"
                        url={withPrefix("/map/generated/{z}/{x}/{y}.png")}
                    />
                    <MapMarkers zoomLevel={this.state.zoomLevel} centerMap={this.centerMap}/>
                    {this.state.line ? <Polyline weight={6} color={'yellow'} positions={this.state.line}/> : null}
                </Map>
            )
        } else {
            return <div>Page is loading...</div>
        }
    }
}