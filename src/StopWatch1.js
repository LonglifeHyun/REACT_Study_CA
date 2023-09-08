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
    // const [milisec, setMilisec] = useState("000");
    const [milisec, setMilisec] = useState("00");

    const [intervalId, setIntervalId] = useState(null);

    /* 시, 분, 초, 밀리초 증가 함수 */
    /*
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
        console.log("increaseMilisec START");
        let nxtNum = +milisec + 1;
        console.log("nxtNum :",nxtNum);
        if(nxtNum === 1000){
            increaseSecond();
            nxtNum = 0;
        } 

        let nxtStr = String(nxtNum).padStart(3, "0");
        setMilisec(nxtStr);
    }
    */

    const increaseHour = () => {
        // console.log("increaseHour START");

        setHour( (curHour) => {
            // console.log("curHour :",curHour);

            let nxtHour = +curHour + 1;
            // console.log("nxtHour :",nxtHour);
            
            return String(nxtHour).padStart(2, "0");
        });
    };

    const increaseMinute = () => {
        // console.log("increaseMinute START");

        setMinute( (curMinute) => {
            // console.log("curMinute :",curMinute);

            let nxtMinute = +curMinute + 1;
            // console.log("nxtMinute :",nxtMinute);
            if(nxtMinute === 60){
                increaseHour();
                nxtMinute = 0;
            } 
            
            return String(nxtMinute).padStart(2, "0");
        });
    };

    const increaseSecond = () => {
        // console.log("increaseSecond START");

        setSecond( (curSecond) => {
            // console.log("curSecond :",curSecond);

            let nxtSecond = +curSecond + 1;
            // console.log("nxtSecond :",nxtSecond);
            if(nxtSecond === 60){
                increaseMinute();
                nxtSecond = 0;
            } 
            
            return String(nxtSecond).padStart(2, "0");
        });
    };

    const increaseMilisec2 = () => {
        // console.log("increaseMilisec2 START");

        setMilisec( (curMilisec) => {
            // console.log("curMilisec :",curMilisec);

            let nxtMilisec = +curMilisec + 1;
            // console.log("nxtMilisec :",nxtMilisec);
            if(nxtMilisec === 100){
                increaseSecond();
                nxtMilisec = 0;
            } 
            
            return String(nxtMilisec).padStart(2, "0");
        });
    };

    /* Child객체로부터 클릭한 버튼 값을 콜백으로 받아옴 */
    // function callTimeAct(action) {
    //     console.log(action);
    //     console.log("5");

    //     if(action === "RESET") {
    //         setHour("00");
    //         setMinute("00");
    //         setSecond("00");
    //         setMilisec("000");
    //     }

    //     if(action === "START" || action === "STOP") {
    //         console.log("4");
    //         alert("hey");
    //         // setTimeout(increaseMilisec, 1);
    //         while(action !== "STOP"){
    //             console.log("here");
    //             setTimeout(increaseMilisec2, 1);
    //         }
    //     }

    // }
    function callTimeAct(action) {
        // console.log(action);
    
        if (action === "RESET") {
            setHour("00");
            setMinute("00");
            setSecond("00");
            // setMilisec("000");
            setMilisec("00");
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }
    
        if (action === "START") {
            if (!intervalId) {
                let newIntervalId = setInterval(increaseMilisec2, 10);
                setIntervalId(newIntervalId);
            }
        }
    
        if (action === "STOP") {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }
    }

    return (
        <div className="StopWatch1">
            <header className="StopWatch1-header">

            <div>
                <TimeDisplay hour={hour} minute={minute} second={second} milisec={milisec}/>
                <div>
                    <ResetBtn callTimeAct = {callTimeAct}/>
                    <GoStopBtn callTimeAct = {callTimeAct}/>
                </div>
            </div>
            <img src={logo} className="StopWatch1-logo" alt="logo" />
            </header>
        </div>
    );
}

export default StopWatch1;