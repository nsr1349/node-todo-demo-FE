import { Navigate } from "react-router-dom";

const PrivateRoute = ({logic , children, to}) => 
    logic ? children : <Navigate to={to}/>

export default PrivateRoute;
