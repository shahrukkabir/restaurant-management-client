import { Navigate, useLocation } from 'react-router-dom';
import Loading from "../Components/Loading/Loading";
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin ';

const AdminRoute = ({children}) => {

    const {user , loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;

