import React, {Component} from 'react'
import {Map, TileLayer, Polyline} from "react-leaflet";
import FiltersBox from "../FiltersBox";
import SearchBox from "../SearchBox";
import DevTools from "../DevTools";
import {getDungeonCenter, getDungeonIcons} from "../../classes/Dungeons";
import Controls from "../Controls";
import SurfaceMarkers from "./SurfaceMarkers";
import Layer from "../Layer";

export default class SurfaceLayer extends Layer {

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            filters: {},
            icons_flat: this.props.icons_flat,
            icons: this.props.icons
        };

        this.updateFilters = this.updateFilters.bind(this);
        this.searchSelect = this.searchSelect.bind(this);
        this.onViewportChanged = this.onViewportChanged.bind(this);
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
            this.centerMap(this.props.center);
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMaxZoom(this.props.maxZoom);
            this.map[this.props.layer === 'surface' ? 'surface' : 'dungeon'].leafletElement.setMinZoom(this.props.minZoom);

        }
    }

    updateFilters(filters) {
        this.setState({filters: filters});
    }

    onViewportChanged(viewport) {
        localStorage.setItem('zoom', viewport.zoom);
        localStorage.setItem('center', JSON.stringify(viewport.center));
        localStorage.setItem('layer', this.props.layer);
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
                    <SurfaceMarkers zoomLevel={this.state.zoomLevel}
                                    centerMap={this.centerMap}
                                    regions={this.props.regions}
                                    handleLayerChange={this.props.handleLayerChange}
                                    layer={this.props.layer}
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