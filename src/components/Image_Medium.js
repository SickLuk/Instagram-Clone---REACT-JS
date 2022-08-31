const Image_Medium = (image) =>{
  return(
    <img src={image.image} alt="" style={{ 
      height: "35px",
      width: "35px",
      borderRadius: "50%",
      marginLeft: image.margin,
      cursor: "pointer",
     }}></img>
  )
}


export default Image_Medium;