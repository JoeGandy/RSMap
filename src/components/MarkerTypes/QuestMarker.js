import React, {Component} from 'react'
import {Marker, Popup} from "react-leaflet";

export default class QuestMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            icon: this.props.icon,
            active: false
        };
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps && this.props.icon) {
            this.setState({icon: this.props.icon});
        }
    }

    //https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript
    static openInNewTab(url) {
        let win = window.open(url, '_blank');
        win.focus();
    }

    render() {
        let icon = this.state.icon;

        return (
            <>
                <Marker
                    position={this.props.options.position}
                    icon={this.state.icon}
                    onMouseOver={(e) => {
                        e.target.openPopup();
                        this.setState({active: true});
                    }}
                    onMouseOut={(e) => {
                        e.target.closePopup();
                        this.setState({active: false});
                    }}
                    onClick={(e) => {
                        QuestMarker.openInNewTab(this.props.options.full_guide);
                    }}
                >
                    <Popup className={"quest_popup"}>
                        <h4>{this.props.options.title}</h4>
                        <table>
                            <thead>
                            <tr>
                                <td>Difficulty</td>
                                <td>Points</td>
                                <td>Length</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.props.options.difficulty}</td>
                                <td>{this.props.options.quest_points}</td>
                                <td>{this.props.options.length}</td>
                            </tr>
                            </tbody>
                        </table>
                        {this.props.options.items_required.length > 0 ? <>
                            <h4>Items Needed:</h4>
                            <ul>
                                {this.props.options.items_required.map(function (item, i) {
                                    return <li key={i}>{item.amount} x {item.name}</li>
                                })}
                            </ul>
                        </> : <><h4>Items Needed:</h4><ul><li>None</li></ul></>}
                        {this.props.options.quests_required.length > 0 ? <>
                            <h4>Quests Required:</h4>
                            <ul>
                                {this.props.options.quests_required.map(function (quest, i) {
                                    return <li key={i}>{quest}</li>
                                })}
                            </ul>
                        </> : <><h4>Quests Required:</h4><ul><li>None</li></ul></>}
                        {this.props.options.skills_required.length > 0 ? <>
                            <h4>Skills Required:</h4>
                            <ul>
                                {this.props.options.skills_required.map(function (skill, i) {
                                    return <li key={i}>{skill.level} {skill.name}</li>
                                })}
                            </ul>
                        </> : <><h4>Skills Required:</h4><ul><li>None</li></ul></>}
                        <br/>
                        <i>Click icon for the full guide on osrs.wiki</i>
                    </Popup>
                </Marker>
            </>
        )
    }
}