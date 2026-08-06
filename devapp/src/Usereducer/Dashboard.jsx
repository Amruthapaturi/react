import React, { useContext, useReducer } from 'react'
import './Dashboard.css'
import Marks from './Marks'
import Ateendence from './Ateendence'
import Profile from './Profile'
import Projects from './Projects'
import { ThemeContext } from '../ContextAPI/ThemeContext'


const Dashboard = () => {
    const {theme , toggleTheme}=useContext(ThemeContext)

    const initialState ={
        activePage:"Profile"
    }

    const reducer =(state , action)=>{
      switch(action.type){
        case "Profile":
            return{
                ...state,
                activePage:"Profile"
            }
        case "Projects":
            return{
                ...state,
                activePage:"Projects"
            }
        case "Atten":
            return{
                ...state,
                activePage:"Atten"
            }
        case "Marks":
            return {
                ...state,
                activePage:"Marks"
            }
        default:
            return state
      }
    }

    const [state , dispatch] = useReducer(reducer , initialState)


  return (
    <div className='comp'  style={{backgroundColor:theme ==="light"?"black":"white" , color:theme==="light"?"white":"black"}}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className='side'>
        side bar <br />

<div style={{display:"block"}}>
    
        <button onClick={()=>dispatch({type:"Projects"})}>Projects</button> <br />
        <button onClick={()=>dispatch({type:"Marks"})}>Marks</button> <br />
        <button onClick={()=>dispatch({type:"Atten"})}>Attendence</button> <br />
        <button onClick={()=>dispatch({type:"Profile"})}>Profile</button><br />
</div>
      </div>
      <div className='main'>
        main bar <br />
        {state.activePage === "Profile" && <Profile/>}
        {state.activePage === "Atten" && <Ateendence/>}
        {state.activePage ==="Marks" && <Marks/>}
        {state.activePage === "Projects" && <Projects/>}

      </div>
    </div>
  )
}

export default Dashboard
