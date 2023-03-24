import {
  Navigate
} from "react-router-dom";

const PrivateRoute = (props: { children: JSX.Element }) => {
  const authenticated = false;

  return !authenticated ? (
    <Navigate to="/login" />
  ) : (
    props.children
  )
};

export default PrivateRoute;