import { useState, useEffect } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    // renderuje se pri svakoj promeni odnosno renderovanju (mount, update, unmount)
    //useEffect(() => {
 //       console.log("render");
  //  });

    // renderuje se samo jednom kada se komponenta prvi put upisala u DOM
    useEffect(() => {
        console.log("componenet did mount");
    },[]);

    // renderuje se samo jednom kada se komponenta update-uje
    useEffect(() => {
        console.log("componenet did update");
    },[counter]);

    // kada se komponeneta izbrise iz DOM-a
    // for e.g. canceling network request, ciscenje nekog state-a
    useEffect(() => {
        return () => {
            console.log("componenet did unmount");
        };
    },[]);

    return (
    <div>
        <button onClick={() => setCounter (counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter (counter + 1)}>+</button>
    </div>
    );
};
export default Counter;