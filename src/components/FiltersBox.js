import React, {Component} from "react";
import {rewriteIcons} from "../classes/Icons";
import {Categories, Categories_name} from "../classes/IconBaseClass";

export default class FiltersBox extends Component {
    constructor(props) {
        super(props);

        let hide_sidebar = false;
        if(localStorage.getItem('hide_sidebar') !== "undefined" && localStorage.getItem('hide_sidebar') !== null){
            hide_sidebar = localStorage.getItem('hide_sidebar') === "true";
        }

        this.state = {
            icons: rewriteIcons(),
            filters: {},
            toggle_all: true,
            show_side_bar: !hide_sidebar,
        };

        if (localStorage.getItem('filters') !== "undefined" && localStorage.getItem('filters') !== null) {
            this.state.filters = JSON.parse(localStorage.getItem('filters'));
        } else {
            for (let key in Categories) {
                this.state.filters[Categories[key]] = true;
            }
        }

        this.props.updateFilters(this.state.filters);

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);

    }

    toggleSidebar() {
        localStorage.setItem('hide_sidebar', this.state.show_side_bar);
        this.setState({show_side_bar: !this.state.show_side_bar});
    }

    updateFilters() {
        this.props.updateFilters(this.state.filters);
    }

    handleFilterChange(filter) {
        let filters = this.state.filters;
        filters[filter] = !filters[filter];
        this.setState({filters: filters});

        localStorage.setItem('filters', JSON.stringify(filters));
        this.updateFilters()
    }

    toggleAll() {
        let filters = this.state.filters;
        for (let key in filters) {
            filters[key] = !this.state.toggle_all;
        }
        this.setState({filters: filters});
        this.setState({toggle_all: !this.state.toggle_all});

        localStorage.setItem('filters', JSON.stringify(filters));
        this.updateFilters()
    }


    render() {
        let handleFilterChange = this.handleFilterChange;
        let filters = this.state.filters;

        return (
            <>
                <button className={"toggle_filters"} title={"Toggle Filters"} onClick={this.toggleSidebar}/>
                {this.state.show_side_bar ? <div className={"panel right_sidebar"}>
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
                            <hr/>
                            <div>
                                <input type={"checkbox"} name={"toggle_all"} checked={this.state.toggle_all}
                                       onChange={this.toggleAll}/>
                                <label htmlFor={"toggle_all"}> Toggle All Filters </label>
                            </div>
                        </div>

                    </div>
                </div> : null}
            </>
        );
    }
}