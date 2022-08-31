const Register = () =>{
  return(
    <body>
    <div className="container">
      <div className="containerRegister">
        <div className="registerTop">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
         <p>Iscriviti per vedere le foto e i video dei tuoi amici.</p>
        <Button text="Accedi con Facebook" image={facebook} />
        </div>
        <div className="registerMidTop">
         <hr></hr>
         <div className="center">
            <p>o</p>
          </div>
      <hr></hr>
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
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Nome e cognome"
              value={name}
              onChange={checkName}
            />
         <input
              type="text"
              name=""
              id=""
              placeholder="Nome utente"
              value={username}
              onChange={checkUsername}
            />
           
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              value={password}
              onChange={checkPassword}
            />

         <div className="info">
              <p>
                Le persone che usano i nostri servizi potrebbero aver caricato
                le tue informazioni di contatto su Instagram.{" "}
                <span>
                  <a link="/">Scopri di più</a>
                </span>
              </p>
              <p>
                Iscrivendoti, accetti le nostre Condizioni. Scopri in che modo
                raccogliamo, usiamo e condividiamo i tuoi dati nella nostra{" "}
                <span>Informativa sulla privacy</span> e in che modo usiamo
                cookie e tecnologie simili nella nostra{" "}
                <span>Normativa sui cookie.</span>
              </p>
            </div>

            <div className="nextStep_register">
              {loading ? <Button text="Caricamento.."/> : <Button text="Avanti" />}
              {error ? <Message text='Ricontrolla i dati' color='red' /> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
  )
}

export default Register;