import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'

const SignUp = () => {
    
    //const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("error");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/" ;
 
    const handleSignup =(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Sign Up Succesfully!")
            navigate(from, {replace: true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError("errorMessage")
            // ..
          });
        
    }
  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
            <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
                    <div>

                            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-lg">
                                <h1 className="text-center text-2xl font-bold text-amber-600 sm:text-3xl">Sign Up Here</h1>

                                <p className="mx-auto mt-8 max-w-md text-center text-gray-500">
                                    Hey Welcome To Liyanage Furniture House<br/>
                                please sign up from here using your Email or Gmail and <span className='text-red-600 font-semibold '>DON'T FORGET TO </span>
                                create strong password to secure your account.
                                </p>

                                <form onSubmit={handleSignup} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                                <p className="text-center text-lg font-medium">Sign-Up your account</p>

                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter email"
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
                                    />
                                    </div>
                                </div>

                                <p className="text-center text-sm text-gray-500 ">
                                    If you have an account already, please <Link to="/login" className='text-blue-600 underline'>Login</Link>  Here
                                  
                                </p>

                                <button className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white">Sign Up</button>

                                </form>
                            </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default SignUp