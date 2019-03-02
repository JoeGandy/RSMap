import React, {Component} from 'react'
import {Map, Marker, Polyline, Popup} from "react-leaflet";
import {AgilityShortcutIcon} from "../../classes/Icons";
import MapMarkers from "../OSRSMap";

const marker = {lat: 76.40881056467734, lng: 317.13134765625006};

export default class MapMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            icon: this.props.icon,
            active: false
        };
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps && this.props.icon ) {
            this.setState({icon: this.props.icon});
        }
    }

    render() {
        let icon = this.state.icon;

        return (
            <>
                <Marker
                    position={this.props.icon.options.position}
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
                    <Popup>
                        <h4>{this.props.title}</h4>
                        {this.props.icon.options.description ?
                            <div><br />{this.props.icon.options.description.split("\n").map(function (item, i) {
                                return <div key={i}>
                                    {item}
                                    <br/>
                                </div>
                            })}</div> : null}
                    </Popup>
                </Marker>
            </>
        )
    }
}