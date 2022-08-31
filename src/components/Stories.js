import '../styles/stories.scss';
const Stories = (image) =>{
 return (
    <div className='stories_ig'>
      <div className='border-stories' style={image.isProfile ? {background:"#ececec"} : { 
        background:"radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)"}}>
      <img src={image.image} alt="" style={image.isProfile ? {textAlign: "left"} : {textAlign: "center"}}/>
      </div>
      <p>{image.username}</p>
    </div>
  )
}

export default Stories;