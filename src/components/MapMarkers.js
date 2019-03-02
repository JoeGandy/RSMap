import React, {Component} from 'react'
import MapMarker from "./MarkerTypes/MapMarker";
import {rewriteIcons, types} from "../classes/Icons";
import {IconBaseClass} from "../classes/IconBaseClass";
import MapPointToPointMarker from "./MarkerTypes/MapPointToPointMarker";
import LayerLink from "./MarkerTypes/LayerLink";
import {getDungeonCenter, getDungeonIcons} from "../classes/Dungeons";
import SurfaceLink from "./MarkerTypes/SurfaceLink";

export default class MapMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: this.props.icons,
            dungeons: this.props.dungeons
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            IconBaseClass.setZoomLevel(this.props.zoomLevel, !(this.props.layer === "surface"));
            this.setState({icons: this.props.layer === "surface" ? rewriteIcons() : getDungeonIcons(this.props.layer)});
            //this.props.centerMap(this.props.layer === "surface" ? {"lat": 76.40881056467734, "lng": 317.13134765625006} : getDungeonCenter(this.props.layer))
        }
    }

    render() {
        let centerMap = this.props.centerMap;
        let filters = this.props.filters;
        let handleLayerChange = this.props.handleLayerChange;

        return (
            <>
                {this.props.layer === "surface" ? this.state.dungeons.map(function (dungeon, i) {
                    return <LayerLink key={i} dungeon={dungeon} handleLayerChange={handleLayerChange}/>
                }) : null}

                {this.state.layer !== "surface" ? this.state.dungeons.map(function (dungeon, i) {
                    return <SurfaceLink key={i} dungeon={dungeon} handleLayerChange={handleLayerChange}/>
                }) : null}

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