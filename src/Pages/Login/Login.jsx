import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  console.log(from);

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Google Login Successful:", result.user);

      // SweetAlert2 success notification
      Swal.fire({
        icon: "success",
        title: "Logged in with Google!",
        text: "You have successfully logged in.",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    } catch (error) {
      // SweetAlert2 error notification
      Swal.fire({
        icon: "error",
        title: "Google login failed",
        text: "Something went wrong. Please try again.",
      });
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      // User Login
      await signIn(email, password);

      // SweetAlert2 success notification
      Swal.fire({
        icon: "success",
        title: "Signin Successful",
        text: "You have successfully logged in.",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);

      // SweetAlert2 error notification
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row lg:gap-10 w-full max-w-4xl">
        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center mt-6 text-3xl font-bold text-primary">
            Login Now!
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Login</button>
            </div>
            {/* Google Login and Register */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-secondary w-full mt-4"
              >
                Login with Google
              </button>
              <p className="mt-2">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;