import Navbar from "../components/Navbar";
import Post from "../components/Post";
import "../styles/home.scss";
import Image_Big from "../components/Image_Big";
import User_Suggestion from "../components/User_Suggestion";
import Stories from "../components/Stories";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  // Check if user is logged
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const photoUrl = localStorage.getItem('photoURL');
  const name_profile = localStorage.getItem('name_profile');
  let shouldRedirect = null;
    if (token == null){
      shouldRedirect = navigate('/index');
    }
    let value = [];
    let username_other = [];
    const value_number = 15;
  
    for (let i = 1; i <= value_number; i++) {
      const shortName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
        length: 1,
      });
      value.push("https://source.unsplash.com/random/200x200?sig=" + i);
      username_other.push(shortName);
    }
  return (
    <div className="containerHome">
      <Navbar />
      <div className="containerHomeCenter">
        <div className="containerHome-left">
          {/* Stories */}
          <div className="containerStories slider-wrapper">
            <Swiper
              // install Swiper modules
              spaceBetween={8}
              slidesPerView={6}
            >
              {value.map((story, index) => (
                <SwiperSlide>
                  <Stories isProfile={false} image={story} username={username_other[index]} />
                </SwiperSlide>
              ))}
              <div className="prev"></div>
              <div className="next"></div>
            </Swiper>
          </div>

          {/* Post */}
          {value.map((story, index) => (
            <Post key={index} image={story} username={username_other[index]} index={index}/>
          ))}
        </div>

        <div className="containerHome-right">
          {/* Profile, suggeriti */}
          <div className="profile_user">
            <div className="profile-top">
              <a href="/profile"><Image_Big image={photoUrl} /></a>
              <div className="name_user">
                <p>{username}</p>
                <p>{name_profile}</p>
              </div>
            </div>
            <a href="/profile">Passa a</a>
          </div>

          <div className="suggestion_user">
            <div className="suggestion">
              <p>Suggerimenti per te</p>
              <p>Mostra tutti</p>
            </div>
            <div className="suggestion_follow">
              {value.map((story, index) => (
                <User_Suggestion
                  image={story}
                  username={username_other[index]}
                />
              ))}
            </div>
          </div>

          <div className="footer_right">
            <div className="list-info">
              <ul>
                <li>Informazioni</li>
                <li>Assistenza</li>
                <li>Stampa</li>
                <li>API</li>
                <li>Lavora con noi</li>
                <li>Privacy</li>
                <li>Condizioni</li>
                <li>Luoghi</li>
                <li>Lingua</li>
              </ul>
            </div>
            <p>© 2022 Instagram from Meta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
