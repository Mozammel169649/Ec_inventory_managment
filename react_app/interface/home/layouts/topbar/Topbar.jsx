import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from "react-router-dom";

function Topbar() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(async () => {
    axios.get("/homeNav")
      .then(res => {
        const { role } = res.data?.user;
        setRole(role);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const logout = async (event) => {
    event.preventDefault();
    await axios.get("/logout")
      .then(res => {
        // navigate("/",{replace:true})
        window.location.href="/";
      })
      .catch(err => {
        console.log(err)
      })
  }

  function getroleDashboard(role) {
    if (role == "seller") {
      return <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/dashboard/seller">Dashboard_S</a>
      </li>
    }
    if (role == "admin") {
      return <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/dashboard/admin">Dashboard_A</a>
      </li>
    }
    if (role == "manager") {
      return <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/dashboard/manager">Dashboard_M</a>
      </li>
    }
  }

  console.log("roole data ", role)
  return (
    <header>
      <section id="navid">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {
                  getroleDashboard(role)
                }
                {role ?
                  <li className="nav-item">
                    <a className="nav-link active" onClick={logout} aria-current="page" href="/logout">LogOut</a>
                  </li> :
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#login">Login</a>
                  </li>}

              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <div className='dashboard_wrapper m-3'>
          <Outlet></Outlet>
        </div>
      </section>
    </header>

  )
}

export default Topbar