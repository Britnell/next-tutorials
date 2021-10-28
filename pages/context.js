import React from "react"
import Page from "../lib/page"

const appContext = React.createContext()

function reducer(state,action){
    switch (action.type) {
        case 'status': {
          return {...state, status: action.data }
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`)
        }
      }   
}

function AppProvider({children}){

    const [state,dispatch] = React.useReducer(reducer,{status:'init'})

    const value = {state,dispatch}  // ******** <<<<<< 
    /*  might need to memoise this later
        OR separate contexts into state and dispatch
        https://kentcdodds.com/blog/how-to-optimize-your-context-value
    */
    return <appContext.Provider value={value}>{children}</appContext.Provider>
}
function useAppContext(){
    const context = React.useContext(appContext)
    if(context===undefined)
        throw new Error('useAppContext must be used withint a AppProvider')
    return context
}

function Button(){
    const {state} = useAppContext()
    return (<div>
        Context state : {state.status}
    </div>)
}
function Home({children}){
    return (<div>{children}</div>)
}
function Changer(){
    const {state,dispatch} = useAppContext()

    const change=(ev)=>dispatch({type:'status',data: ev.target.value }) 
    return (
        <div>change state <input onChange={change}  /></div>)
}
export default function Example(){

    return (<Page>
        <AppProvider>
            <Home >
                <Button />
            </Home>
            <Changer />
        </AppProvider>
    </Page>)
}

//--