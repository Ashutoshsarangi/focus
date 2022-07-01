import React, {useState} from 'react';
import Timer from './component/timer';
import './focus.scss';

const Focus = ()=>{
    const [flag, setFlag] = useState(false);
    const [concentrate, setConcentrate] = useState('');
    const [takeBreak, setBreak] = useState('');
    const [label, setLabel] = useState('Stay Focus');
    // const [playing, toogle] = useAudio(); // Example Of Custome Hook , But having issues with Audio

    const setFocusTime = (e) =>{
        setConcentrate(e.target.value);
        setBreak('');
    }

    const setBreakTime = (e) =>{
        setBreak(e.target.value);
        setConcentrate('');
    }
    const startTheCountDown = ()=>{
        setFlag(true);
        if(concentrate){
            setLabel('Concentrate');
        }
        if(takeBreak){
            setLabel('Enjoy Your Break')
        }
    }
    const stopTheCountDown = ()=>{
        setFlag(false);
        setConcentrate('');
        setBreak('');
    }
    return (
        <div className='focus-container'>
            <h2 className='title'>{label}</h2>
            <select className='slt-container'onChange={(e)=> setFocusTime(e)} defaultValue={concentrate} value={concentrate}>
                <option value=''>Select Focus Time</option>
                <option value='5'>5 Min</option>
                <option value='15'>15 Min</option>
                <option value='25'>25 Min</option>
                <option value='30'>30 Min</option>
                <option value='45'>45 Min</option>
                <option value='65'>65 Min</option>
            </select>
            <select className='slt-container'onChange={(e)=> setBreakTime(e)} defaultValue={takeBreak} value={takeBreak}>
                <option value=''>Select Break Time</option>
                <option value='5'>5 Min</option>
                <option value='10'>10 Min</option>
                <option value='25'>15 Min</option>
            </select>
            <div className='btn-container'>
                <button className='btn' onClick={startTheCountDown}>Start</button>
                <button className='btn' onClick={stopTheCountDown}>Clear</button>
            </div>
            {/* <button onClick={toogle}>{playing ? 'pause': 'play'}</button> */}
            {
                // For in pur of Focus :- lower limit :- 1 min upper limit :- 65 Min
                // For Break Lower Limit :- 1, Upper limit :- 20 MIn
                // When Button Click to Start It will start the timer.
                flag && <Timer futureDate={new Date().getTime() + ((concentrate || takeBreak) * 60  * 1000)} label={label}/>
            }
        </div>
    );
}
export default React.memo(Focus);

/**
 * ! For 1st Part Just Wanted the Timer Functionality and the selected values and Good Message
 * and Need to add Audio Functionality in the Part 1,
 * Part - 2 I will add The Plot + JSON DB + useReducer
 */