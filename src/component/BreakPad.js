import React from "react";
import {pauseInterVal} from "./IntervalPad";

const BreakPad = (props) => {

    const ADD = () => {
        props.breakAction.add();
        pauseInterVal();
    }
    const SUB = () => {
        props.breakAction.sub();
        pauseInterVal();
    }
    return (
        <div id="break_pad">
            <p id="break-label">Break Length</p>
            <div className="button_group">
                <button id="break-decrement" onClick={() => SUB()}>
                    <i className="iconfont icon-kuaitui"></i>
                </button>
                <p id="break-length">{props.break}</p>
                <button id="break-increment" onClick={() => ADD()}>
                    <i className="iconfont icon-kuaijin"></i>
                </button>
            </div>
        </div>
    )
}
export {BreakPad}