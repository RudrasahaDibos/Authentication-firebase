import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import {  useNavigate } from "react-router-dom";

const Register = () => {
  const { CreateRegister, googlesign } = useContext(AuthContext)
  const [regisetererror ,setregistererror] = useState('')
    const Navigate =  useNavigate()
  const handleRegister = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const confrimpassword = e.target.Cpassword.value
    const name = e.target.name.value
    console.log(email, password, confrimpassword, name)

    // if (password !== confrimpassword) {
    //   toast.error(<p className="text-red-600">password and Confirmpassword are not equal</p>)
    //   return;
    // }
    // if (!/@gmail\.com/.test(email)) {
    //   toast.error(<p className="text-red-600">Please end of write @gamil.com</p>)
    //   return;
    // }
    // if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
    //   toast.error(<p className="text-red-600">Please Give  Vaild Password </p>)
    //   return ;
    // }






    // CreateUser
    CreateRegister(email, password)
      .then(result => {
        console.log(result.user)
        
          toast.success(<p className="text-green-600">Successfully Register you Account</p>)
      
      

       
        e.target.reset()
        Navigate('/')
        //  upadte user 
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
          .then(() => {
            console.log('Update Profile')
          })
          .catch(error => {
            console.log(error)
            setregistererror(error.message)
          })
        //  sendemailVarifation 
        sendEmailVerification(result.user)
          .then(() => {
            toast.success('Please check you gmail . we Send message Please Response Other wise No Registetion')
          })



      })
      .catch(error => {
        console.log(error)
        setregistererror(error.message)
      })



  }

  // googleSign in 
  const handlegooglesign = () => {

    googlesign()
      .then(result => {
        console.log(result.user)
        Navigate('/')
      })
      .catch(error => {
        console.log(error)
        setregistererror(error.message)
      })
  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Enter Your Name " className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confrim Password</span>
              </label>
              <input type="password" name="Cpassword" placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
    
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {/* social meadia start here */}
          <div className="flex justify-center space-x-4">
            <button onClick={handlegooglesign} aria-label="Log in with Google" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
              </svg>
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>

          {/* social meadia end here */}

          {
          regisetererror && <p>{toast.error(regisetererror)}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Register;