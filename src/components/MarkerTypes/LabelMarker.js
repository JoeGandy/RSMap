import React, {Component} from 'react'
import {Marker} from "react-leaflet";
import {AgilityShortcutIcon, rewriteIcons} from "../../classes/Icons";
import * as L from "leaflet";
import {IconBaseClass} from "../../classes/IconBaseClass";
import {getDungeonIcons, getDungeonLayer} from "../../classes/Dungeons";

const marker = {"lat": 75.66675882465918, "lng": 312.08862304687506};

export default class MapMarker extends Component {
    constructor(props) {
        super(props);
        let html = '<p class="title">' + this.props.title + '</p>';
        html += this.props.description ? '<p class="description">' + this.props.description + '</p>' : '';

        this.state = {
            position: this.props.position,
            icon: L.divIcon({
                className: 'map-label',
                html: html,
                iconAnchor: [150, 150]
            }),
            active: false
        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            let html = '<p class="title">' + this.props.title + '</p>';
            html += this.props.description ? '<p class="description">' + this.props.description + '</p>' : '';

            this.setState({icon : L.divIcon({
                    className: 'map-label',
                    html: html,
                    iconAnchor: [150, 150]
                })
            });

            this.setState({position: this.props.position});
        }
    }

    render() {
        return (
            <Marker
                position={this.state.position}
                icon={this.state.icon}
            />
        )
    }
}