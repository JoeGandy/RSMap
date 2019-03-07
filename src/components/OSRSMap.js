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
            zoomLevel: 6,
            line: null,
            center: {"lat": 76.40881056467734, "lng": 317.13134765625006},
            filters: {},
            icons_flat: typeof window !== 'undefined' ? getAllIconsFlat() : [],
            icons: typeof window !== 'undefined' ? rewriteIcons() : [],
            dungeons: Dungeons,
            regions: Regions,
            search_val: null,
            clicked_position: null,
            layer: 'surface'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.centerMap = this.centerMap.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.searchSelect = this.searchSelect.bind(this);
        this.handleLayerChange = this.handleLayerChange.bind(this);
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

    searchSelect(results) {
        if (typeof (results[0]) !== "undefined") {
            if (results[0].position) {
                this.centerMap(results[0].position);
            } else if (results[0].positions && results[0].positions.length > 0) {
                this.centerMap(results[0].positions[0]);
            } else {
                this.centerMap(results[0].stops[0]);
            }
        }
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
            return (
                <Layer handleLayerChange={this.handleLayerChange} layer={this.state.layer} regions={this.state.regions}
                       center={this.state.center} icons={this.state.icons} dungeons={this.state.dungeons}/>
            )
        } else {
            return <div>Page is loading...</div>
        }
    }
}