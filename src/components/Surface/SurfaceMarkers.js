import React, {Component} from 'react'
import MapMarker from "../MarkerTypes/MapMarker";
import {Map, Marker, Tooltip, Popup, Polygon} from "react-leaflet";
import {rewriteIcons, types} from "../../classes/Icons";
import {Categories, IconBaseClass} from "../../classes/IconBaseClass";
import MapPointToPointMarker from "../MarkerTypes/MapPointToPointMarker";
import LayerLink from "../MarkerTypes/LayerLink";
import {getDungeonCenter, getDungeonIcons, getDungeonLayer} from "../../classes/Dungeons";
import QuestMarker from "../MarkerTypes/QuestMarker";
import * as L from "leaflet";

export default class MapMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: this.props.icons,
            dungeons: this.props.dungeons,
            regions: this.props.regions,
            current_dungeon_layer: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            IconBaseClass.setZoomLevel(this.props.zoomLevel, !(this.props.layer === "surface"));
            this.setState({icons: this.props.layer === "surface" ? rewriteIcons(this.props.bounds) : getDungeonIcons(this.props.layer, this.props.bounds)});
            this.setState({current_dungeon_layer: this.props.layer === "surface" ? null : getDungeonLayer(this.props.layer)})
        }
    }

    render() {
        let centerMap = this.props.centerMap;
        let filters = this.props.filters;
        let handleLayerChange = this.props.handleLayerChange;
        let layer = this.props.layer;

        return (
            <>
                {this.state.regions.map(function (region, i) {
                    return <Polygon
                        key={i}
                        ref={region.text}
                        positions={region.points}
                    />
                })}

                {this.state.dungeons.map(function (dungeon, i) {
                    return layer === "surface" && !filters[Categories.DUNGEONS] ? null :
                        <LayerLink key={i} dungeon={dungeon} handleLayerChange={handleLayerChange} layer={layer}/>
                })}

                {this.state.icons.agility_shortcuts.map(function (icon, i) {
                    return filters[icon.options.category] ?
                        <MapMarker key={i} position={icon.options.position} icon={icon}
                                   title={icon.options.title}/>
                        : null;
                })}
                {this.state.icons.teleports.map(function (icon, i) {
                    return filters[icon.options.category] ?
                        <MapMarker key={i} position={icon.options.position} icon={icon}
                                   title={icon.options.title}/>
                        : null;
                })}
                {this.state.icons.fairy_rings.map(function (icon, i) {
                    return filters[icon.options.category] ?
                        <MapMarker key={i} position={icon.options.position} icon={icon}
                                   title={icon.options.title}/>
                        :
                        null;
                })}

                {this.state.icons.quests.map(function (icon, i) {
                    return filters[icon.options.category] ?
                        <QuestMarker key={i} options={icon.options} icon={icon}/>
                        :
                        null;
                })}

                {this.state.icons.point_to_points.map(function (icon, i) {
                    return filters[icon.options.category] ?
                        <div key={i}>
                            <MapPointToPointMarker position={icon.options.positions[0]} icon={icon}
                                                   title={icon.options.title} end={false} centerMap={centerMap}/>
                            <MapPointToPointMarker position={icon.options.positions[icon.options.positions.length - 1]}
                                                   icon={icon} end={icon.options.one_way} centerMap={centerMap}
                                                   title={icon.options.title}/>
                        </div>
                        : null;
                })}
                {this.state.icons.point_to_many_points.map(function (icon, i) {
                    return filters[icon.options.category] ?
                        <div key={i}>
                            {icon.options.stops.map(function (stop, i) {
                                return <MapPointToPointMarker key={i} position={stop} icon={icon}
                                                              title={icon.options.title}/>
                            })}
                        </div>
                        : null;
                })}
            </>
        )
    }
}