import React from 'react'
import App1 from './App1'
import Cart from './Cart'
import UseState from './Hooks/UseState'
import UseState1 from './Hooks/UseState1'
import Form from './Hooks/Form'
import Search from './Hooks/Search'
import UseEffect from './Hooks/UseEffect'
import Clock from './Hooks/Clock'
import UseRef from './Hooks/UseRef'
import Prevcount from './Hooks/Prevcount'
import TimerRef from './Hooks/TimerRef'
import Home from './Home'
import Video from './Hooks/Video'
import UseMemo from './Hooks/UseMemo'
import ParentCallback from './Hooks/ParentCallback'
import UseLayoutEffect from './Hooks/UseLayoutEffect'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import UseSearch from './Hooks/UseSearch'

const App = () => {
  return (
    <div>
      {/* <App1/> */}
      {/* <Cart/> */}
      {/* <UseState1/> */}
      {/* <Form/> */}
      {/* <Search/> */}
      {/* <UseEffect/> */}
      {/* <Clock/> */}
      {/* <UseRef/> */}
      {/* <Prevcount/> */}

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/timeref' element={<TimerRef/>} />
        <Route path='/prev/count' element={<Prevcount/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/usememo' element={<UseMemo/>}/>
        <Route path='/callback' element={<ParentCallback/>} />
        <Route path='/state' element={<UseState/>}/>
        <Route path='/layout' element={<UseLayoutEffect/>}/>
        <Route path='/search' element={<UseSearch/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
