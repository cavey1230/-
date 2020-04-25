import React from "react";

let intervalID = 0;

const pauseInterVal = () => {
    clearInterval(intervalID);
}

const IntervalPad = (props) => {
    let SessionMinute = props.session - 1;
    let BreakMinute = props.break - 1;
    let BetweenMinute = props.interval.minute;
    let CountPD = "Close";
    let second = props.interval.second;

    const intervalFC = () => {
        second -= 1;
        console.log(BetweenMinute, second);
        props.interValAction(BetweenMinute, second);
        if (second === 0) {
            BetweenMinute -= 1;
            second = 60;
            if (BetweenMinute < 0) {
                switch (CountPD) {
                    case "Close":
                        BetweenMinute = BreakMinute;
                        CountPD = "Open";
                        document.getElementById("timer-label").innerHTML="Break";
                        break;
                    case "Open":
                        BetweenMinute = SessionMinute;
                        CountPD = "Close";
                        document.getElementById("timer-label").innerHTML="Session";
                        break;
                    default:
                        alert("系统出错");
                }
            }
        }
    }

    const startInterVal = () => {
        clearInterval(intervalID);
        props.interValAction(BetweenMinute, second);
        intervalID = setInterval(intervalFC, 1000);
    }

    const RestInterVal = () => {
        clearInterval(intervalID);
        BetweenMinute = SessionMinute;
        CountPD = "Close";
        second = 60;
        intervalID = setInterval(intervalFC, 1000);
    }


    return (
        <div id="display_pad">
            <p id="timer-label">Session</p>
            <p id="time-left">{props.interval.minute}:{props.interval.second}</p>
            <div>
                <button id="start_stop" onClick={() => startInterVal()}>
                    <i className="iconfont icon-bofang"></i>
                </button>
                <button id="start_stop" onClick={() => pauseInterVal()}>
                    <i className="iconfont icon-zanting"></i>
                </button>
                <button id="reset" onClick={() => RestInterVal()}>
                    <i className="iconfont icon-tingzhi"></i>
                </button>
            </div>
        </div>
    )
}
export {IntervalPad, pauseInterVal}