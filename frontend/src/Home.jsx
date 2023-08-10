import React from 'react'

const Home = () => {
  return (
    <>
    <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
                <h4>Admin</h4>
            </div>
          
            <hr />
            <div>
                <h5>Total : {}</h5>
            </div>
          
        </div><div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
                <h4>Employee</h4>
            </div>
          
            <hr />
            <div>
                <h5>Total : {}</h5>
            </div>
          
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
                <h4>salary</h4>
            </div>
          
            <hr />
            <div>
                <h5>Total : {}</h5>
            </div>
          
        </div>

        
       
      
    </div>
    {/* List of admin */}
    <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
            <thead>
                <th>
                    <th>
                        Email
                    </th>
                    <th>Action</th>
                </th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    </>
  )
}

export default Home