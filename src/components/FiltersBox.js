import React, {Component} from "react";
import {rewriteIcons} from "../classes/Icons";
import {Categories, Categories_name} from "../classes/IconBaseClass";

export default class FiltersBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icons: rewriteIcons(),
            filters: {},
            toggle_all: true
        };

        for (let key in Categories) {
            this.state.filters[Categories[key]] = true;
        }

        this.props.updateFilters(this.state.filters);

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.toggleAll = this.toggleAll.bind(this);

    }

    updateFilters() {
        this.props.updateFilters(this.state.filters);
    }

    handleFilterChange(filter) {
        let filters = this.state.filters;
        filters[filter] = !filters[filter];
        this.setState({filters: filters});

        this.updateFilters()
    }

    toggleAll(){
        let filters = this.state.filters;
        for(let key in filters){
            filters[key] = !this.state.toggle_all;
        }
        this.setState({filters: filters});
        this.setState({toggle_all: !this.state.toggle_all});

        this.updateFilters()
    }


    render() {
        let handleFilterChange = this.handleFilterChange;
        let filters = this.state.filters;

        return (
            <div className={"panel right_sidebar"}>
                <div className={"content"}>
                    <div className={"content_inner"}>
                        <h1>Filters</h1>
                        {Object.keys(this.state.filters).map(function (keyName, i) {
                            return <div key={i}>
                                <input type={"checkbox"} name={keyName + i}
                                       checked={filters[keyName]}
                                       onChange={() => handleFilterChange(keyName)}/>
                                <label htmlFor={keyName + i}> {Categories_name[keyName]} </label>
                            </div>
                        })}
                        <hr />
                        <div>
                            <input type={"checkbox"} name={"toggle_all"} checked={this.state.toggle_all}
                                   onChange={this.toggleAll}/>
                            <label htmlFor={"toggle_all"}> Toggle All Filters </label>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}