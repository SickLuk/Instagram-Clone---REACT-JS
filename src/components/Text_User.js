const Text_User = ({username, text}) =>{
  return(
    <p style={{ marginTop:'5px' }}><span style={{ cursor:'pointer' }}>{username}</span>{text}</p>
  )
}

export default Text_User;