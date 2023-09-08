import React, { useState } from 'react';

import './StopWatch.css';

function GoStopBtn(props) {
    // console.log("0");

    const [action, setAction] = useState("START");

    const onClickGoStop = () => {
        // console.log("1");
        let preAction = action;
        // console.log("2");
        action === "START" ? setAction("STOP") : setAction("START");
        // console.log("3");

        props.callTimeAct(preAction);
    }

    return (
        <button onClick={onClickGoStop} className="GoStop-btn">
            {action}
        </button>
    );
}

export default GoStopBtn;