import React, {Component} from 'react'
import {Marker, Popup} from "react-leaflet";
import {AgilityShortcutIcon} from "../classes/Icons";

const marker = {lat: 76.40881056467734, lng: 317.13134765625006};

export default class MapMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            icon: this.props.icon
        };
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({icon: this.props.icon});
        }
    }

    render() {
        let icon = this.state.icon;

        return (
            <Marker
                position={this.state.position}
                icon={this.state.icon}
                onMouseOver={(e) => {
                    e.target.openPopup();
                }}
                onMouseOut={(e) => {
                    e.target.closePopup();
                }}
            >
                <Popup>{this.props.title}</Popup>
            </Marker>
        )
    }
}