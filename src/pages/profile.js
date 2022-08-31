import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import "../styles/profile.scss";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Stories from "../components/Stories";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import "swiper/css";
import Profile_Post from "../components/Profile_Post";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  get_post_profileDB,
  get_post_profile,
} from "../store/actions/generatePost";
import { useEffect, useState } from "react";

const Profile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  let shouldRedirect = null;
  if (!token) {
    shouldRedirect = navigate("/index");
  }

  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const photoProfile = localStorage.getItem("photoURL");
  const name_profile = localStorage.getItem("name_profile");
  const description = localStorage.getItem('description');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_post_profileDB(userId));
  }, []);
  const post_user = useSelector(state => state.postReducer.postStorage);

  let value = [];
  let name_stories = [];
  const value_number = 5;
  for (let i = 1; i <= value_number; i++) {
    const shortName = uniqueNamesGenerator({
      dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
      length: 1,
    });
    value.push("https://source.unsplash.com/random/200x200?sig=" + i);
    name_stories.push(shortName);
  }

  return (
    <div className="containerProfile">
      <Navbar />
      <div className="profile">
        <div className="profile_top">
          <img src={photoProfile} id="photo_profile" alt="" />

          <div className="info_profile">
            <div className="infoTop">
              <p>{username}</p>
              <button><a href="/changeInfo" style={{ textDecoration:'none', color:'black' }}>Modifica profilo</a></button>
              <FontAwesomeIcon icon={faGear} size="2x" />
            </div>

            <div className="infoMid">
              <p>
                Post: <span>{post_user.length}</span>
              </p>
              <p>
                <span>819</span> follower
              </p>
              <p>
                <span>717</span> profili seguiti
              </p>
            </div>

            <div className="infoDescription">
              <p style={{ fontSize: "20px", marginBottom: "15px" }}>
                {name_profile}
              </p>
              <p>
               {description}
              </p>
            </div>
          </div>
        </div>

        <div className="stories slider-wrapper">
          <Swiper
            // install Swiper modules
            slidesPerView={5}
          >
            {value.map((story, index) => (
              <SwiperSlide>
                <Stories
                  isProfile={true}
                  image={story}
                  username={name_stories[index]}
                />
              </SwiperSlide>
            ))}
            <div className="prev"></div>
            <div className="next"></div>
          </Swiper>
        </div>

        <div className="profile_post">
          <div className="line-border"></div>

          <div className="post_selection">
            <ul>
              <li>POST</li>
              <li>ELEMENTI SALVATI</li>
              <li>POST IN CUI TI HANNO TAGGATO</li>
            </ul>
          </div>

          <div className="list-post">
          {post_user.slice(0)
  .reverse().map((post) =>{
            return <Profile_Post image={post.post} />
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
