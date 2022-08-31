import style from '../styles/footer.scss';
const Footer = () =>{
  return(
    <div className="footer">
<div className="firstFooter" style={{ display:'flex', justifyContent:'space-around' }}>
<p>Meta </p>
<p>Informazioni</p>
<p>Blog</p>
<p>Lavora con noi</p>
<p>Assistenza</p>
<p>API</p>
<p>Privacy</p>
<p>Condizioni</p>
<p>Account più popolari</p>
<p>Hashtag</p>
<p>Luoghi</p>
<p>Instagram Lite</p>
<p>Caricamento dei contatti e non-utenti</p>
</div>
<div className="secondFooter">
<p>Danza</p>
<p>Cibo e bevande</p>
<p>Casa e giardino</p>
<p>Musica</p>
<p>Arti visive</p>
</div>
<div className="thirdFooter">
<p>Italiano</p>
<p>© 2022 Instagram from Meta</p>
</div>
</div>
  )
}

export default Footer;