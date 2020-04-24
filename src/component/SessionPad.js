import React from "react";
import {pauseInterVal} from "./IntervalPad";

const SessionPad = (props) => {

    const ADD = () => {
        props.sessionAction.add()
        pauseInterVal();
        props.interValAction(props.session, 60);
    }
    const SUB = () => {
        props.sessionAction.sub()
        pauseInterVal();
        props.interValAction(props.session - 2, 60);
    }
    return (
        <div>
            <p id="break-label">Session Length</p>
            <div className="button_group">
                <button id="session-decrement" onClick={() => SUB()}>
                    <i className="iconfont icon-kuaitui"></i>
                </button>
                <p>{props.session}</p>
                <button id="session-increment" onClick={() => ADD()}>
                    <i className="iconfont icon-kuaijin"></i>
                </button>
            </div>
        </div>
    )
}
export {SessionPad}