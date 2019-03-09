import React, {Component} from 'react'
import {withPrefix} from 'gatsby';
import {Map, TileLayer, Polyline} from "react-leaflet";
import MapMarkers from "./MapMarkers";
import FiltersBox from "./FiltersBox";
import SearchBox from "./SearchBox";
import DevTools from "./DevTools";
import {getDungeonCenter, getDungeonIcons} from "../classes/Dungeons";


const dungeonMaxZoom = 4;
const dungeonMinZoom = 1;

const surfaceMaxZoom = 9;
const surfaceMinZoom = 1;

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
            layer_url: this.props.layer === "surface" ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer + "/",
            zoomLevel: this.props.layer === "surface" ? 6 : 3,
            maxZoom: this.props.layer === "surface" ? surfaceMaxZoom : dungeonMaxZoom,
            minZoom: this.props.layer === "surface" ? surfaceMinZoom : dungeonMinZoom,
            center: this.props.center,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.centerMap = this.centerMap.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.searchSelect = this.searchSelect.bind(this);
        this.backToSurface = this.backToSurface.bind(this);
    }

    handleZoomEnd() {
        if (this.map) {
            this.setState({zoomLevel: this.map.viewport.zoom});
        }
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.layer !== prevProps.layer) {
            this.setState({zoomLevel: this.props.layer === "surface" ? 6 : 3});
            this.setState({layer_url: this.props.layer === "surface" ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer})
            this.setState({minZoom: this.props.layer === "surface" ? surfaceMinZoom : dungeonMinZoom});
            this.setState({maxZoom: this.props.layer === "surface" ? surfaceMaxZoom : dungeonMaxZoom});
            this.map.leafletElement.setMinZoom(this.props.layer === "surface" ? surfaceMinZoom : dungeonMinZoom);
            this.map.leafletElement.setMaxZoom(this.props.layer === "surface" ? surfaceMaxZoom : dungeonMaxZoom);
            this.setState({icons: getDungeonIcons(this.props.layer)});
            this.centerMap(this.props.layer === "surface" ? this.props.center : getDungeonCenter(this.props.layer));
        }
    }

    backToSurface(){
        this.props.handleLayerChange('surface', {"lat":76.3518964311259,"lng":316.64794921875006});
    }

    handleClick(e) {
        console.debug(JSON.stringify(e.latlng));
        //prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
        this.setState({clicked_position: e.latlng});
    }

    centerMap(_center) {
        this.setState({center: {"lat": _center.lat, "lng": _center.lng}})
    }

    updateFilters(filters) {
        this.setState({filters: filters});
    }

    render() {
        return (
            <>
                <Map
                    ref={(ref) => {
                        this.map = ref;
                    }}
                    zoom={this.state.zoomLevel}
                    center={this.state.center}
                    maxZoom={this.state.maxZoom}
                    minZoom={this.state.minZoom}
                    onClick={this.handleClick}
                    onZoomEnd={this.handleZoomEnd}
                    keyboardPanDelta={600}
                >
                    <TileLayer
                        attribution="RSMap - All content/assets belong to jagex - Marker data from osrs.wiki"
                        url={map_address + this.state.layer_url + "/{z}/{x}/{y}.png"}
                        keepBuffer={15}
                        updateWhenZooming={false}
                        updateInterval={200}
                    />
                    <MapMarkers zoomLevel={this.state.zoomLevel} centerMap={this.centerMap} regions={this.props.regions}
                                handleLayerChange={this.props.handleLayerChange} layer={this.props.layer}
                                filters={this.state.filters} icons={this.props.icons} dungeons={this.props.dungeons}/>
                    {this.state.line ? <Polyline weight={6} color={'yellow'} positions={this.state.line}/> : null}
                </Map>
                {this.props.layer !== "surface" ?
                    <button className="back_to_surface_button main_button" onClick={this.backToSurface}>Back to surface</button>
                : null}
                {this.props.layer === "surface" ?
                    <>
                        <FiltersBox updateFilters={this.updateFilters}/>
                        <SearchBox centerMap={this.centerMap}/>
                    </>
                    : null}
                    <DevTools clickedPos={this.state.clicked_position}/>
            </>
        )
        //
    }
}