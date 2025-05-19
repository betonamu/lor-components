import { Navigate, useLocation } from "react-router";

import { AUTHENTICATE } from "@/constants";
import pageConfig from "./pageConfig";

const AccessControl = ({
  children,
  auth = AUTHENTICATE.BOTH,
  permissons = [],
}) => {
  const location = useLocation();
  const loading = false;
  const profile = {};

  if (auth === AUTHENTICATE.REQUIRED && !profile) {
    return (
      <Navigate
        to={pageConfig.login.path}
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
};

export default AccessControl;
