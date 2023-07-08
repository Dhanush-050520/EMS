import React from 'react'
import {Button,Form,Card} from 'react-bootstrap'
import './App.css'
import { FaUserTie } from 'react-icons/fa';





const Login=()=>{
    return(
       <div>
         
          
        <center>
       <Card style={{width:"20rem" ,marginTop:"10rem",padding:"20px",backgroundColor:"skyblue",borderRadius:"20px"}}>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <h1>Login</h1>
    <FaUserTie size="3rem"/>
    <h5 style={{marginTop:"3px"}}>Sign in to your account</h5><br/>
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Username" style={{borderRadius:"7px"}}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
   
    <Form.Control type="password" placeholder="Password" style={{borderRadius:"7px"}}/>
  </Form.Group><br/>
  <Button variant="primary" type="submit" className='logdesign'>
    Login
  </Button>
</Form>
</Card>
</center>
</div> 

       
    )
}
export default Login;
