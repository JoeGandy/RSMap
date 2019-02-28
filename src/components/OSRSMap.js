import React, {Component} from 'react'
import {withPrefix} from 'gatsby';
import 'leaflet/dist/leaflet.css';
import {Map, Pane, Rectangle, TileLayer, Polyline} from "react-leaflet";
import MapMarkers from "./MapMarkers";
import * as Icons from "../classes/Icons";
import L from "leaflet";
import FiltersBox from "./FiltersBox";
import * as CoordinateConvertor from "../classes/CoordinateConverter";
import {rewriteIcons} from "../classes/Icons";
import {getAllIconsFlat} from "../classes/Icons";
import {Typeahead} from 'react-bootstrap-typeahead';
import SearchBox from "./SearchBox";

export default class OSRSMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoomLevel: 6,
            line: null,
            center: {"lat": 76.40881056467734, "lng": 317.13134765625006},
            filters: {},
            icons: getAllIconsFlat(),
            search_val: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleZoomEnd = this.handleZoomEnd.bind(this);
        this.centerMap = this.centerMap.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.searchSelect = this.searchSelect.bind(this);
    }

    handleZoomEnd() {
        if(this.map) {
            this.setState({zoomLevel: this.map.viewport.zoom});
        }
    }

    searchSelect(results) {
        if (typeof (results[0]) !== "undefined") {
            if(results[0].position) {
                this.centerMap(results[0].position);
            }else if(results[0].positions && results[0].positions.length > 0) {
                this.centerMap(results[0].positions[0]);
            }else{
                this.centerMap(results[0].stops[0]);
            }
        }
    }

    handleClick(e) {
        //console.debug(JSON.stringify(e.latlng));

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

    updateFilters(filters) {
        this.setState({filters: filters});
    }

    render() {
        if (typeof window !== 'undefined') {
            return (
                <>
                    <Map
                        ref={(ref) => {
                            this.map = ref;
                        }}
                        zoom={6}
                        center={this.state.center}
                        maxZoom={9}
                        minZoom={3}
                        onClick={this.handleClick}
                        onZoomEnd={this.handleZoomEnd}
                    >
                        <TileLayer
                            attribution="RSMap - Built with data from osrs.wiki"
                            url={withPrefix("/map/generated/{z}/{x}/{y}.png")}
                        />
                        <MapMarkers zoomLevel={this.state.zoomLevel} centerMap={this.centerMap}
                                    filters={this.state.filters}/>
                        {this.state.line ? <Polyline weight={6} color={'yellow'} positions={this.state.line}/> : null}

                        {CoordinateConvertor.buildChunkGrid().map(function (chunk, i) {
                            return <Polyline
                                weight={1}
                                color={'white'}
                                positions={chunk.positions}
                                opacity={0.5}
                            />
                        })}

                    </Map>
                    <FiltersBox updateFilters={this.updateFilters}/>
                    <SearchBox centerMap={this.centerMap}/>
                </>
            )
        } else {
            return <div>Page is loading...</div>
        }
    }
}