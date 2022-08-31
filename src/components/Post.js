import "../styles/post.scss";
import photo_profile from "../images/test_photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faFaceSmile
} from "@fortawesome/free-solid-svg-icons";
import Image_Mini from "./Image_Mini";
import Image_Medium from "./Image_Medium";
import Text_User from "./Text_User";
import { useState } from "react";

const Post = (image, username, index) => {
  const [isLiked, setIsLiked] = useState(false);

  const likedPost = () =>{
    if(isLiked == false){
    setIsLiked(true);
    document.getElementsByClassName("heart")[image.index].style.color ="red";
  } else{
    setIsLiked(false);
    document.getElementsByClassName("heart")[image.index].style.color ="black";
  }
  }
  return (
    <div className="post_instagram">
      <div className="title_post">
        <div className="title_name_post">
          <Image_Medium image={image.image} />
          <div className="user_name_info">
          <p id="username">{image.username}</p>
          <p id="place">Reggio Emilia</p>
          </div>
        </div>
        <FontAwesomeIcon style={{cursor:'pointer'}}icon={faEllipsis}></FontAwesomeIcon>
      </div>

      <div className="photo_post">
        <img src={image.image} onDoubleClick={likedPost} alt=""></img>
      </div>

      <div className="post-bottom">
        <div className="iteration_post">
          <div className="left-iteration">
            <ul>
              <li>
                <FontAwesomeIcon icon={faHeart} className="heart" onClick={likedPost}></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </li>
            </ul>
          </div>
          <div className="right-iteration">
            <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
          </div>
        </div>

        <div className="likes_post">
          <Image_Mini image={image.image} margin={"0px"} />
          <p>
            Piace a <span>billy</span> e <span>altri</span>
          </p>
        </div>

        <div className="description_post">
          <Text_User
            username={image.username}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, ex incidunt velit totam nam odit?"
          />
        </div>

        <div className="showComments">
          <p>Mostra tutti e 20 i commenti</p>
        </div>

        <div className="comments_post">
          <Text_User
            username="elizabetholsen"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, ex incidunt velit totam nam odit?"
          />
          <Text_User
            username="elizabetholsen"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, ex incidunt velit totam nam odit?"
          />
          <Text_User
            username="elizabetholsen"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, ex incidunt velit totam nam odit?"
          />
        </div>

        <div className="date_post"><p>1 GIORNO FA</p></div>
        
        <div className="border-top"></div>
        <div className="comment_post">
        <p className="icon"><FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon></p>
        <input type="text" name="comment" id="comment" placeholder="Aggiungi un commento..."/>
        <p>Pubblica</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
