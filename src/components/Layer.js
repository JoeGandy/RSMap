import React, {Component} from 'react'
import {Map, TileLayer, Polyline} from "react-leaflet";
import DevTools from "./DevTools";


export default class Layer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            layer: this.props.layer,
            layer_url: this.props.surface ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer + "/",
            zoomLevel: this.props.defaultZoom,
            center: this.props.center
        };

        this.map_address = "https://tiles.rsmap.uk/public";
        this.blank_tile = "/public/map/generated/7/1/30.png";

        this.map = {};

        this.centerMap = this.centerMap.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
    }

    getMapAddress() {
        return this.map_address;
    }

    getBlankTile() {
        return this.blank_tile;
    }

    handleZoomEnd() {
        if (this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon']) {
            this.setState({zoomLevel: this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].viewport.zoom});
        }
    }

    handleClick(e) {
        if (this.props.showDevTools) {
            prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
        }
        this.setState({clicked_position: e.latlng});
    }

    centerMap(_center) {
        this.setState({center: _center});
    }

    getLayerMapProps() {
        return {
            ref: (ref) => {
                this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'] = ref;
            },
            zoom: this.state.zoomLevel,
            center: this.state.center,
            maxZoom: this.props.maxZoom,
            minZoom: this.props.minZoom,
            minNativeZoom: this.props.minZoom,
            maxNativeZoom: this.props.maxZoom,
            onClick: this.handleClick,
            onZoomEnd: this.handleZoomEnd,
            onViewportChanged: this.onViewportChanged,
            keyboardPanDelta: 600
        };
    }

    getLayerTileProps(){
        return {
            attribution: "RSMap - All content/assets belong to jagex - Marker data from osrs.wiki",
            url: this.getMapAddress() + this.state.layer_url + "/{z}/{x}/{y}.png",
            keepBuffer: 15,
            updateWhenZooming: false,
            updateInterval: 200,
            errorTileUrl: this.getMapAddress() + this.getBlankTile()
        }
    }
}