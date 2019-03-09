import React, {Component} from 'react'
import {Marker} from "react-leaflet";
import {AgilityShortcutIcon} from "../../classes/Icons";
import * as L from "leaflet";

const marker = {"lat":75.66675882465918,"lng":312.08862304687506};

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

    render() {
        return (
            <>
                <Marker
                    position={this.state.position}
                    icon={this.state.icon}
                >
                </Marker>
            </>
        )
    }
}