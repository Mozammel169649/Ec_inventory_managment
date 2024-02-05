import React, { useState } from 'react'

function Register() {
    const [registerData, setRegisterData]=useState({ userName:"", email:"", password:"", conirm_password:""})

  return (
    <div>
        <section>
            <div class="container">
                <center class="pt-2"> 
                    <h2>User Register</h2>
                </center>
                <form method="POST" class="w-50 mx-auto" action="/signUp_submit" >
                <div class="form-group mb-4">
                    <label for="name">User Name</label>
                    <input class="form-control" onChange={(e)=>setRegisterData({...registerData, userName:e.target.value})} value="" type="text" name="userName" id="name"/>
                    <div class="text-danger">
                    
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label for="email">Email</label>
                    <input class="form-control" onChange={(e)=>setRegisterData({...registerData, email:e.target.value})}  value="" type="email" name="email" id="email"/>
                    <div class="text-danger">
                    
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label for="pass">Password</label>
                    <input class="form-control" onChange={(e)=>setRegisterData({...registerData, password:e.target.value})}  value="" type="password" name="password" id="pass"/>
                    <div class="text-danger">
                    
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label for="Cpass">Confirm Password</label>
                    <input class="form-control" onChange={(e)=>setRegisterData({...registerData, conirm_password:e.target.value})} type="password" value="" name="password_confirmation" id="Cpass"/>
                    <div class="text-danger">
                    
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
                </form> 
            </div>
        </section>
    </div>
  )
}

export default Register