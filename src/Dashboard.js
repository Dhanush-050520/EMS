import React from 'react'
import { Col, Container,Row,Card } from 'react-bootstrap'
import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {CategoryScale,LinearScale,PointElement,LineElement,Title,Filler} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
       responsive: true,
       plugins: {
         legend: {
           position: 'top' ,
         },
         title: {
           display: true,
           text: 'Chart.js Line Chart',
         },
       },
     };
     
     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
     
     export const data1 = {
       labels,
       datasets: [
         {
           fill: true,
           label: 'Dataset 2',
           data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
           borderColor: 'rgb(53, 162, 235)',
           backgroundColor: 'rgba(53, 162, 235, 0.5)',
         },
       ],
     };

export const data = {
       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       datasets: [
         {
           label: '# of Votes',
           data: [12, 19, 3, 5, 2, 3],
           backgroundColor: [
             'red',
             'blue',
             'yellow',
             'green',
             'purple',
             'orange',
           ],
           borderColor: [
             'rgba(255, 99, 132, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)',
           ],
           borderWidth: 1,
         },
       ],
     };
     
const Dashboard = () => {
    const [state,setState]=useState("12233")
    return (
        <div>
           <Container>
            <Row style={{"margin-top":-70,"margin-left":-30}}>
               <Col >
               <Card style={{ width: '10rem', height:"7rem",backgroundColor:"#7fd4b3"  }}>
               <Card.Body>
                      <h1>hello</h1>
                      <p>{state}</p>
               </Card.Body>
               </Card>
               </Col>

               <Col>
               <Card style={{ width: '10rem' ,height:"7rem",backgroundColor:"#f79494"}}>
               <Card.Body>
                      <h1>hi</h1>
               </Card.Body>
               </Card>
               </Col>

               <Col>
               <Card style={{ width: '10rem',height:"7rem",backgroundColor:"#c17feb"}}>
               <Card.Body>
                      <h1>hello</h1>
               </Card.Body>
               </Card>
               </Col>

               <Col>
               <Card style={{ width: '10rem',height:"7rem",backgroundColor:"#17dae8"}}>
               <Card.Body>
                      <h1>hello</h1>
               </Card.Body>
               </Card>
               </Col>
               

               
            </Row>
            <Row>
              <Card style={{'height':250,'width':700,'margin-top':10,'margin-left':0}}>
                     <Card.Body>
                     <Line options={options} data={data1} />
                     </Card.Body>
              
              </Card>
            
            </Row>
            <Row>
            <Card style={{'height':250,'width':300,'margin-top':0,'margin-bottom':-50,'margin-left':0  }}>
              <Card.Body>
              <Pie data={data} />;
              </Card.Body>
            
            </Card>
            </Row>
           </Container>
        </div>
    )
}

export default Dashboard
