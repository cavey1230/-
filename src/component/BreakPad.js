import React from "react";

const BreakPad = (props) => {

    const ADD = () => {
        props.breakAction.add()
    }
    const SUB = () => {
        props.breakAction.sub()
    }
    return (
        <div>
            <p id="break-label">Break Length</p>
            <div className="button_group">
                <button id="break-decrement" onClick={() => SUB()}>
                    <i className="iconfont icon-kuaitui"></i>
                </button>
                <p>{props.break}</p>
                <button id="break-increment" onClick={() => ADD()}>
                    <i className="iconfont icon-kuaijin"></i>
                </button>
            </div>
        </div>
    )
}
export {BreakPad}