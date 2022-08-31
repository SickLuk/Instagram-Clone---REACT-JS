import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebase } from "../../Axios";
// Create the actions
const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const LOGOUT = "LOGOUT";

export const register = (email, password, username, name_profile) => {
  return async (dispatch) => {
    dispatch(authStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: "",
        });
        // Set description
        const description = "Inserisci la tua descrizione per il profilo";
        dispatch(user_profile(res.user.uid, name_profile, description));
        dispatch(authSuccess());
      })
      .catch((err) => console.log(err));
  };
};


export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(authStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        localStorage.setItem("token", res.user.accessToken);
        localStorage.setItem("userId", res.user.uid);
        localStorage.setItem("username", res.user.displayName);
        localStorage.setItem("photoURL", res.user.photoURL);
        // Get description and name_profile
        const name_profile = await firebase.get(`${res.user.uid}/info.json`);
        const user_data = [];
        for (let key in name_profile.data) {
          //Aggiungi oggetto contente titolo e id nell'array da iterare
          user_data.push({
            name_profile: name_profile.data[key].name_profile,
            description: name_profile.data[key].description,
          });
        }
      localStorage.setItem("name_profile", user_data[0].name_profile);
      localStorage.setItem("description", user_data[0].description);
      dispatch(authSuccess(res.user));
      })
      .catch((err) => authFail(err));
  };
};

// Pubblic name of user
export const user_profile = (userId, name_profile, description) => {
  return async () => {
    try {
      const name_user = await firebase.post(`${userId}/info.json`, {
        name_profile,
        description
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (userData) => {
  return {
    type: AUTH_SUCCESS,
    accessToken: userData.accessToken,
    uid: userData.uid,
    displayName: userData.displayName,
    photoURL: userData.photoURL,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error,
  };
};

export const authCheck = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    const photoURL = localStorage.getItem("photoURL");

    // console.log("token: ", token, " username: ", username, " photoURL ", photoURL, " userId ", userId);
    dispatch(
      authSuccess({
        accessToken: token,
        uid: userId,
        displayName: username,
        photoURL: photoURL,
      })
    );
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  localStorage.removeItem("photoURL");
  localStorage.removeItem("name_profile");
  return {
    type: LOGOUT,
  };
};

export { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT };
