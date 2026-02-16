import PageHeader from '../components/PageHeader'
import { useMatches } from 'react-router-dom'
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return ({ ...state, count: state.count + 1 })
    }
    if (action.type === "DECREMENT") {
        return ({ ...state, count: state.count < 1 ? 0 : state.count - 1 })
    }
    return state;
}

const Counter = () => {
    const matches = useMatches()
    const match = matches[matches.length - 1]
    const [state, dispatch] = useReducer(reducer, { count: 3 })

    return (
        <div>
            <PageHeader heading={match.handle.heading} />
            <div className='flex gap-12 items-center justify-center h-60'>
                <div>
                    <button onClick={() => dispatch({ type: 'INCREMENT' })} className='bg-green-900 text-white h-12 w-12 text-2xl'>+</button>
                </div>
                <div>
                    <p className='text-4xl font-bold'>{state.count}</p>
                </div>
                <div>
                    <button onClick={() => dispatch({ type: 'DECREMENT' })} className='bg-red-900 text-white h-12 w-12 text-2xl'>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter