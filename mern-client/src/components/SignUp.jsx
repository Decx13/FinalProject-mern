import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'



const SignUp = () => {

    const handleAdminSubmit = (event)  => {

        event.preventDefault();
        const form = event.target;
    
        const email = form.email.value;
        const password = form.password.value;
        
        
        const adminObject = {
          email,password
        }
    
        console.log(adminObject);
        // insert to database
    
        fetch("http://localhost:5000/upload-user",{
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(adminObject)
        }).then(res => res.json()).then(data => {
          // console.log(data)
          alert("Admin sign up sucess!")
          form.reset();
          navigate("/admin/dashboard")
        })

    }
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()

    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/" ;


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:5000/upload-user', {email, password})
    //     .then(result => console.log(result))
    //     .catch (err => console.log(err))
    //     alert("sign up succesfull!")
    //     navigate("/admin/dashboard")
    // }
    

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
            <div className='relative py-3 w-full sm:max-w-xl sm:mx-auto'>
                    <div>

                            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-lg">
                                <h1 className="text-center text-2xl font-bold text-amber-600 sm:text-3xl">Add New Admins Here</h1>

                                <p className="mx-auto mt-8 max-w-md text-center text-gray-500">
                                    Hey Welcome To Liyanage Furniture House<br/>
                                please sign up from here using your Email or Gmail and <span className='text-red-600 font-semibold '>DON'T FORGET TO </span>
                                create strong password to secure your account.
                                </p>

                                <form onSubmit={handleAdminSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                                <p className="text-center text-lg font-medium">Sign Up Your Admins</p>

                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter email"
                                        //onChange={(e) => setEmail(e.target.value)}
                                    />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>

                                    <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter password"
                                       // onChange={(e) => setPassword(e.target.value)}
                                    />
                                    </div>
                                </div>
{/* 
                                <p className="text-center text-sm text-gray-500 ">
                                    If you have an account already, please <Link to="/login-customer" className='text-blue-600 underline'>Login</Link>  Here
                                  
                                </p> */}

                                <button className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white">Sign Up/Add Admin</button>
                                </form>
                            </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default SignUp