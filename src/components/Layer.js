import React, {Component} from 'react'
import {withPrefix} from 'gatsby';
import {Map, TileLayer, Polyline} from "react-leaflet";
import MapMarkers from "./MapMarkers";
import FiltersBox from "./FiltersBox";
import SearchBox from "./SearchBox";
import DevTools from "./DevTools";
import {getDungeonCenter, getDungeonIcons} from "../classes/Dungeons";


const dungeonMaxZoom = 4;
const dungeonMinZoom = 3;

const surfaceMaxZoom = 9;
const surfaceMinZoom = 3;

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
            zoomLevel: this.props.layer === "surface" ? 6 : 2,
            maxZoom: this.props.layer === "surface" ? surfaceMaxZoom : dungeonMaxZoom,
            minZoom: this.props.layer === "surface" ? surfaceMinZoom : dungeonMinZoom,
            center: this.props.center,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.centerMap = this.centerMap.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.searchSelect = this.searchSelect.bind(this);
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
            this.setState({layer_url: this.props.layer === "surface" ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer})
            this.setState({zoomLevel: this.props.layer === "surface" ? 6 : 2});
            this.setState({minZoom: this.props.layer === "surface" ? surfaceMinZoom : dungeonMinZoom});
            this.setState({maxZoom: this.props.layer === "surface" ? surfaceMaxZoom : dungeonMaxZoom});
            this.map.leafletElement.setMinZoom(this.props.layer === "surface" ? surfaceMinZoom : dungeonMinZoom);
            this.map.leafletElement.setMaxZoom(this.props.layer === "surface" ? surfaceMaxZoom : dungeonMaxZoom);
            this.setState({icons: getDungeonIcons(this.props.layer)});
            this.centerMap(this.props.layer === "surface" ? this.props.center : getDungeonCenter(this.props.layer));
            setTimeout(function(handleZoomEnd) {
                handleZoomEnd();
            }, 1000, this.handleZoomEnd);
        }
    }

    handleClick(e) {
        console.debug(JSON.stringify(e.latlng));
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
                        url={withPrefix(this.state.layer_url + "/{z}/{x}/{y}.png")}
                        noWrap={this.props.layer !== "surface"}
                        keepBuffer={1}
                        updateWhenZooming={false}
                        updateInterval={200}
                    />
                    <MapMarkers zoomLevel={this.state.zoomLevel} centerMap={this.centerMap}
                                handleLayerChange={this.props.handleLayerChange} layer={this.props.layer}
                                filters={this.state.filters} icons={this.props.icons} dungeons={this.props.dungeons}/>
                    {this.state.line ? <Polyline weight={6} color={'yellow'} positions={this.state.line}/> : null}
                </Map>
                <FiltersBox updateFilters={this.updateFilters}/>
                <SearchBox centerMap={this.centerMap}/>
                <DevTools clickedPos={this.state.clicked_position}/>
            </>
        )
    }
}