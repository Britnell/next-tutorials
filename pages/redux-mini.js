import React from "react"
import Page from "../lib/page"

import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch, Provider } from 'react-redux'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
    },
})
const { increment, decrement } = counterSlice.actions

const store = configureStore({
    reducer: { counter: counterSlice.reducer },
})

const Header = ({text})=><div>Header - state : {text} </div>

const Changer = ({addCall,text})=><div>
    <button onClick={addCall} >{text}</button>
</div>

const Reduxer = ()=>{
    const count = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <Header text={count} />
            <div>
                change count
                <Changer addCall={()=>dispatch(increment())} text={"+1"}  />
                <Changer addCall={()=>dispatch(decrement())} text={"-1"}  />
            </div>
        </div>
    )
}

export default function Home(){
    
    return (
        <Provider store={store}>
            <Page >
                <Reduxer />
            </Page>
        </Provider>
    )
}

//--