import React, {Component} from 'react'
import 'leaflet/dist/leaflet.css';
import {getAllIconsFlat} from "../classes/Icons";
import {Typeahead} from 'react-bootstrap-typeahead';

export default class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: getAllIconsFlat(),
            search_val: null
        };

        this.searchSelect = this.searchSelect.bind(this);
    }

    searchSelect(results) {
        if (typeof (results[0]) !== "undefined") {
            if (results[0].position) {
                this.props.centerMap(results[0].position);
            } else if (results[0].positions && results[0].positions.length > 0) {
                this.props.centerMap(results[0].positions[0]);
            } else {
                this.props.centerMap(results[0].stops[0]);
            }
        }
    }

    render() {
        if (typeof window !== 'undefined') {
            return (
                <div className="location_search_container">
                    <label htmlFor="location_search"><h1>{this.props.title}</h1>
                        <Typeahead
                            name="location_search"
                            labelKey={"title"}
                            options={this.state.icons}
                            autoFocus
                            minLength={1}
                            renderMenuItemChildren={(option) => (
                                <div>
                                    {option.title} {option.description ? '- ' + option.description : null}
                                </div>
                            )}
                            clearButton={true}
                            onChange={this.searchSelect}
                            value={this.state.search_val}
                            placeholder={"Search Here..."}
                            dropup={true}

                        />
                    </label>
                </div>
            )
        } else {
            return <div>Page is loading...</div>
        }
    }
}