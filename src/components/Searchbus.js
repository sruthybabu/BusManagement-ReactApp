import axios from 'axios'
import React, { useState } from 'react'

const Searchbus = () => {
  const deleteData=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:5005/api/delete",data).then(
      (response)=>{
        if(response.data.status=="success")
        {
          alert("Successfully deleted")
        }
        else
        {
          alert("Failed to delete")
        }

    })

  }


  const [data,setData]=useState([{"busName":"","busRegNo":"","ownerName":"","contactNo":""}])
    var [route,setRoute]=useState("")
    const subData=()=>{
        const data={"route":route}
        console.log(data)
        axios.post("http://localhost:5005/api/search",data).then(
          (response)=>{
            console.log(response.data)
            setData(response.data)

        })
    }
  return (
    <div>
     <div className='container'>
         <div className='row'>
             <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                 <div className='row g-3'>
                     <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                       <label for="" className="form-label">Route</label>
                       <input onChange={(e)=>{setRoute(e.target.value)}} placeholder="Eneter route" type="text" className="form-control"/>
                     </div>
                     <div>
                     <button onClick={subData} className="btn btn-primary">SEARCH</button>
                     </div>
                 </div>
                 {data.map((value,key)=>{
                   return <div className='row g-3'>
                   <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                     <label for="" className='form-label'>Bus Name</label>
                     <input value={value.busName} type="text" className='form-control'/>
                   </div>
                   <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                     <label for="" className='form-label'>Bus Register No</label>
                     <input value={value.busRegNo} type="text" className='form-control'/>
                   </div>
                  <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <label for="" className='form-label'>Owner Name</label>
                    <input value={value.ownerName} type="text" className='form-control'/>
                  </div>
                  <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <label for="" className='form-label'>Contact Number</label>
                    <input value={value.contactNo} type="text" className='form-control'/>
                  </div>
                  <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <button onClick={()=>{deleteData()}} className='btn btn-danger'>DELETE</button>
                  </div>
                 </div>

                 })}

             </div>

         </div>

     </div>

    </div>
  )
}

export default Searchbus