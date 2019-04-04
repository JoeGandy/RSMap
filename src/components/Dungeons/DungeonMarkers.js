import React, {Component} from 'react'
import {rewriteIcons, types} from "../../classes/Icons";
import {Categories, IconBaseClass} from "../../classes/IconBaseClass";
import {getDungeonCenter, getDungeonIcons, getDungeonLayer} from "../../classes/Dungeons";
import SurfaceLink from "../MarkerTypes/SurfaceLink";
import LabelMarker from "../MarkerTypes/LabelMarker";
import {Polygon} from "react-leaflet";
import LayerLink from "../MarkerTypes/LayerLink";
import MapMarker from "../MarkerTypes/MapMarker";
import QuestMarker from "../MarkerTypes/QuestMarker";
import MapPointToPointMarker from "../MarkerTypes/MapPointToPointMarker";

export default class DungeonMarkers extends Component {
    constructor(props) {
        super(props);

        IconBaseClass.setZoomLevel(this.props.zoomLevel, true);

        this.state = {
            icons: this.props.icons,
            dungeons: this.props.dungeons,
            regions: this.props.regions,
            current_dungeon_layer: getDungeonLayer(this.props.layer)
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            IconBaseClass.setZoomLevel(this.props.zoomLevel, true);
            this.setState({icons: getDungeonIcons(this.props.layer)})
            this.setState({current_dungeon_layer: getDungeonLayer(this.props.layer)});
        }
    }

    render() {
        let handleLayerChange = this.props.handleLayerChange;

        return (
            <>
                {this.state.current_dungeon_layer.map_labels.map(function (label, i) {
                    return <LabelMarker key={i} title={label.title} description={label.description}
                                        position={label.position}/>
                })}

                <SurfaceLink dungeon={this.state.current_dungeon_layer} handleLayerChange={handleLayerChange}/>

                {this.state.dungeons.map((dungeon, i) => {
                    return <LayerLink key={i} dungeon={dungeon} handleLayerChange={handleLayerChange}
                                      layer={this.props.layer}/>
                })}

                {this.state.icons.agility_shortcuts.map(function (icon, i) {
                    return <MapMarker key={i} position={icon.options.position} icon={icon}
                                      title={icon.options.title}/>
                })}
                {this.state.icons.teleports.map(function (icon, i) {
                    return <MapMarker key={i} position={icon.options.position} icon={icon}
                                      title={icon.options.title}/>
                })}
                {this.state.icons.fairy_rings.map(function (icon, i) {
                    return <MapMarker key={i} position={icon.options.position} icon={icon}
                                      title={icon.options.title}/>
                })}

                {this.state.icons.quests.map(function (icon, i) {
                    return <QuestMarker key={i} options={icon.options} icon={icon}/>
                })}
            </>
        )
    }
}