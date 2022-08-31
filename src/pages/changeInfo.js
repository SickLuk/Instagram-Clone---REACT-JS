import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/changeInfo.scss";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { updateChange } from "../store/actions/changeInfo";
import { auth } from "../firebase";
import TextUser from "../components/Text_User";

const ChangeInfo = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  let shouldRedirect = null;
  if (!token) {
    shouldRedirect = navigate("/index");
  }

  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const [preview, setPreview] = useState("");

  const userId = localStorage.getItem("userId");
  const description = localStorage.getItem("description");
  const username = localStorage.getItem("username");
  const name_profile = localStorage.getItem("name_profile");

  const [usernameNew, setUsernameNew] = useState("");
  const [nameProfileNew, setNameProfileNew] = useState("");
  const [descriptionNew, setDescriptionNew] = useState("");
  const [photoURLNew, setPhotoURLNew] = useState("");

  const loading = useSelector((state) => state.changeReducer.loading);
  const error = useSelector((state) => state.changeReducer.error);

  useEffect(() => {
    setUsernameNew(username);
    setNameProfileNew(name_profile);
    setDescriptionNew(description);
  }, []);

  // Per aggiornare immagine di cover
  useEffect(() => {
    if (photoURLNew) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photoURLNew);
    } else {
      setPreview(null);
    }
  }, [photoURLNew]);

  const coverPhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setPhotoURLNew(file);
    } else {
      setPhotoURLNew(null);
    }
    setPhotoURLNew(e.target.files[0]);
  };

  const handleUsername = (e) => {
    setUsernameNew(e.target.value);
  };

  const handleDescription = (e) => {
    setDescriptionNew(e.target.value);
  };

  const handleNameProfileNew = (e) => {
    setNameProfileNew(e.target.value);
  };

  const applyChange = async (e) => {
    e.preventDefault();
    await dispatch(
      updateChange(
        photoURLNew,
        usernameNew,
        descriptionNew,
        nameProfileNew,
        userId
      )
    );
    navigate("/home");
  };

  return (
    <div className="containerChangeInfo">
      <Navbar />
      <div className="changeInfo">
        <p>Cambia le tue informazioni</p>
        <div className="line-bar"></div>
        <div className="form_changeInfo">
          <form>
            <label id="username">Username</label>
            <input
              type="text"
              name="username"
              id=""
              value={usernameNew}
              onChange={handleUsername}
            />
            <label id="username">Name Profile</label>
            <input
              type="text"
              name="name_profile"
              id=""
              value={nameProfileNew}
              onChange={handleNameProfileNew}
            />
            <label id="photoProfile">Foto profilo</label>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              name="photoUrl"
              id=""
              ref={fileInputRef}
              onChange={coverPhoto}
            />
            <Button
              text="Immagine dal computer"
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click();
              }}
            />

            <div className="coverPhoto">
              <img src={preview} alt="" />
            </div>

            <label id="description">Descrizione</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={handleDescription}
              style={{ resize: "none" }}
              value={descriptionNew}
            ></textarea>

            {loading ? (
              <Button
                text="Caricamento..."
                widthButton="100%"
                onClick={applyChange}
              />
            ) : (
              <Button
                text="Salva le modifiche"
                widthButton="100%"
                onClick={applyChange}
              />
            )}

            {error ? (
              <TextUser
                style={{ color:'red' }}
                text={error}
                widthButton="100%"
                onClick={applyChange}
              />
            ) : (
              null
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeInfo;
