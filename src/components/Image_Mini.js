const Image_Mini = (image) =>{
  return(
    <img src={image.image} alt="" style={{ 
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      marginLeft: image.margin,
      cursor: "pointer",
     }}></img>
  )
}


export default Image_Mini;