import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewbus = () => {
  const deleteData=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:5005/api/search",data).then(
      (response)=>{
        if(response.data.status=="success")
        {
          alert("Successfullly deleted")
        }
        else
        {
          alert("Failed to delete")
        }
      
    })
  }

    var [viewbus,setViewbus]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:5005/api/busview").then(
      (response)=>{
        console.log(response.data)
        setViewbus(response.data)
        setLoadstatus(false)
      }
    )
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        {loadstatus ? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div> :  <table className="table table-primary table-striped">
  <thead className='table-success'>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Bus Register No</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {viewbus.map((value,key)=>{
      return <tr>
      <td>{value.route}</td>
      <td>{value.busName}</td>
      <td>{value.busRegNo}</td>
      <td>{value.ownerName}</td>
      <td>{value.contactNo}</td>
      <td><button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button></td>
    </tr>
    })}   
  </tbody>
</table>}

                        </div>

                    </div>

                </div>

            </div>

        </div>




    </div>
  )
}

export default Viewbus