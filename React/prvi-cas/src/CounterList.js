import { useState } from "react";
import CounterListItem from "./CounterListItem";

const CounterList = () => {
    const [counters, setCounters] = useState([
        {id: 1, value: 0},
        {id: 2, value: 5},
        {id: 3, value: 9},
    ]);

// const items = ['apple', 'banana', 'orange'];
// const renderedItems = [];

// items.forEach(item => {
//     renderedItems.push(<li>{item}</li>);
// });


    return (
        <div>
            <h1>Counters List:</h1>
            <ul>
                {/* Array.map() - vraca transformisane elemente */}
                {/* Array.forEach - simply iterates / ide kroz niz bez da vraca bilo sta */}
                {/* renderedItems */}
                {counters.map(counter => 
                    <div key={counter.id}>{counter.id}: <CounterListItem counter={counter}/></div>
                )}
            </ul>
        </div>
    )
}

export default CounterList;