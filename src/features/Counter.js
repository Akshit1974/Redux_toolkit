import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addAmount, selectCount, decreaseAmount } from "./CounterSlice";
import "./counter.css";
import { AiOutlineMinus, AiOutlinePlus, IconName } from "react-icons/ai";

const Counter = () => {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    useEffect(() => {
        document.title = count;
    },[count]);
    return (
        <Fragment>
            <div className="content">
                <h1>Counter</h1>
                <span className='value'>{count}</span>
                <div className="btn-wrap">
                    <button className='btn' onClick={() => dispatch(decrement())}><AiOutlineMinus /></button>
                    <button className='btn' onClick={() => dispatch(increment())}><AiOutlinePlus /></button>
                </div>
                <div className="inputField">
                    <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                    <button className='btn' onClick={() => dispatch(addAmount(Number(incrementAmount) || 0))}> Add Amount</button>
                    <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                    <button className='btn' onClick={() => dispatch(decreaseAmount(Number(incrementAmount) || 0))}>decreaseAmount</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Counter
