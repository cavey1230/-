import React, {Component} from 'react';
import "./css/App.css";
import "./css/Ali_ICON.css";
import {SessionPad} from "./component/SessionPad";
import {BreakPad} from "./component/BreakPad";
import {IntervalPad} from "./component/IntervalPad";

class App extends Component {
    render() {
        return (
            <div>
                <SessionPad session={this.props.session}
                            sessionAction={this.props.sessionAction}
                            interValAction={this.props.interValAction}
                />
                <BreakPad break={this.props.break} breakAction={this.props.breakAction}/>
                <IntervalPad
                    session={this.props.session}
                    break={this.props.break}
                    interval={this.props.interval}
                    interValAction={this.props.interValAction}
                />
            </div>
        )
    }
}

export default App;
