import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Profile</span> </Link>
                       
                    </li>
                    <li>
                        <Link to="/employee" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Employee</span></Link>
                    </li>
                   
                  
                    <li>
                        <a href="#" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
               
            </div>
        </div>
        <div className="col p-0 m-0">
         <div className='p-2 d-flex justify-content-center shadow'>
            <h4>
                Employee Managment System
            </h4>
         </div>
         <Outlet/>
        </div>
    </div>
</div>
    </div>
  )
}

export default Dashboard