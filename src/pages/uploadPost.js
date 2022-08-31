import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "../styles/uploadPost.scss";
import { updatePost } from "../store/actions/generatePost";

const UploadPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const fileInputRef = useRef();
  const [preview, setPreview] = useState("");

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const loading = useSelector((state) => state.postReducer.loading);
  const error = useSelector((state) => state.postReducer.error);
  // Get all the images from Storage

  const uploadImage = () => {
    dispatch(updatePost(image, userId));
    navigate("/home")
  };
  
  let shouldRedirect = null;
  if (!token) {
    shouldRedirect = navigate("/index");
  }

  // Per aggiornare immagine di cover
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const coverPhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };


  return (
    <div className="uploadPost">
      <Navbar />
      <div className="containerUpload">
        <h3 id="createPostText">Crea un nuovo post</h3>
        <div className="uploadPhoto">
          <div className="selectPhoto">
            <label for="fileImmagine"> Seleziona immagine: </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              accept="image/*"
              onChange={coverPhoto}
              required
            ></input>
            <Button
              text="Immagine dal computer"
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click();
              }}
            />
          </div>
          
          <div className="coverPhoto">
            <img src={preview} alt="" />
          </div>
        </div>

        <div className="formPostData">
         {loading ? <Button text="Caricamento..." onClick={uploadImage} widthButton="100%" /> : <Button text="Pubblica il post!" onClick={uploadImage} widthButton="100%" />}

         {error ? <Button text={error} /> : null}
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
