import Button from "./Button";
import Message from "./Message";

const Login = (email, password) =>{
  const loading = true;
  const error = true;
  return(
    <body>
    <div className="container">
      <div className="containerRegister">
        <div className="registerTop">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </div>
        <div className="registerMidTop">
            <p>o</p>
          </div>
        </div>
        <div className="formRegister">
          <form id="form_register">
            <input
              type="text"
              name=""
              id=""
              placeholder="Indirizzo e-mail"
              value={email}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              value={password}
            />
            <div className="nextStep_register">
              {loading ? <Button text="Caricamento.."/> : <Button text="Avanti" />}
              {error ? <Message text='Ricontrolla i dati' color='red' /> : null}
            </div>
          </form>
        </div>
      </div>
  </body>
  )
}

export default Login;