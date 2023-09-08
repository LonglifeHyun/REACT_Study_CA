import './StopWatch.css';

function ResetBtn(props) {
    
    const onClickReset = () => {
        props.callTimeAct("RESET");
    }

    return (
        <button onClick={onClickReset} className="Reset-btn">
            RESET
        </button>
    );
}

export default ResetBtn;