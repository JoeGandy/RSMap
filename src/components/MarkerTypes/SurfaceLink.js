import React, {Component} from 'react'
import {Marker, Popup} from "react-leaflet";
import {AgilityShortcutIcon} from "../../classes/Icons";
import {IconBaseClass} from "../../classes/IconBaseClass";

const marker = {lat: 76.40881056467734, lng: 317.13134765625006};

export default class SurfaceLink extends Component {
    constructor(props) {
        super(props);

        this.onLayerLinkClick = this.onLayerLinkClick.bind(this);
    }

    onLayerLinkClick(machine_name, new_center){
        this.props.handleLayerChange(machine_name, new_center);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({icon: this.props.icon});
        }
    }

    render() {
        let props = this.props;
        let onLayerLinkClick = this.onLayerLinkClick;

        return (
            <>
                {props.dungeon.exits.map(function (exit, i) {
                    return <Marker
                        key={i}
                        position={exit.position}
                        icon={new IconBaseClass({
                            iconUrl: exit.icon
                        })}
                        onMouseOver={(e) => {
                            e.target.openPopup();
                        }}
                        onMouseOut={(e) => {
                            e.target.closePopup();
                        }}
                        onClick={() => onLayerLinkClick(exit.target_layer, exit.target_layer_position)}
                    >
                        <Popup>
                            <h4>{exit.label}</h4>
                            {props.dungeon.description ?
                                <div><br/>{props.dungeon.description.split("\n").map(function (item, i) {
                                    return <div key={i}>
                                        {item}
                                        <br/>
                                    </div>
                                })}</div> : null}
                        </Popup>
                    </Marker>
                })}
            </>
        )
    }
}