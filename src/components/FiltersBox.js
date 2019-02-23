import React, {Component} from "react";
import {rewriteIcons} from "../classes/Icons";

export default class FiltersBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icons: rewriteIcons()
        };

        console.log(this.state.icons);

    }


    render() {
        return (
            <div className={"panel right_sidebar"}>
                <h1>Filters</h1>

            </div>
        );
    }
}