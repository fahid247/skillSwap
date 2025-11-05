import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset link sent to your email!");
        // Redirect to Gmail
      window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="min-h-screen bg-[#E1D0B3] flex justify-center items-center">
      <div className="card bg-white w-full max-w-sm shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input bg-[#fffbd1] w-full mb-3"
          />
          <button className="btn btn-neutral w-full">Reset Password</button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-700 underline w-full text-center hover:cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default ForgetPassword;
