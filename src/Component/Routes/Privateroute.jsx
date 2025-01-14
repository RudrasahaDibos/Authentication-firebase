import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Navigate } from "react-router-dom";



const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    console.log(user)
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default Privateroute;