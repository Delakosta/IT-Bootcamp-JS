import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'incrament':
            return state + 1;
        case 'decrament':
            return state - 1;
        case 'reset':
            return 0;

        default:
            break;
    }
};

const CounterReducer = () => {
    // useReducer vraca trenutnu vrednost countera
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {count}
            <button onClick={() => dispatch('decrament')}>decrament</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <button onClick={() => dispatch('incrament')}>incrament</button>
        </>
    )
}

export default CounterReducer;