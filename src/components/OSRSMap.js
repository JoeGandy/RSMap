import React, {Component} from 'react'
import {Map, Pane, Rectangle, TileLayer, Polyline} from "react-leaflet";
import {withPrefix} from 'gatsby';
import MapMarkers from "./MapMarkers";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as Icons from "../classes/Icons";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class OSRSMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoomLevel: 6,
            line: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
    }

    handleZoomEnd() {
        this.setState({zoomLevel: this.map.viewport.zoom});
    }

    handleClick(e) {
        console.log(JSON.stringify(e.latlng));

        let cloesest_icon = Icons.getClosestIcon(e.latlng.lat, e.latlng.lng);

        this.setState({
            line: [
                e.latlng,
                new L.latLng(cloesest_icon.position.lat, cloesest_icon.position.lng)
            ]
        });

        //prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
    }

    render() {
        const center = [76.40881056467734, 317.13134765625006];

        return (
            <Map
                ref={(ref) => {
                    this.map = ref;
                }}
                zoom={6}
                center={center}
                maxZoom={8}
                minZoom={4}
                onClick={this.handleClick}
                onZoomEnd={this.handleZoomEnd}
            >
                <Pane name="cyan-rectangle" style={{zIndex: 500}} leaflet={'test'}>
                    <Rectangle
                        bounds={[[77.99362024696188, 303.39843750000006], [77.32457910035559, 306.66137695312506]]}
                        color="cyan"/>
                </Pane>
                <TileLayer
                    attribution="RSMap - From OSRS Data"
                    url={withPrefix("/map/generated/{z}/{x}/{y}.png")}
                />
                <MapMarkers zoomLevel={this.state.zoomLevel}/>
                {this.state.line ? <Polyline weight={6} color={'yellow'} positions={this.state.line}/> : null}
            </Map>
        )
    }
}