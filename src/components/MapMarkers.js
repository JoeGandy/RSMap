import React, {Component} from 'react'
import MapMarker from "./MapMarker";
import L from 'leaflet';
import * as MapIcons from "../logic/MapIcons";


export default class MapMarkers extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <MapMarker position={{lat: 76.90817663339624, lng: 312.0227050781250}} icon={MapIcons.iconAgility}/>
                <MapMarker position={{lat: 77.20226173611962, lng: 319.01550292968756}} icon={MapIcons.iconAgility}/>
            </>
        )
    }
}