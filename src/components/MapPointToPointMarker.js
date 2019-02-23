import React, {Component} from 'react'
import {Map, Marker, Polyline, Popup} from "react-leaflet";
import {AgilityShortcutIcon} from "../classes/Icons";

export default class MapPointToPointMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            icon: this.props.icon,
            active: false,
        };

        this.onMarkerClick = this.onMarkerClick.bind(this);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({icon: this.props.icon});
        }
    }

    onMarkerClick(e){
        for(let i in this.props.icon.options.positions){
            let position = this.props.icon.options.positions[i];
            if(position.lat === e.latlng.lat && position.lng === e.latlng.lng){
                let target = null;
                if(i == 0){
                    //goto last position
                    target = this.props.icon.options.positions[this.props.icon.options.positions.length - 1];
                }else{
                    //goto first position
                    target = this.props.icon.options.positions[0];
                }
                this.setState({active: true});
                this.props.centerMap(target);
            }
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
                    //onClick={this.onMarkerClick}
                    opacity={this.props.end ? 0.4 : 1}
                >
                    <Popup>
                        <h4>{this.props.title}</h4>
                        {this.props.icon.options.description ? <p>{this.props.icon.options.description}</p> : null}
                    </Popup>
                </Marker>
                {this.state.active ?
                    this.props.multiple ? 
                    this.props.icon.routes.map(function(route, i){
                        return <Polyline
                        weight={6}
                        color={'yellow'}
                        dashArray={[15, 15]}
                        positions={route}
                        opacity={0.5}
                    />
                    }) : 
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