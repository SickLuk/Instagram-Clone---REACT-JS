import "../styles/profile_post.scss";
const Profile_Post = ({image}) =>{
  console.log('dentro profile post', image);
  return(
    <div className="post">
      <img src={image} alt="" />
    </div>
  )
}

export default Profile_Post;