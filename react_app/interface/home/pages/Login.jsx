import React from 'react'
import { useState } from 'react'

function Login() {
  const [loginData, setloginData] = useState({ email:"", password:"" });

  // const onchangeUser =(e)=>{
  //   setloginData({...loginData, email: e.target.value })
  //   console.log(loginData)
  // }


  return (
    <div>
       <section className="mb-4">
         <div className="container col-6">
            <center className="pt-2">
                <h1>Login</h1>
            </center>
            <form method="POST" className=" mx-auto" action="/login-submit">
                <div className="form-group mb-4">
                <label for="email">Email</label>
                <input className="form-control" onChange={(e)=>setloginData({ ...loginData, user:e.target.value })} type="email" name="email" id="email"/>
                {/* <input className="form-control" onChange={onchangeUser} type="email" name="email" id="email"/> */}
                <div className="text-danger">
                
                </div>
                </div>
                <div className="form-group mb-4">
                <label for="pass">Password</label>
                <input className="form-control" onChange={(e)=>setloginData({ ...loginData, password:e.target.value })} type="password" name="password" id="pass"/>
                <div className="text-danger">
                
                </div>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
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