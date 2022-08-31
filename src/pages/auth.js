import styles from "../styles/register.scss";
import facebook from "../images/facebook.png";
import app_store from "../images/app_store.png";
import google_play from "../images/google_play.png";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../store/actions/handleAuth";
import Message from "../components/Message";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { authCheck } from "../store/actions/handleAuth";
// import { fa-brands, facebook-f} from "@fortawesome/free-brands-svg-icons"

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameProfile, setNameProfile] = useState("");
  let [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // Get register
  const handleRegister = (e) => {
    e.preventDefault();
    if (!isSignUp) {
      dispatch(register(email, password, username, nameProfile));
      
      navigate("/");
      // console.log('sto facendo la registrazione');
    } else {dispatch(login(email, password));
    navigate("/home");}
    // console.log('sto facendo il login');
  };

  const token = useSelector((state) => state.authReducer.token);
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);

  let shouldRedirect = null;
  if (token) {
    shouldRedirect = navigate("/home");
  }

  const changeMode = () => {
    setIsSignUp(!isSignUp);
  };
  const checkEmail = (e) => {
    setEmail(e.target.value);
  };

  const checkUsername = (e) => {
    setUsername(e.target.value);
  };

  const checkNameProfile = (e) => {
    setNameProfile(e.target.value);
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <body>
      <div className="container">
        {shouldRedirect}
        <div className="containerRegister">
          <div className="registerTop">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
            {isSignUp ? null : (
              <p>Iscriviti per vedere le foto e i video dei tuoi amici.</p>
            )}
            {isSignUp ? null : (
              <Button text="Accedi con Facebook" image={facebook} />
            )}
          </div>
          <div className="registerMidTop">
            {isSignUp ? null : <hr></hr>}
            {isSignUp ? null : (
              <div className="center">
                <p>o</p>
              </div>
            )}
            {isSignUp ? null : <hr></hr>}
          </div>
          <div className="formRegister">
            <form id="form_register" onSubmit={handleRegister}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Indirizzo e-mail"
                value={email}
                onChange={checkEmail}
                required
              />
              {isSignUp ? null : (
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Username"
                  value={username}
                  onChange={checkUsername}
                  required
                />
              )}

              {isSignUp ? null : (
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nome e cognome"
                  value={nameProfile}
                  onChange={checkNameProfile}
                  required
                />
              )}

              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                value={password}
                onChange={checkPassword}
                required
              />

              {isSignUp ? null : (
                <div className="info">
                  <p>
                    Le persone che usano i nostri servizi potrebbero aver
                    caricato le tue informazioni di contatto su Instagram.{" "}
                    <span>
                      <a link="/">Scopri di più</a>
                    </span>
                  </p>
                  <p>
                    Iscrivendoti, accetti le nostre Condizioni. Scopri in che
                    modo raccogliamo, usiamo e condividiamo i tuoi dati nella
                    nostra <span>Informativa sulla privacy</span> e in che modo
                    usiamo cookie e tecnologie simili nella nostra{" "}
                    <span>Normativa sui cookie.</span>
                  </p>
                </div>
              )}

              <div className="nextStep_register">
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
            {isSignUp ? "Non hai un account?" : "Hai già un account?"}{" "}
            <a onClick={changeMode}>{isSignUp ? "Registrati" : "Accedi"}</a>
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
      <Footer />
    </body>
  );
};

export default Auth;
