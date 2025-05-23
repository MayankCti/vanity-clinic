import { pipGetAccessToken } from "../utils/pip";
import { pageRoutes } from "../routes/pageRoutes";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = pipGetAccessToken();
  return isAuth ? children : <Navigate to={pageRoutes.login} />;
};

export default PrivateRoute;
