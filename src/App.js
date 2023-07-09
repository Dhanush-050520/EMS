import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path ='dashboard' element={<Dashboard/>}/>

      
      </Routes>
      </BrowserRouter>
      <Login/>  
  
 

      
    </div>
  )
}

export default App
