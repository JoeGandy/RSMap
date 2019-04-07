import React, {Component} from 'react'
import {Map, TileLayer, Polyline} from "react-leaflet";
import DevTools from "../DevTools";
import DungeonMarkers from "./DungeonMarkers";
import {getDungeonIcons} from "../../classes/Dungeons";
import OSRSMap, {getLatestCenter} from "../OSRSMap";
import Layer from "../Layer";

export default class DungeonLayer extends Layer {

    constructor(props) {
        super(props);

        this.state = {
            ...this.state
        };

        this.map = {};

        this.backToSurface = this.backToSurface.bind(this);
        this.onViewportChanged = this.onViewportChanged.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.layer !== prevProps.layer) {
            let state = {...this.state};
            state.layer_url = "/map/dungeons/generated/" + this.props.layer + "/";
            this.setState(state);

        }
    }

    backToSurface() {
        this.props.handleLayerChange("surface", getLatestCenter(OSRSMap.DEFAULT_CENTER));
    }

    onViewportChanged(viewport) {
        this.setState({zoomLevel: viewport.zoom});
        this.setState({center: viewport.center});
    }

    render() {
        return (
            <>
                <Map
                    {...this.getLayerMapProps()}
                >
                    <TileLayer
                        {...this.getLayerTileProps()}
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