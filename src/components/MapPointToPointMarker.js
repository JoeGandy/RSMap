import React, {Component} from 'react'
import {Map, Marker, Polyline, Popup} from "react-leaflet";
import {AgilityShortcutIcon} from "../classes/Icons";

export default class MapPointToPointMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            icon: this.props.icon,
            active: false
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
            <>
                <Marker
                    position={this.state.position}
                    icon={this.state.icon}
                    onMouseOver={(e) => {
                        e.target.openPopup();
                        this.setState({active: true});
                    }}
                    onMouseOut={(e) => {
                        e.target.closePopup();
                        this.setState({active: false});
                    }}
                >
                    <Popup>{this.props.title}</Popup>
                </Marker>
                {this.state.active ?
                    <Polyline
                        weight={6}
                        color={'yellow'}
                        dashArray={[15, 15]}
                        positions={this.props.icon.options.positions}
                        opacity={0.5}
                    /> : null}
            </>
        )
    }
}