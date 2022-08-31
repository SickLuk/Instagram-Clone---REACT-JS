import styles from "../styles/register.scss";
import app_store from "../images/app_store.png";
import google_play from "../images/google_play.png";
import index_photo from "../images/insta_index.png";
import instagram from "../images/instagram.png";
import Button from "../components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/handleAuth";
import Message from "../components/Message";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { authCheck } from "../store/actions/handleAuth";
import { useEffect } from "react";
const Index = () => {
  const dispatch = useDispatch();
  // Check if user is logged
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let shouldRedirect = null;

  useEffect(() =>{
    dispatch(authCheck());
    if (token) {
      shouldRedirect = navigate("/home");
    }
  })  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Get signup
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);

  const checkEmail = (e) => {
    setEmail(e.target.value);
  };
  const checkPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <body>
      <div className="container container-index">
      {shouldRedirect}
        <div className="image-container">
          <img src={index_photo} alt="" />
        </div>
        <div className="containerRight">
          <div className="containerRegister">
            <div className="loginTop">
              <img src={instagram} alt="" />
            </div>
            <div className="formRegister">
              <form id="form_register" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Indirizzo e-mail"
                  value={email}
                  onChange={checkEmail}
                  required
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  value={password}
                  onChange={checkPassword}
                  required
                />
                <div className="nextStep_login">
                  {loading ? (
                    <Button text="Caricamento.." />
                  ) : (
                    <Button text="Avanti" />
                  )}
                  {error ? (
                    <Message text="Ricontrolla i dati" color="red" />
                  ) : null}
                </div>
              </form>
            </div>
          </div>
          <div className="containerLogin">
            <p>
              Non hai un account?<a href="/auth"> Iscriviti</a>
            </p>
          </div>

          <div className="downloadApp">
            <p>Scarica l'applicazione.</p>
            <div className="app">
              <img src={google_play} alt="" />
              <img src={app_store} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Index;
