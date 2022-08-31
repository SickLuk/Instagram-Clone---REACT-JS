import Image_Medium from "./Image_Medium";
import photo_test from '../images/test_photo.jpg';
import "../styles/color_base.scss";
import "../styles/home.scss";

const User_Suggestion = (image, username) => {
  return (
    <div className="profile_user" style={{ marginRight:'20px', marginTop:'10px' }}>
      <div className="profile-top">
        <Image_Medium image={image.image} />
        <div className="name_user">
          <p style={{fontWeight: 'bold' }}>{image.username}</p>
          <p style={{color:'#a5a5a5', fontWeight:'normal', fontSize:'12px'}}>Da poco su Instagram</p>
        </div>
      </div>
      <p style={{ cursor:'pointer' }}>Segui</p>
    </div>
  );
};

export default User_Suggestion;
