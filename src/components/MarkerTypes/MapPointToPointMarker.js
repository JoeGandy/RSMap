import React, {Component} from 'react'
import {Map, Marker, Polyline, Popup} from "react-leaflet";
import {AgilityShortcutIcon} from "../../classes/Icons";

export default class MapPointToPointMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            icon: this.props.icon,
            active: false,
        };

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.getPositions = this.getPositions.bind(this);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({icon: this.props.icon});
        }
    }

    onMarkerClick(e) {
        //Idea i had to click to jump to markers but needs a lot of work to be fluid, but it is functional
        for (let i in this.props.icon.options.positions) {
            let position = this.props.icon.options.positions[i];
            if (position.lat === e.latlng.lat && position.lng === e.latlng.lng) {
                let target = null;
                if (i == 0) {
                    //goto last position
                    target = this.props.icon.options.positions[this.props.icon.options.positions.length - 1];
                } else {
                    //goto first position
                    target = this.props.icon.options.positions[0];
                }
                this.setState({active: true});
                this.props.centerMap(target);
            }
        }
    }

    getPositions(){
        if(this.props.icon.options.positions.length){
            return this.props.icon.options.positions;
        }
        let results = [];
        for (let i = 0; i < this.props.icon.options.stops.length - 1; i++) {
            for (let j = i + 1; j < this.props.icon.options.stops.length; j++) {
                results.push(this.props.icon.options.stops[i]);
                results.push(this.props.icon.options.stops[j]);
            }
        }
        return results;

    }

    render() {
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
                    //onClick={this.onMarkerClick}
                    opacity={this.props.end ? 0.4 : 1}
                >
                    <Popup>
                        <h4>{this.props.title}</h4>
                        {this.props.icon.options.description ? <p>{this.props.icon.options.description}</p> : null}
                    </Popup>
                </Marker>
                {this.state.active ?
                    <Polyline
                        weight={6}
                        color={'yellow'}
                        positions={this.getPositions()}
                        opacity={0.5}
                    /> : null}
            </>
        )
    }
}