import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function RoleProtectedRoute({ requiredRole, children }) {
  const userAuth = useSelector((state) => state.auth);
  let res = requiredRole.filter((role) => userAuth.userRole === role);
  if (res.length > 0) {
    return <ProtectedRoute>{children}</ProtectedRoute>;
  } else {
    window.alert(
      "Access Refus ! vous etes pas autoriser a acceder a cette page"
    );
    return <Navigate to="/login" replace />;
  }
}
