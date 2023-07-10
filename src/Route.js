import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const Route = () => {
    return (
        <div>
            
            <BrowserRouter>
            <Nav>
                <Nav.Item>
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                </Nav.Item>

            </Nav>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
            
            </Routes>
            
            </BrowserRouter>
            
        </div>
    )
}

export default Route
