import React from 'react';

export const Timer = (props) => (
    <div>
        <div>Time: {props.elapsed}</div>
        <div>
            <button onClick={() => props.onStart(props.elapsed)}>Start</button>
            <button onClick={() => props.onStop()}>Stop</button>
            <button onDoubleClick={() => props.onWait()}>Wait</button>
            <button onClick={() => props.onReset()}>Reset</button>
        </div>
    </div>
);
