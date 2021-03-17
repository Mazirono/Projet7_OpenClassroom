import React from "react";
import { Redirect } from "react-router-dom";

const withAdmin = (Component) => {
  const AdminRoute = () => {
    const isAdmin = !!localStorage.getItem("Administrateur");
    if (isAdmin) {
      return <Component />;
    } else {
      return <Redirect to="/" />;
    }
  };

  return AdminRoute;
};

export default withAdmin;