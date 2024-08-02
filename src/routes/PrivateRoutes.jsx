import PropTypes from 'prop-types';
import { Navigate ,useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import Auth_Skeleton from '../Pages/Skeleton/Auth_Skeleton';




const PrivateRoute = ({children}) => {
    
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return (<Auth_Skeleton/>);
    }

    if (user) {

        return children;
    }
 
     
    return <>
    { 
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You need login first",
                showConfirmButton: false,
                timer: 1000
            })}
     <Navigate to="/login" state={{ from: location.pathname }} />; 
     
     </>

   
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PrivateRoute;