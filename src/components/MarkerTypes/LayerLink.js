import React, {Component} from 'react'
import {Marker, Popup} from "react-leaflet";
import {AgilityShortcutIcon} from "../../classes/Icons";
import {IconBaseClass} from "../../classes/IconBaseClass";
import {getDungeonCenter} from "../../classes/Dungeons";

const marker = {lat: 76.40881056467734, lng: 317.13134765625006};

export default class LayerLink extends Component {
    constructor(props) {
        super(props);

        this.onLayerLinkClick = this.onLayerLinkClick.bind(this);
    }

    onLayerLinkClick(machine_name, position){
        this.props.handleLayerChange(machine_name, position);
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
                    if(exit.target_layer === props.layer) {
                        return <Marker
                            key={i}
                            position={exit.target_layer_position}
                            icon={new IconBaseClass({
                                iconUrl: props.dungeon.icon
                            })}
                            onMouseOver={(e) => {
                                e.target.openPopup();
                            }}
                            onMouseOut={(e) => {
                                e.target.closePopup();
                            }}
                            onClick={() => onLayerLinkClick(props.dungeon.machine_name, exit.position)}
                        >
                            <Popup autoPan={false} >
                                <h4>{props.dungeon.full_name}</h4>
                                {props.dungeon.description ?
                                    <div><br/>{props.dungeon.description.split("\n").map(function (item, i) {
                                        return <div key={i}>
                                            {item}
                                            <br/>
                                        </div>
                                    })}</div> : null}
                            </Popup>
                        </Marker>
                    }
                })}
            </>
        )
    }
}