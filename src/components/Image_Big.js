const Image_Big = (image) =>{
  return(
    <img src={image.image} alt="" style={{ 
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      marginLeft: image.margin,
      cursor: "pointer",
     }}></img>
  )
}


export default Image_Big