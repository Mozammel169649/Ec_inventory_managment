import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';



function Register() {
const [responce, setResponce] = useState({});
const navigate = useNavigate();
    const signUpSubmit = (event) => {
        event.preventDefault();
        axios.post("/signUp_submit", new FormData(event.currentTarget))
            .then(res => {
                // console.log(res.data);
                setResponce(res.data);
                if (res.data?.success) {
                    return navigate("/");
                  }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <section>
                <div class="container">
                    <center class="pt-2">
                        <h2>User Register</h2>
                        <p style={{"color":"green"}}>{responce?.success}</p>
                    </center>
                    <form method="POST" onSubmit={signUpSubmit} class="w-50 mx-auto"  autocomplete="false" >
                        <div class="form-group mb-4">
                            <label for="name">User Name</label>
                            <input class="form-control" defaultValue="" type="text" name="userName" id="name" />
                            <div class="text-danger">
                              <p style={{"color":"red"}}>{responce?.userName}</p>
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <label for="email">Email</label>
                            <input class="form-control" defaultValue="" type="email" name="email" id="email" />
                            <div class="text-danger">
                            <p style={{"color":"red"}}>{responce?.email}</p>
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <label for="pass">Password</label>
                            <input class="form-control" defaultValue="" type="password" name="password" id="pass" />
                            <div class="text-danger">
                            <p style={{"color":"red"}}>{responce?.password}</p>
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <label for="Cpass">Confirm Password</label>
                            <input class="form-control" type="password" defaultValue="" name="password_confirmation" id="Cpass" />
                            <div class="text-danger">
                            <p style={{"color":"red"}}>{responce?.password_confirmation}</p>
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