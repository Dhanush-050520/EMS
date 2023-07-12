import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const Empdetails = () => {

    const [data, setData] = useState([])
    useEffect(() => {

        axios.get('http://localhost:5001/posts').then(res => setData(res.data))
    }, [])
    return (
        <div>
            <h1>Emp details</h1>
            <div className='container'>
                <div className='mt-3'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Id</th>
                                <th>phone</th>
                                <th>Address</th>
                                <th>Department</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                              {
                                data.map((user,index)=>{
                                    return <tr key={index}>
                                          <td>{user.name}</td>
                                          <td>{user.id}</td>
                                          <td>{user.phone}</td>
                                          <td>{user.address}</td>
                                          <td>{user.department}</td>
                                          <td>  </td>
                                          <td> </td>
                                    </tr>

                                })
                              }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Empdetails

