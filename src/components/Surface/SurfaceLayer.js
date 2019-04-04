import React, {Component} from 'react'
import {Map, TileLayer, Polyline} from "react-leaflet";
import FiltersBox from "../FiltersBox";
import SearchBox from "../SearchBox";
import DevTools from "../DevTools";
import {getDungeonCenter, getDungeonIcons} from "../../classes/Dungeons";
import * as L from "leaflet";
import OSRSMap from "../OSRSMap";
import Controls from "../Controls";
import SurfaceMarkers from "./SurfaceMarkers";


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

export default class SurfaceLayer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: {},
            icons_flat: this.props.icons_flat,
            icons: this.props.icons,
            layer: this.props.layer,
            layer_url: this.props.surface ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer + "/",
            zoomLevel: this.props.defaultZoom,
            center: this.props.center
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
            if (this.props.layer === "surface") {

            } else {

            }
            this.setState({zoomLevel: this.props.defaultZoom});
            this.setState({layer_url: this.props.layer === "surface" ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer});
            this.setState({icons: getDungeonIcons(this.props.layer)});
            this.centerMap(this.props.layer === "surface" ? this.props.center : getDungeonCenter(this.props.layer));
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMaxZoom(this.props.maxZoom);
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMinZoom(this.props.minZoom);

        }
    }

    backToSurface() {
    }

    handleClick(e) {
        //prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
        this.setState({clicked_position: e.latlng});
    }

    centerMap(_center) {
        this.setState({center: _center});
    }

    updateFilters(filters) {
        this.setState({filters: filters});
    }

    onViewportChanged(viewport) {
    }

    onLoad() {
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
                    <DevTools layer={this.props.layer}
                              clickedPos={this.state.clicked_position}
                    />
                    <SurfaceMarkers zoomLevel={this.state.zoomLevel}
                                centerMap={this.centerMap}
                                regions={this.props.regions}
                                handleLayerChange={this.props.handleLayerChange}
                                layer={this.props.layer}
                                bounds={this.state.bounds}
                                filters={this.state.filters} icons={this.props.icons} dungeons={this.props.dungeons}
                    />
                </Map>
                <FiltersBox updateFilters={this.updateFilters}/>
                <SearchBox centerMap={this.centerMap}/>
                <Controls/>
            </>
        )

    }
}