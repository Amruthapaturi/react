import React, { useReducer } from 'react'

const Counter = () => {

    const initialState ={
        count:0,
        dark:false
    }

    const reducer =(state , action)=>{
switch(action.type){
    case "Increment":
        return{
            ...state,
            count:state.count+1
        }

     case "Dark":
        return{
           ...state,
           dark:!state.dark
        }
       default:
         return state
}
    }

    const [state , dispatch]=useReducer(reducer , initialState)


  return (
    <div style={{backgroundColor:state.dark?"black":"white" , color:state.dark?"white":"black"}}>
      This is Counter <br />
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:"Increment"})}>Inc</button>
      <button onClick={()=>dispatch({type:"Dark"})}>Theme</button>
      
    </div>
  )
}

export default Counter
