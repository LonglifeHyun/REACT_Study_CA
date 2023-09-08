import './StopWatch.css';

function TimeDisplay({hour, minute, second, milisec}) {

    return (
        <div className="Time-display">
            {hour}:{minute}:{second}.{milisec}
        </div>
    );
}

export default TimeDisplay;