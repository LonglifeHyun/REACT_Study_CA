import logo from './logo.svg';
import './StopWatch.css';
import TimeDisplay from './TimeDisplay';
import ResetBtn from './ResetBtn';
import GoStopBtn from './GoStopBtn';
import React, { useState } from 'react';

function StopWatch1() {
    /* Parent단에서 변수 제어 */
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");
    const [milisec, setMilisec] = useState("000");

    /* 시, 분, 초, 밀리초 증가 함수 */
    function increaseHour() {
        let nxtVal = +hour + 1;
        setHour(String(nxtVal));
    }

    function increaseMinute() {
        let nxtVal = +minute + 1;
        if(nxtVal === 60){
            increaseHour();
            nxtVal = 0;
        } 
        setMinute(String(nxtVal).padStart(2, "0"));
    }

    function increaseSecond() {
        let nxtVal = +second + 1;
        if(nxtVal === 60){
            increaseMinute();
            nxtVal = 0;
        } 
        setSecond(String(nxtVal).padStart(2, "0"));
    }

    function increaseMilisec() {
        let nxtVal = +milisec + 1;
        if(nxtVal === 1000){
            increaseSecond();
            nxtVal = 0;
        } 
        setMilisec(String(nxtVal).padStart(3, "0"));
    }

    /* Child객체로부터 클릭한 버튼 값을 콜백으로 받아옴 */
    async function callTimeAct(action) {
        console.log(action);
        console.log("5");

        if(action === "RESET") {
            setHour("00");
            setMinute("00");
            setSecond("00");
            setMilisec("000");
        }

        if(action === "START" || action === "STOP") {
            console.log("4");
            // setTimeout(increaseMilisec, 1);
            while(action !== "STOP"){
                console.log("here");
                setTimeout(await increaseMilisec, 1);
            }
        }

    }

    return (
        <div className="StopWatch1">
            <header className="StopWatch1-header">
            <img src={logo} className="StopWatch1-logo" alt="logo" />

            <TimeDisplay hour={hour} minute={minute} second={second} milisec={milisec}/>
            <ResetBtn callTimeAct = {callTimeAct}/>
            <GoStopBtn callTimeAct = {callTimeAct}/>
            </header>
        </div>
    );
}

export default StopWatch1;