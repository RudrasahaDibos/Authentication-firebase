import { useContext, useRef } from "react";
import { AuthContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Fribase/Fribase.init";

const Login = () => {
  const { signlogin } = useContext(AuthContext)
  const useRefEmail = useRef()
  const Navigate =  useNavigate()
  const handlelogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
    //  signlogin
     signlogin(email,password)
      .then(result => {
        console.log(result.user)
        if(result.user.emailVerified){
          toast.success('Successfuly login ')
        }
        else{
          toast.error('plz varified your email')
        }
        Navigate('/')
        e.target.reset()
      
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handledorgottenpassword = () => {
    const email = useRefEmail.current.value
    if (!email) {
      console.log('please give me a  email address')
      return;

    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      console.log('Please give a vaild password')
      return;
    }

    //  send vaildation email 
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('please check your email')
      })
      .catch(error => {
        console.log(error)
      })

  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handlelogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" ref={useRefEmail} placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <Link onClick={handledorgottenpassword} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;