import React, { useState } from "react";
import { SiAirbrakedotio } from "react-icons/si";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <>
      {/*<!-- Sidebar -->*/}
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon">
            <SiAirbrakedotio />
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </Link>
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Interface</div>

        {/*<!-- Nav Item - Pages Collapse Menu -->
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#sub-admin"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-solid fa-user-secret"></i>
            <span>Sub Admin</span>
          </a>
          <div
            id="sub-admin"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/sub-admin-list">
                Sub-Admin List
              </Link>
              <Link className="collapse-item" to="/add-sub-admin">
                Add Sub-Admin
              </Link>
            </div>
          </div>
        </li>*/}
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </>
  );
};
export default Sidebar;
