import React from "react";
import { Route } from "react-router-dom";

// Layout
import HomeLayout from "../Layout/Home.layout";

function HomeLayoutHOC({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          
            <Component {...props} />
          
        )}
      />
    </>
  );
}

export default HomeLayoutHOC;