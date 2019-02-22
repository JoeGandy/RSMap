import React, {Component} from 'react'
import MapMarker from "./MapMarker";
import {rewriteIcons} from "../classes/Icons";
import {IconBaseClass} from "../classes/IconBaseClass";
import MapPointToPointMarker from "./MapPointToPointMarker";

//Marker types needed:
/*
    - Click to go to places, i.e. click boat transport to see other side
    - Click to swap layer, to see dungeons
    - Static broken up into categories
        - Spell book teleports
            - Regular
            - Lunar
            - Arceus
            - Ancients
        - Jewlery Teleports
        - Skill Capes
        - Fairy Rings
        - Scrolls
        - Tele Tabs
        - Spirit Trees
        - Minigame teleports
        - Diary Gear
        - Air Balloon
        - Hnome glider
   - clue scroll dig point, needs to be dynamic and move based on input, url params?
 */
export default class MapMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: rewriteIcons()
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            IconBaseClass.setZoomLevel(this.props.zoomLevel);
            this.setState({icons: rewriteIcons()});
        }
    }

    render() {
        let centerMap = this.props.centerMap;
        return (
            <>
                {this.state.icons.teleports.map(function (icon, i) {
                    return <MapMarker key={i} position={icon.options.position} icon={icon}
                                      title={icon.options.title}/>
                })}
                {this.state.icons.fairy_rings.map(function (icon, i) {
                    return <MapMarker key={i} position={icon.options.position} icon={icon}
                                      title={icon.options.title}/>
                })}
                {this.state.icons.point_to_points.map(function (icon, i) {
                    return <div key={i}>
                        <MapPointToPointMarker position={icon.options.positions[0]} icon={icon}
                                               title={icon.options.title} end={false} centerMap={centerMap}/>
                        <MapPointToPointMarker position={icon.options.positions[icon.options.positions.length - 1]}
                                               icon={icon} end={icon.options.one_way} centerMap={centerMap}
                                               title={icon.options.title}/>
                        })}
                    </div>
                })}
                {this.state.icons.point_to_many_points.map(function (icon, i) {
                    {icon.options.routes.map(function(route, i){
                        return <div key={i}>
                            <MapPointToPointMarker position={route[0]} icon={icon} multiple={true}
                                                   title={icon.options.title}/>
                            <MapPointToPointMarker position={route[route.length - 1]}
                                                   icon={icon}
                                                   title={icon.options.title} multiple={true} />
                        </div>
                    })}
                })}
            </>
        )
    }
}