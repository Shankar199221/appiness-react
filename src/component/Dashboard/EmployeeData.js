/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{ useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchEmployeeData from '../../action/fetchEmployeeData' 
import Table from 'react-bootstrap/Table'
import {useHistory} from 'react-router-dom'
import './index.css'
import Navbar from '../Navbar/Navbar'
import leftarrow from '../../images/left-arrow.svg'

function EmployeeData() {
    
    
    const history =useHistory();
    const empData =useSelector(state => state.empData)
    const dispatch = useDispatch()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     const getData = ()=> dispatch(fetchEmployeeData())


     useEffect(()=>{
         getData()
       
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
   
     const handleBack = ()=>{
        history.push('/');
        sessionStorage.removeItem("key")
        
        
     }

    return (
        <div className="dashboard">
             <div className="Navbar">
                <Navbar />
            </div>
            <div className="dashboard__back">
                <button onClick={handleBack}><img src={leftarrow} alt="no image"  />Back</button> </div>
           <div className="dashboard__table">
               <Table  className="table-striped  table-bordered table-dark table-dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>PhoneNum</th>
                        </tr>
                    </thead>
                    <tbody>
                    {empData.employeeData &&  empData.employeeData.map((item)=>{
                        return  <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phonenum}</td>
                                </tr>
                    }) 
                    }
                                
                    </tbody>
            </Table> 
            </div> 
        </div>
    )
}

export default EmployeeData
