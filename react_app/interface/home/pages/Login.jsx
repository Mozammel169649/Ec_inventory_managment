import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
  const [responce, setResponce] = useState({});
  const navigate = useNavigate();

  const cookieExists = Cookies.get();
  if(cookieExists?.atoken){
    return navigate("/");
  }
 
  const loginSubmit = async (event) => {
    event.preventDefault();
    axios.post("/login-submit", new FormData(event.currentTarget))
      .then(res => {
        setResponce(res.data);

        if (res.data?.success) {
          const { userRole } = res.data;
          if (userRole === "user") {
            //  return location.href = "/";
            return navigate("/");
          }
          if (userRole === "admin") {
            return location.href = "http://127.0.0.1:3000/dashboard/admin";
          }
          if (userRole === "manager") {
            return location.href = "http://127.0.0.1:3000/dashboard/manager";
          }
          if (userRole === "seller") {
            return location.href = "http://127.0.0.1:3000/dashboard/seller";
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="">
      <section >
        <div className="col-6 mx-auto">
          <center className="pt-2">
            <h1>Login</h1>
            <p style={{ "color": "green" }}>{responce?.success}</p>
          </center>
          <div cassName=''>
            <form method='POST' onSubmit={loginSubmit} className=" mx-auto" autocomplete="false">
              <div className="form-group mb-4">
                <label for="email">Email</label>
                <input className="form-control" type="email" name="email" id="email" />
                <div className="text-danger">
                  <p style={{ "color": "red" }}>{responce?.email}</p>
                </div>
              </div>
              <div className="form-group mb-4">
                <label for="pass">Password</label>
                <input className="form-control" type="password" name="password" id="password" />
                <div className="text-danger">
                  <p style={{ "color": "red" }}>{responce?.password}</p>
                </div>
              </div>
              <button type="submit" className="btn btn-success">Login</button>
            </form>
          </div>
          <center>
            <div className="d-grid gap-2 col-6 mx-auto">
              <a href="/#register" className="btn btn-primary">Sign_UP</a>
            </div>
          </center>
        </div>
      </section>
    </div>
  )
}

export default Login