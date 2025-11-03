import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <>
      <section className="min-h-screen bg-[#E1D0B3] max-w-[1440px] mx-auto p-5">
        <div className="hero bg-[#E1D0B3] min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              
            </div>
            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input bg-[#fffbd1]" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input bg-[#fffbd1] "
                    placeholder="Password"
                  />
                  <button className="btn btn-neutral mt-4">Register</button>
                  <p>Do you have any account?  <span className="text-blue-800"><Link to={"/login"}>Log In</Link></span></p>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default Register;