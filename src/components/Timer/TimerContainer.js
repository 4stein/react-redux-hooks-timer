import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resetTimer, startTimer, stopTimer, waitTimer} from "../../redux/reducers/TimeReducer";
import {Timer} from "./Timer";


function getElapsedTime(baseTime, startedAt, stoppedAt = Math.floor(Date.now() / 1000)) {
    if (!startedAt) {
        return 0;
    } else {
        return stoppedAt - startedAt + baseTime;
    }
}

export const TimerContainer = () => {

    // useState / usEffect
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setValue(value => value + 1), 1000);
        return () => clearInterval(interval);
    }, []);
    // useSelector
    const notes = useSelector((state) => {
        const {baseTime, startedAt, stoppedAt} = state.timer;
        return {baseTime, startedAt, stoppedAt};
    });
    const {baseTime, startedAt, stoppedAt} = notes;
    const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);
    // useDispatch
    const dispatch = useDispatch();
    const onStart = (elapsed) => {dispatch(startTimer(elapsed))}
    const onStop = () => {dispatch(stopTimer())}
    const onWait = () => {dispatch(waitTimer())}
    const onReset = () => {dispatch(resetTimer())}


    return (
        <Timer
            elapsed={elapsed}
            onStart={onStart}
            onStop={onStop}
            onWait={onWait}
            onReset={onReset}
        />
    );
}