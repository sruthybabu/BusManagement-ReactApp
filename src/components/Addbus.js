import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Addbus = () => {
    var [route,setRoute]=useState("")
    var [busname,setBusname]=useState("")
    var [busregno,setBusregno]=useState("")
    var [ownername,setOwnername]=useState("")
    var [contactno,setContactNo]=useState("")
    const subData=()=>{
        const data={"route":route,"busName":busname,"busRegNo":busregno,"ownerName":ownername,"contactNo":contactno}
        console.log(data)
        axios.post("http://localhost:5005/api/busadd",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("Successfully added")
                }
                else
                {
                    alert("Failed to add")
                }

        })
    }
  return (
    <div>
        <Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(e)=>{setRoute(e.target.value)}} placeholder="Enter route" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Bus Name</label>
                    <input onChange={(e)=>{setBusname(e.target.value)}} placeholder="Enter bus name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Bus Register No</label>
                    <input onChange={(e)=>{setBusregno(e.target.value)}} placeholder="Enter bus register no" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Owner Name</label>
                    <input onChange={(e)=>{setOwnername(e.target.value)}} placeholder="Enter owner name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(e)=>{setContactNo(e.target.value)}} placeholder="Enter contact number" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Addbus