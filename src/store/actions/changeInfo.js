import { firebase } from "../../Axios";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";

const CHANGE_START = "CHANGE_START";
const CHANGE_SUCCESS = "CHANGE_SUCCESS";
const CHANGE_FAIL = "CHANGE_FAIL";

export const updateChange = (photoURL, username, description, name_profile, userId) => {
  return async (dispatch) => {
    dispatch(changeStart());
    try{
    const imagePost = await ref(storage, `images/${userId}/photoURL`);
    const upload = await uploadBytes(imagePost, photoURL).then(() => {
    });
    const imageDB = await getDownloadURL(ref(storage, `images/${userId}/photoURL`));
      const post = await firebase.put(`${userId}/info/photoURL.json`, {
      photoURL: imageDB,
    });
    updateProfile(auth.currentUser, {
      photoURL: imageDB,
      displayName: username
    });

    const description_new = await firebase.put(`${userId}/info/description.json`, {
      description
    });

    const name_profile_new = await firebase.put(`${userId}/info/name_profile.json`, {
      name_profile
    });
    localStorage.setItem('username', username);
    localStorage.setItem('description', description);
    localStorage.setItem('photoURL', imageDB);
    localStorage.setItem('name_profile', name_profile);

    dispatch(changeSuccess());
  }catch (err){
    dispatch(changeFail(err));
  };
}
};


export const changeStart = () => {
  return {
    type: CHANGE_START,
  };
};

export const changeSuccess = (postStorage) => {
  return {
    type: CHANGE_SUCCESS,
    postStorage,
  };
};

export const changeFail = (error) => {
  return {
    type: CHANGE_FAIL,
    error,
  };
};

export {CHANGE_FAIL, CHANGE_SUCCESS, CHANGE_START}
