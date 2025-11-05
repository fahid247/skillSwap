import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase.init";
import toast from "react-hot-toast";
import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("Google Login Successful:", user);
        setUser(user);

        toast.success("Logged in with Google!", {
          style: {
            backgroundColor: "lightgreen",
          },
        });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
        toast.error(`${error.message}`, {
          style: {
            backgroundColor: "black",
            color: "bisque",
          },
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    setPasswordError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("LogIn Successful", {
          style: {
            backgroundColor: "lightgreen",
          },
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.message}`, {
          style: {
            backgroundColor: "black",
            color: "bisque",
          },
        });
      });
  };
  return (
    <>
      <section className="min-h-screen bg-[#E1D0B3] max-w-[1440px] mx-auto p-5">
        <div className="hero bg-[#E1D0B3] min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input bg-[#fffbd1]"
                    placeholder="Email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input bg-[#fffbd1] "
                    placeholder="Password"
                  />
                  <div>
                    <Link
                      to="/forgetPassword"
                      state={{ email: emailInput }} 
                      className="link link-hover text-blue-800"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  {passwordError && (
                    <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                  )}
                  <button className="btn btn-neutral mt-4">Login</button>
                  <p className="flex">
                    Don't have any account?{" "}
                    <span>
                      <Link
                        state={location.state}
                        className="text-blue-900"
                        to="/register"
                      >
                        SignUp Now!
                      </Link>
                    </span>
                  </p>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black border-[#e5e5e5] mt-2"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
