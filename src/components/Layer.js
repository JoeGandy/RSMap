import React, {Component} from 'react'
import {Map, TileLayer, Polyline} from "react-leaflet";
import MapMarkers from "./MapMarkers";
import FiltersBox from "./FiltersBox";
import SearchBox from "./SearchBox";
import DevTools from "./DevTools";
import {getDungeonCenter, getDungeonIcons} from "../classes/Dungeons";
import * as L from "leaflet";
import OSRSMap from "./OSRSMap";
import Controls from "./Controls";


function getMethods(obj) {
    var res = [];
    for (var m in obj) {
        if (typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}

const map_address = "http://tiles.rsmap.uk/public";

export default class Layer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            line: null,
            filters: {},
            icons_flat: this.props.icons_flat,
            icons: this.props.icons,
            search_val: null,
            clicked_position: null,
            layer: this.props.layer,
            layer_url: this.props.surface ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer + "/",
            zoomLevel: this.props.defaultZoom,
            center: this.props.center,
            bounds: {}
        };

        this.map = {};

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.centerMap = this.centerMap.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.searchSelect = this.searchSelect.bind(this);
        this.backToSurface = this.backToSurface.bind(this);
        this.onViewportChanged = this.onViewportChanged.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    handleZoomEnd() {
        if (this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon']) {
            this.setState({zoomLevel: this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].viewport.zoom});
        }
    }

    searchSelect(results) {
        if (typeof (results[0]) !== "undefined") {
            let target_position = null;

            if (results[0].position) {
                target_position = results[0].position;
            } else if (results[0].positions && results[0].positions.length > 0) {
                target_position = results[0].positions[0];
            } else {
                target_position = results[0].stops[0];
            }

            this.centerMap(target_position);
            localStorage.setItem('center', JSON.stringify(target_position));
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.layer !== prevProps.layer) {
            this.setState({zoomLevel: this.props.defaultZoom});
            this.setState({layer_url: this.props.layer === "surface" ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer});
            this.setState({icons: getDungeonIcons(this.props.layer)});
            this.centerMap(this.props.layer === "surface" ? this.props.center : getDungeonCenter(this.props.layer));
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMaxZoom(this.props.maxZoom);
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMinZoom(this.props.minZoom);

        }
    }

    backToSurface() {
        let center = OSRSMap.getLatestCenter(this.props.center);
        this.props.handleLayerChange('surface', new L.latLng(center[0], center[1]));
    }

    handleClick(e) {
        //prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
        this.setState({clicked_position: e.latlng});
    }

    centerMap(_center) {
        this.setState({center: {"lat": _center.lat, "lng": _center.lng}})
    }

    updateFilters(filters) {
        this.setState({filters: filters});
    }

    onViewportChanged(viewport) {

        if (this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon']) {
            if(this.state.bounds !== this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.getBounds()) {
                //this.setState({bounds: this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.getBounds()});
            }
        }

        //Only do this on surface for now, there is an issue with the zoom level changes when saving dungeon spots
        if (this.props.layer === 'surface') {
            localStorage.setItem('center', JSON.stringify(viewport.center));
            localStorage.setItem('zoom', JSON.stringify(viewport.zoom));
            localStorage.setItem('layer', this.props.layer);
        }
    }
    onLoad(){
        //this.setState({bounds: this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.getBounds()});
    }

    render() {
        return (
            <>
                <Map
                    ref={(ref) => {
                        this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'] = ref;
                    }}
                    zoom={this.state.zoomLevel}
                    center={this.state.center}
                    maxZoom={this.props.maxZoom}
                    minZoom={this.props.minZoom}
                    minNativeZoom={this.props.minZoom}
                    maxNativeZoom={this.props.maxZoom}
                    onClick={this.handleClick}
                    onZoomEnd={this.handleZoomEnd}
                    onViewportChanged={this.onViewportChanged}
                    keyboardPanDelta={600}
                >
                    <TileLayer
                        attribution="RSMap - All content/assets belong to jagex - Marker data from osrs.wiki"
                        url={map_address + this.state.layer_url + "/{z}/{x}/{y}.png"}
                        keepBuffer={15}
                        updateWhenZooming={false}
                        updateInterval={200} 
                        onLoad={this.onLoad}
                    />
                    <DevTools layer={this.props.layer} clickedPos={this.state.clicked_position}/>
                    <MapMarkers zoomLevel={this.state.zoomLevel} centerMap={this.centerMap} regions={this.props.regions}
                                handleLayerChange={this.props.handleLayerChange} layer={this.props.layer} bounds={this.state.bounds}
                                filters={this.state.filters} icons={this.props.icons} dungeons={this.props.dungeons}/>
                    {this.state.line ? <Polyline weight={6} color={'yellow'} positions={this.state.line}/> : null}
                </Map>
                {this.props.layer !== "surface" ?
                    <button className="back_to_surface_button main_button" onClick={this.backToSurface}>Back to
                        surface</button>
                    : null}
                {this.props.layer === "surface" ?
                    <>
                        <FiltersBox updateFilters={this.updateFilters}/>
                        <SearchBox centerMap={this.centerMap}/>
                    </>
                    : null}
                <Controls/>
            </>
        )

    }
}