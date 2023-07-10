import React from 'react'
import { Col, Container,Row,Card } from 'react-bootstrap'
import { useState } from 'react'

const Dashboard = () => {
    const [state,setState]=useState("12233")
    return (
        <div>
           <Container>
            <Row>
               <Col>
               <Card style={{ width: '15rem', height:"10rem",backgroundColor:"#7fd4b3"  }}>
               <Card.Body>
                      <h1>hello</h1>
                      <p>{state}</p>
               </Card.Body>
               </Card>
               </Col>

               <Col>
               <Card style={{ width: '15em' ,height:"10rem",backgroundColor:"#f79494"}}>
               <Card.Body>
                      <h1>hi</h1>
               </Card.Body>
               </Card>
               </Col>

               <Col>
               <Card style={{ width: '15rem',height:"10rem",backgroundColor:"#c17feb"}}>
               <Card.Body>
                      <h1>hello</h1>
               </Card.Body>
               </Card>
               </Col>

               <Col>
               <Card style={{ width: '15rem',height:"10rem",backgroundColor:"#17dae8"}}>
               <Card.Body>
                      <h1>hello</h1>
               </Card.Body>
               </Card>
               </Col>
               

               
            </Row>
           </Container>
        </div>
    )
}

export default Dashboard
