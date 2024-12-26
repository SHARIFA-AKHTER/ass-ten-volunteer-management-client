import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL =
      form.photoURL.value ;
    const password = form.password.value;

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must include at least 6 characters, one uppercase letter, and one lowercase letter."
      );
      toast.error("Invalid password format!");
      return;
    }

    try {
      const result = await createUser(email, password);
      const user = result.user;

      // Update user profile
      try {
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: `Welcome, ${name}!`,
        });
        form.reset();
      } catch (updateError) {
        Swal.fire({
          icon: "warning",
          title: "Profile Update Failed",
          text: "User registered, but profile update failed.",
        });
      }

      setError(""); 
    } catch (registerError) {
      setError(registerError.message);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: registerError.message,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4 sm:px-8 md:px-12">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-base-100 shadow-lg rounded-lg">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mt-6">
          Register Now!
        </h1>
        <form
          onSubmit={handleRegister}
          className="card-body space-y-4 px-6 lg:px-8"
        >
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Profile Photo URL"
              className="input input-bordered"
            />
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={`input input-bordered ${
                error ? "border-red-500" : ""
              }`}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>
        </form>

        {/* Redirect to Login */}
        <div className="text-center mb-6">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;