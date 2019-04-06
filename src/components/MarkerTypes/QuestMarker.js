import React, {Component} from 'react'
import {Marker, Popup} from "react-leaflet";

const AMOUNT_IN_LIST = 4;

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
                    <Popup autoPan={false}  className={"quest_popup"}>
                        <h4><img src={this.props.options.iconUrl}/> {this.props.options.title} <img
                            src={this.props.options.iconUrl}/></h4>
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
                        {this.props.options.quests_required.length > 0 ? <>
                            <h4>Quests Required:</h4>
                            <ul>
                                {this.props.options.quests_required.map(function (quest, i) {
                                    if (i < AMOUNT_IN_LIST) {
                                        return <li key={i}>{quest}</li>
                                    } else if (i === AMOUNT_IN_LIST) {
                                        return <li key={i} className="end_of_list">Too many quests, see full guide</li>
                                    } else {
                                        return null;
                                    }
                                })}
                            </ul>
                        </> : <><h4>Quests Required:</h4>
                            <ul>
                                <li>None</li>
                            </ul>
                        </>}
                        {this.props.options.skills_required.length > 0 ? <>
                            <h4>Skills Required:</h4>
                            <ul>
                                {this.props.options.skills_required.map(function (skill, i) {
                                    if (i < AMOUNT_IN_LIST) {
                                        return <li
                                            key={i}>{skill.level} {skill.name} {skill.optional ? "(Optional)" : null}</li>
                                    } else if (i === AMOUNT_IN_LIST) {
                                        return <li key={i} className="end_of_list">Too many skills, see full guide</li>
                                    } else {
                                        return null;
                                    }
                                })}
                            </ul>
                        </> : <><h4>Skills Required:</h4>
                            <ul>
                                <li>None</li>
                            </ul>
                        </>}
                        <br/>
                        <i>Click icon for the full guide on osrs.wiki</i>
                    </Popup>
                </Marker>
            </>
        )
    }
}