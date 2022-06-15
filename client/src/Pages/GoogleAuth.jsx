import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { googleAuth } from "../Redux/Reducer/Auth/auth.action";

function GoogleAuth() {
  const { token }  = useParams();
  const {id} = useParams();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(googleAuth(token,id)).then(() => navigate("/"));
    }
  }, [token]);

  return <div>Loading, Please wait...</div>;
}

export default GoogleAuth;