import React, {Component} from 'react'
import {Marker, Popup} from "react-leaflet";

const marker = {lat: 76.40881056467734, lng: 317.13134765625006};

export default class MapMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
        };

        setTimeout(function () {
            // this.setState({markerPos: {"lat": 76.40881056467734, "lng": 317.13134765625006}});
        }, 500);
    }

    render() {
        console.log(this.state.position);
        return (
            <Marker
                position={this.state.position}
                icon={this.props.icon}
            >
                <Popup>You are here</Popup>
            </Marker>
        )
    }
}