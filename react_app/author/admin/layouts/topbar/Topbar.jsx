import axios from 'axios';
import React from 'react'
import { Outlet } from 'react-router'

function Topbar() {

  const logout = async (event) => {
    event.preventDefault();
    await axios.get("/logout")
      .then(res => {
        console.log("logout")
        window.location.href = "/";
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <header>

      <div className="topbar align-items-center">
        <div className="top ">
          <nav className="navbar navbar-expand gap-3">
            <div className="mobile-toggle-menu">
              <i className="bx bx-menu" />
            </div>
            <div className="search-bar flex-grow-1">
              <div className="position-relative search-bar-box">
                <input
                  type="text"
                  className="form-control search-control"
                  placeholder="Type to search..."
                />
                <span className="position-absolute top-50 search-show translate-middle-y">
                  <i className="bx bx-search" />
                </span>
                <span className="position-absolute top-50 search-close translate-middle-y">
                  <i className="bx bx-x" />
                </span>
              </div>
            </div>
            <div className="top-menu ms-auto">
              <ul className="navbar-nav align-items-center gap-1">
                <li
                  className="nav-item mobile-search-icon d-flex d-lg-none"
                  data-bs-toggle="modal"
                  data-bs-target="#SearchModal"
                >
                  <a className="nav-link" href="avascript:;">
                    <i className="bx bx-search" />
                  </a>
                </li>
               
                <li className="nav-item dropdown dropdown-app">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown"
                    href="javascript:;"
                  >
                    <i className="bx bx-grid-alt" />
                  </a>
                </li>
                <li className="nav-item dropdown dropdown-large">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="alert-count">7</span>
                    <i className="bx bx-bell" />
                  </a>
                </li>
                <li className="nav-item dropdown dropdown-large">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <span className="alert-count">8</span>
                    <i className="bx bx-shopping-bag" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="user-box dropdown px-3">
              <a
                className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/dashboard/images/avatars/avatar-2.png"
                  className="user-img"
                  alt="user avatar"
                />
                <div className="user-info">
                  <p className="user-name mb-0">Pauline Seitz</p>
                  <p className="designattion mb-0">Web Designer</p>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                  >
                    <i className="bx bx-user fs-5" />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                  >
                    <i className="bx bx-cog fs-5" />
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                  >
                    <i className="bx bx-home-circle fs-5" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                  >
                    <i className="bx bx-dollar-circle fs-5" />
                    <span>Earnings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                  >
                    <i className="bx bx-download fs-5" />
                    <span>Downloads</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider mb-0" />
                </li>
                <li onClick={logout}>
                  <a
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="bx bx-log-out-circle" />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='dashboard_wrapper m-3' style={{
          "overflow": "scroll",
          "width":'1090px',
          "float": 'left',
          "height":'520px',
          "position":"relative"
        }}>
          <Outlet></Outlet>
        </div>
      </div>

    </header >
  )
}

export default Topbar