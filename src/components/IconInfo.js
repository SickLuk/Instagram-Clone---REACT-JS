import confirm from '../images/confirm.png';
import error from '../images/error.png';
const iconInfo = (isRight) =>{
  return (
    <i className="icon">
      {isRight == true ? <img src={confirm}></img> : <img src={error}></img>}
    </i>
  )
}


export default iconInfo;