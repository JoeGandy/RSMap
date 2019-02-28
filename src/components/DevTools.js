import React, {Component} from 'react'
import 'leaflet/dist/leaflet.css';
import {rewriteIcons} from "../classes/Icons";
import {Typeahead} from 'react-bootstrap-typeahead';

export default class DevTools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: rewriteIcons(),
            action_in_progress: false,
            action_message: true,
            action: null,
            built_locations: []
        };

        this.promptUserForClick = this.promptUserForClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.clickedPos !== prevProps.clickedPos) {
            if (this.state.action_in_progress) {
                switch (this.state.action) {
                    case 'new_location':
                        let name = prompt("Enter a name for this location: ");

                        let new_object = {...this.state.icons.locations[0]};
                        new_object.title = name;
                        new_object.position = this.props.clickedPos;

                        let built_locations = this.state.built_locations;
                        built_locations.push(new_object);
                        this.setState({built_locations: built_locations});
                        console.clear();
                        console.log(JSON.stringify(built_locations,null, 4));


                        break;
                }
            }
        }
    }

    promptUserForClick() {
        this.setState({action_in_progress: true});
        this.setState({action_message: "Please click on the screen to set a new location"})
        this.setState({action: 'new_location'})
    }

    render() {
        if (typeof window !== 'undefined') {
            return (
                <div className="dev_tools">
                    {this.state.action_in_progress ? <b>{this.state.action_message}</b> : null}
                    <button disabled={this.state.action_in_progress} onClick={this.promptUserForClick}>Generate
                        Location
                    </button>
                </div>
            )
        } else {
            return <div>Page is loading...</div>
        }
    }
}