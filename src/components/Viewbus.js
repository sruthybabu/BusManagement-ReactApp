import React from 'react'
import Navbar from './Navbar'

const Viewbus = () => {
    var viewbus=[
        {
            "route":"pathanamthitta to kozhencherry",
            "busName":"Star",
            "busRegNo":45678,
            "ownerName":"Amal",
            "contactNo":9976543210
        },
        {   "route":"kollam to trivandrum",
            "busName":"zion",
            "busRegNo":6789,
            "ownerName":"sharon",
            "contactNo":9876543210
        },
        {
            "route":"pathanamthitta to idukki",
            "busName":"blue hill",
            "busRegNo":87654,
            "ownerName":"Arun",
            "contactNo":8976543210
        }
    ]
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                         <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Bus Register No</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Contact Number</th>
      
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
    </tr>
    })}   
  </tbody>
</table>

                        </div>

                    </div>

                </div>

            </div>

        </div>




    </div>
  )
}

export default Viewbus