import React, { useState } from 'react'

const Searchbus = () => {
    var [route,setRoute]=useState("")
    const subData=()=>{
        const data={"route":route}
        console.log(data)
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

             </div>

         </div>

     </div>

    </div>
  )
}

export default Searchbus