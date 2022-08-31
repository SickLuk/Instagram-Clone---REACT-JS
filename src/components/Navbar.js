import styles from '../styles/navbar.scss';
import instagram from '../images/instagram.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { faHouse, faPlus, faCompass, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import testPhoto from '../images/test_photo.jpg'
import Image_Mini from './Image_Mini';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () =>{
  const photoURL = localStorage.getItem('photoURL');
  const dispatch = useDispatch();
  return(
    <div className="containerNavbar">
      <div className="navbar">
      <div className="image-instagram"><a href="/home"><img src={instagram} alt="" /></a></div>

      <div className="searchBar">
        <input type="text" name="" id="" placeholder='Cerca'/>
      </div>

      <div className="iconLink">
        <ul>
        <li><a href="/home" style={{ textDecoration:'none', color:'black' }}><FontAwesomeIcon icon={faHouse}/></a></li>
        <li><FontAwesomeIcon icon={faFacebookMessenger}/></li>
        <li><a href="/uploadPost" style={{ textDecoration:'none', color:'black' }}><FontAwesomeIcon icon={faPlus}/></a></li>
        <li><FontAwesomeIcon icon={faCompass}/></li>
        <li><FontAwesomeIcon icon={faHeart}/></li>
        <a href="/profile"><Image_Mini image={photoURL} /></a>
        <li><Link style={{ color: "black", textDecoration:'none' }} to="../logout">
            <p style={{ fontSize:'15px'}}>Logout</p>
          </Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar;