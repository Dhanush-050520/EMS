import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login'
import Admin from './Admin';
import Dashboard from './Dashboard';
import Empdetails from './Empdetails';
import Addemp from './Addemp';
import Logout from './Logout';


const App = () => {
  return (
    <div>
    
      <BrowserRouter>
     
      <Routes>
         <Route path ='/' element={<Login/>}/>
         <Route path ='/admin' element={<Admin/>}>
             <Route path='dashboard' element={<Dashboard/>}/>
             <Route path='empdetails' element={<Empdetails/>}/>
             <Route path='addemp'element={<Addemp/>}/>
             <Route path='logout' element={<Logout/>}/>
         </Route>
        </Routes>
       

      </BrowserRouter>
    </div>
  )
}

export default App
