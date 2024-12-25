import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'
  console.log(from)
const { signIn, signInWithGoogle} =useContext(AuthContext);

    
      const handleGoogleLogin = async () => {      
        try {
            const result = await signInWithGoogle();
            console.log("Google Login Successful:", result.user);
            toast.success("Logged in with Google!");
           
        } catch (error) {
            toast.error("Google login failed");
            console.error(error);
        }
    };

    const handleLogin = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn({email, password})

        try {
          //User Login
          await signIn(email, password)
          toast.success('Signin Successful')
          navigate(from, { replace: true })
        } catch (err) {
          console.log(err)
          toast.error(err?.message)
        }

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"
                className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password"
                className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="text-center mt-4">
              <button type="button" onClick={handleGoogleLogin} 
              className="btn btn-secondary w-full mt-4">
                  Login with Google
             </button>
            <p>
              Don't have an account?{' '}
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