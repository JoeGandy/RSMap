import React, {Component} from 'react'
import MapMarker from "./MapMarker";
import L from 'leaflet';
import {withPrefix} from 'gatsby'

const iconPerson = new L.Icon({
    iconUrl: require('../../static/icons/agility_shortcut.png'),
    iconRetinaUrl: require('../../static/icons/agility_shortcut.png'),
    iconAnchor: new L.Point(30,30),
    popupAnchor: new L.Point(0,-30),
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60,60),
    className: 'leaflet-div-icon'
});

export default class MapMarkers extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MapMarker position={{lat:76.90817663339624,lng:312.0227050781250}} icon={iconPerson} />
        )
    }
}