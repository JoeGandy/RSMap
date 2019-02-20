import React, {Component} from 'react'
import MapMarker from "./MapMarker";
import {Icons, rewriteIcons} from "../classes/Icons";
import {IconBaseClass} from "../classes/IconBaseClass";


export default class MapMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: rewriteIcons()
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            IconBaseClass.setZoomLevel(this.props.zoomLevel);
            this.setState({icons: rewriteIcons()});
        }
    }

    render() {
        return (
            <>
                <MapMarker position={{lat: 76.90817663339624, lng: 312.0227050781250}} icon={this.state.icons.AgilityShortcutIcon}/>
                <MapMarker position={{lat: 77.20226173611962, lng: 319.01550292968756}} icon={this.state.icons.AgilityShortcutIcon}/>
            </>
        )
    }
}