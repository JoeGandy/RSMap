import React, {Component} from 'react'
import 'leaflet/dist/leaflet.css';
import {rewriteIcons} from "../classes/Icons";
import {Typeahead} from 'react-bootstrap-typeahead';


let example_label = {
    position: {},
    title: "Black Demons",
    description: null
};

export default class DevTools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: rewriteIcons(),
            action_in_progress: false,
            action_message: true,
            action: null,
            built_locations: [],
            built_labels: [],
            region_points: [],
        };

        this.startNewLocation = this.startNewLocation.bind(this);
        this.startNewLabel = this.startNewLabel.bind(this);
        this.startNewRegion = this.startNewRegion.bind(this);
        this.endNewRegion = this.endNewRegion.bind(this);
        this.cancelDevtools = this.cancelDevtools.bind(this);
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
                        console.log(JSON.stringify(built_locations, null, 4));


                        break;
                    case 'new_label':
                        let label_name = prompt("Enter a name for this label: ");

                        let new_label_object = {...example_label};
                        new_label_object.title = label_name;
                        new_label_object.position = this.props.clickedPos;

                        let built_labels = this.state.built_labels;
                        built_labels.push(new_label_object);
                        this.setState({built_labels: built_labels});
                        console.clear();
                        console.log(JSON.stringify(built_labels, null, 4));
                        break;
                    case 'new_region':
                        let region_points = [...this.state.region_points];
                        region_points.push(this.props.clickedPos);
                        this.setState({region_points: region_points})
                        break;
                }
            }
        }
    }

    endNewRegion(){
        console.clear();
        let label_text = prompt("Enter Region Name");
        let obj = {
            label: label_text,
            points: this.state.region_points
        };
        console.log(JSON.stringify(obj, null, 4));

        this.setState({action_in_progress: true});
        this.setState({action_message: null});
        this.setState({action: null});
        this.setState({region_points: []});

    }

    startNewRegion() {
        this.setState({action_in_progress: true});
        this.setState({action_message: "Please click around the border to build a new region"})
        this.setState({action: 'new_region'})
    }

    startNewLocation() {
        this.setState({action_in_progress: true});
        this.setState({action_message: "Please click on the screen to set a new location"})
        this.setState({action: 'new_location'})
    }

    startNewLabel() {
        this.setState({action_in_progress: true});
        this.setState({action_message: "Please click on the in two locations to make the label"})
        this.setState({action: 'new_label'});
        this.setState({pending_positions: []});
    }

    cancelDevtools() {
        this.setState({action_in_progress: false});
        this.setState({action_message: "."});
        this.setState({action: null});
        this.setState({pending_positions: []});
        this.setState({region_points: []});
        this.setState({built_labels: []});

    }

    render() {
        if (typeof window !== 'undefined') {
            return (
                <div className="dev_tools">
                    {this.state.action_in_progress ? <b>{this.state.action_message}</b> : null}
                    <br/>
                    <button disabled={this.state.action_in_progress} onClick={this.startNewLocation}>Generate
                        Location
                    </button>
                    <br/>
                    <button disabled={this.state.action_in_progress} onClick={this.startNewLabel}>Generate
                        Label
                    </button>
                    <br/>
                    <button disabled={this.state.action_in_progress} onClick={this.startNewRegion}>Generate
                        Region
                    </button>
                    {this.state.action_in_progress && this.state.action === "new_region" ?
                        <button disabled={!this.state.action_in_progress} onClick={this.endNewRegion}>End
                            Region
                        </button> : null}
                    <br/>
                    <br/>

                    <button disabled={!this.state.action_in_progress} onClick={this.cancelDevtools}>Cancel
                        DevTools
                    </button>
                </div>
            )
        } else {
            return <div>Page is loading...</div>
        }
    }
}