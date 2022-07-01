import React, {useState, useEffect} from 'react';

import './timer.scss';

const Timer = ({futureDate, label}) =>{
    const [timer, setTimer] = useState({hr: 1, min: 0, sec: 0});

    useEffect(()=>{
        let interval;
        if(timer.min > 0 || timer.sec > 0 || timer.hr > 0){
            interval = setInterval(()=>{
                const countDown = futureDate - new Date().getTime();
                setTimer({
                    hr: 0,
                    min: Math.floor((countDown/(1000 * 60))),
                    sec: Math.floor((countDown/1000) % 60)
                })
            }, 1000);
        }else{
            // if all timers are 0, then May be in Future we can pass this as a flag and give user 
            // Good Message.
        }
        return ()=> clearInterval(interval);
    });

    /**
     * !!! This Feature would be available in Sesson - 2
     * ! We need to Have a useReducer to dispatch an action which indicate the Timer is completed
     * ! Then we Will capture the Event in side the Main Focus Component and based on the 
     *  Focus / Break we will add it in the Json DB.
     * ! the From the JSON Db we will plot a Bar graph based on the dates and all.
     */
    return (
        <div className='timer-container'>
            <span className={label === 'Enjoy Your Break'? 'timer red-color' : 'timer'}>{timer.min} : {timer.sec}</span>
        </div>
    );
}


export default Timer;