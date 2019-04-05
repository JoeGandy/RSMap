import React, {Component} from 'react'
import {Map, TileLayer, Polyline} from "react-leaflet";
import DevTools from "../DevTools";
import DungeonMarkers from "./DungeonMarkers";
import {getDungeonIcons} from "../../classes/Dungeons";
import OSRSMap from "../OSRSMap";


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
            layer: this.props.layer,
            layer_url: "/map/dungeons/generated/" + this.props.layer + "/",
            zoomLevel: this.props.defaultZoom,
            center: this.props.center
        };

        this.map = {};

        this.centerMap = this.centerMap.bind(this);
        this.backToSurface = this.backToSurface.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onViewportChanged = this.onViewportChanged.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.layer !== prevProps.layer) {
            let state = {...this.state};
            state.layer_url = "/map/dungeons/generated/" + this.props.layer + "/";
            this.setState(state);
            /*
            this.setState({zoomLevel: this.props.defaultZoom});
            this.setState({layer_url: this.props.layer === "surface" ? "/map/generated" : "/map/dungeons/generated/" + this.props.layer});
            this.setState({icons: getDungeonIcons(this.props.layer)});
            this.centerMap(this.props.layer === "surface" ? this.props.center : getDungeonCenter(this.props.layer));
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMaxZoom(this.props.maxZoom);
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMinZoom(this.props.minZoom);
            */

        }
    }

    handleClick(e) {
        if (this.props.showDevTools) {
            prompt(JSON.stringify(e.latlng), JSON.stringify(e.latlng));
        }
    }

    backToSurface() {
        this.props.handleLayerChange("surface", OSRSMap.getLatestCenter(OSRSMap.DEFAULT_CENTER));
    }

    centerMap(_center) {
        this.setState({center: _center});
    }

    onViewportChanged(viewport) {
        this.setState({zoomLevel: viewport.zoom});
        this.setState({center: viewport.center});
    }

    onLoad() {
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
                    {this.props.showDevTools ?
                        <DevTools layer={this.props.layer}
                                  clickedPos={this.state.clicked_position}
                        /> : null}
                    <DungeonMarkers zoomLevel={this.state.zoomLevel}
                                    centerMap={this.centerMap}
                                    regions={this.props.regions}
                                    handleLayerChange={this.props.handleLayerChange}
                                    layer={this.props.layer}
                                    bounds={this.state.bounds}
                                    filters={this.state.filters}
                                    icons={getDungeonIcons(this.props.layer)}
                                    dungeons={this.props.dungeons}/>
                    {this.state.line ? <Polyline weight={6} color={'yellow'} positions={this.state.line}/> : null}
                </Map>
                <button className="back_to_surface_button main_button" onClick={this.backToSurface}>Back to
                    surface
                </button>
            </>
        )

    }
}