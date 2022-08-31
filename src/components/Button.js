import styles from '../styles/style.scss';
const Button = ({text, image, onClick, widthButton}) =>{
  return (
    <button className="buttonBlue" style={{ marginTop: '15px', width:widthButton}} onClick={onClick}>
    <span>
      {image ? <img src={image} alt="" /> : null}
    </span>
    {text}
    </button>
  )
}

export default Button;