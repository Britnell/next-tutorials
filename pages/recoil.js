import React from "react"
import Page from "../lib/page"

import { atom, selector, useRecoilState, RecoilRoot, useRecoilValue } from 'recoil'

const countState = atom({   key: 'count', default: 0,   })

const squareState = selector({
    key: 'square', 
    get: ({get})=>{
        const count = get(countState)
        return Math.pow(count,2)
    }
})
const Header = ({text})=><div>Header - state : {text} </div>

const Changer = ({addCall,text})=><div>
    <button onClick={addCall} >{text}</button>
</div>

const Reduxer = ()=>{
    const [count,setCount] = useRecoilState(countState)

    const increment = ()=>setCount(count+1)
    const decrement = ()=>setCount(count-1)

    return(
        <div>
            <Header text={count} />
            <div>
                change count
                <Changer addCall={()=>increment()} text={"+1"}  />
                <Changer addCall={()=>decrement()} text={"-1"}  />
            </div>
        </div>
    )
}

const Square = ()=>{
    const square = useRecoilValue(squareState)

    return (<div>Square is {square}</div>)
}

export default function Home(){
    
    return (
        <RecoilRoot>
            <Page >
                <Reduxer />
                <Square />
            </Page>
        </RecoilRoot>
    )
}

//--