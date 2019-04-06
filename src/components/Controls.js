import React, {Component} from "react";
import OSRSMap, {getLatestCenter, getLatestLayer, getLatestZoom} from "./OSRSMap";

export default class Controls extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.shareLocation = this.shareLocation.bind(this);

    }

    encodeQueryData(data) {
        const ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    }

    shareLocation(){
        let data = {
            zoom: getLatestZoom(OSRSMap.DEFAULT_ZOOM),
            layer: getLatestLayer(OSRSMap.DEFAULT_LAYER),
            center: JSON.stringify(getLatestCenter(OSRSMap.DEFAULT_CENTER))
        };

        let share_url = window.location.origin + '?' + this.encodeQueryData(data);

        prompt("Copy this url to share this location", share_url)
    }

    render() {
        return (
            <>
                <button className={"controls_button"} title={"Share Location"} onClick={this.shareLocation}>Share</button>
            </>
        );
    }
}