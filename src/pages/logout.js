import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../store/actions/handleAuth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
    return navigate("/");
  }, []);
};

export default Logout;
