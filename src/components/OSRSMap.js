import React, {Component} from 'react'
import 'leaflet/dist/leaflet.css';
import {rewriteIcons} from "../classes/Icons";
import {getAllIconsFlat} from "../classes/Icons";
import SurfaceLayer from "./Surface/SurfaceLayer";
import {Dungeons, getAllDungeonNames} from "../classes/Dungeons";
import {Regions} from "../classes/Regions";
import * as qs from 'query-string';
import {IconBaseClass} from "../classes/IconBaseClass";
import DungeonLayer from "./Dungeons/DungeonLayer";

const DEFAULT_CENTER = {"lat": 76.40881056467734, "lng": 317.13134765625006};
const DEFAULT_ZOOM = 6;
const DEFAULT_LAYER = 'surface';

export default class OSRSMap extends Component {
    static get DEFAULT_CENTER() {
        return DEFAULT_CENTER;
    }

    static get DEFAULT_ZOOM() {
        return DEFAULT_ZOOM;
    }

    static get DEFAULT_LAYER() {
        return DEFAULT_LAYER;
    }

    static getLatestZoom(default_zoom) {
        if (OSRSMap.getGETParam('zoom') === false) {
            return localStorage.getItem('zoom') !== "undefined" && localStorage.getItem('zoom') !== null ? localStorage.getItem('zoom') : default_zoom;
        } else {
            return OSRSMap.getGETParam('zoom');
        }
    }

    static getLatestLayer(default_layer) {
        if (OSRSMap.getGETParam('layer') === false) {
            return localStorage.getItem('layer') !== "undefined" && localStorage.getItem('layer') !== null ? localStorage.getItem('layer') : default_layer;
        } else {
            return OSRSMap.getGETParam('layer');
        }
    }

    static getLatestCenter(default_center) {
        if (OSRSMap.getGETParam('center') === false) {
            return localStorage.getItem('center') !== "undefined" && localStorage.getItem('center') !== null ? JSON.parse(localStorage.getItem('center')) : default_center;
        } else {
            return OSRSMap.getGETParam('center');
        }
    }

    static getGETParam(param_name) {
        if (typeof window !== 'undefined') {
            let params = qs.parse(location.search);
            if (params[param_name] !== undefined) {
                return param_name === "center" ? JSON.parse(params[param_name]) : params[param_name];
            }
        }
        return false;
    }

    constructor(props) {
        super(props);

        this.state = {
            center: OSRSMap.getLatestCenter(OSRSMap.DEFAULT_CENTER),
            layer: OSRSMap.getLatestLayer(OSRSMap.DEFAULT_LAYER),
            defaultZoom: OSRSMap.getLatestZoom(OSRSMap.DEFAULT_ZOOM),
            icons_flat: getAllIconsFlat(),
            icons: rewriteIcons(),
            dungeons: Dungeons,
            regions: Regions,
            clicked_position: null
        };

        IconBaseClass.setZoomLevel(DEFAULT_ZOOM);


        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.handleLayerChange = this.handleLayerChange.bind(this);
    }

    handleZoomEnd() {
        if (this.map) {
            this.setState({zoomLevel: this.map.viewport.zoom});
        }
    }

    handleLayerChange(layer, new_center) {
        let state = {...this.state};
        state.center = new_center;
        state.layer = layer;
        if (layer === "surface") {
            state.zoomLevel = DEFAULT_ZOOM;
            IconBaseClass.setZoomLevel(DEFAULT_ZOOM);
        }
        this.setState(state);
    }

    render() {
        if (this.state.layer === "surface") {
            return (
                <SurfaceLayer handleLayerChange={this.handleLayerChange}
                              layer={this.state.layer}
                              regions={this.state.regions}
                              surface={true} minZoom={3} maxZoom={9}
                              defaultZoom={this.state.defaultZoom}
                              center={this.state.center}
                              icons={this.state.icons}
                              dungeons={this.state.dungeons}/>
            )
        } else {
            return (
                <DungeonLayer handleLayerChange={this.handleLayerChange}
                              layer={this.state.layer}
                              center={this.state.center}
                              minZoom={2}
                              maxZoom={4}
                              defaultZoom={3}
                              icons={this.state.icons}
                              dungeons={this.state.dungeons}/>
            )
        }
    }
}