import React, {Component} from 'react'
import 'leaflet/dist/leaflet.css';
import {rewriteIcons} from "../classes/Icons";
import {getAllIconsFlat} from "../classes/Icons";
import Layer from "./Layer";
import {Dungeons, getAllDungeonNames} from "../classes/Dungeons";
import {Regions} from "../classes/Regions";

export default class OSRSMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            center: this.restoreCenter({"lat": 76.40881056467734, "lng": 317.13134765625006}),
            filters: {},
            icons_flat: typeof window !== 'undefined' ? getAllIconsFlat() : [],
            icons: typeof window !== 'undefined' ? rewriteIcons() : [],
            dungeons: Dungeons,
            regions: Regions,
            search_val: null,
            clicked_position: null,
            layer: this.restoreLayer("surface")
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.centerMap = this.centerMap.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.handleLayerChange = this.handleLayerChange.bind(this);
    }

    restoreLayer(default_layer) {
        return localStorage.getItem('layer') !== null ? localStorage.getItem('layer') : default_layer;
    }

    restoreCenter(default_center) {
        return localStorage.getItem('center') !== null ? JSON.parse(localStorage.getItem('center')) : default_center;
    }

    handleZoomEnd() {
        if (this.map) {
            this.setState({zoomLevel: this.map.viewport.zoom});
        }
    }

    handleLayerChange(layer, new_center){
        this.setState({center: new_center});
        this.setState({layer: layer});
    }

    handleClick(e) {
        //console.debug(JSON.stringify(e.latlng));

        /*let cloesest_icon = Icons.getClosestIcon(e.latlng.lat, e.latlng.lng);

        this.setState({
            line: [
                e.latlng,
                new L.latLng(cloesest_icon.position.lat, cloesest_icon.position.lng)
            ]
        });*/

        this.setState({clicked_position: e.latlng});
        prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
    }

    centerMap(_center) {
        this.setState({center: {"lat": _center.lat, "lng": _center.lng}})
    }

    updateFilters(filters) {
        this.setState({filters: filters});
    }

    render() {
        if (typeof window !== 'undefined') {
            if(this.state.layer === "surface") {
                return (
                    <Layer handleLayerChange={this.handleLayerChange} layer={this.state.layer} getLastCenter={this.restoreCenter}
                           regions={this.state.regions} surface={true} minZoom={2} maxZoom={9} defaultZoom={6}
                           center={this.state.center} icons={this.state.icons} dungeons={this.state.dungeons}/>
                )
            }else{
                return (
                    <Layer handleLayerChange={this.handleLayerChange} layer={this.state.layer} getLastCenter={this.restoreCenter}
                           regions={this.state.regions} surface={false} minZoom={1} maxZoom={4} defaultZoom={6}
                           center={this.state.center} icons={this.state.icons} dungeons={this.state.dungeons}/>
                )
            }
        } else {
            return <div>Page is loading...</div>
        }
    }
}