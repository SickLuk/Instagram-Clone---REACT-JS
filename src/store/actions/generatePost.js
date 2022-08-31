import { firebase } from "../../Axios";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const POST_START = "POST_START";
const POST_SUCCESS = "POST_SUCCESS";
const POST_FAIL = "POST_FAIL";
const POST_SUCCESS_DB = "POST_SUCCESS_DB";

export const get_post_profileDB = (userId) => {
  return async (dispatch) => {
    const photo_user = await firebase.get(`${userId}/post.json`);
    const post_user = [];
    for (let key in photo_user.data) {
      //Aggiungi oggetto contente titolo e id nell'array da iterare
      post_user.push({
        post: photo_user.data[key].post,
      });
    }
    dispatch(postSuccess(post_user));
    // dispatch(postSuccess_DB(post_user));
  };
};

export const updatePost = (image, userId) => {
  return async (dispatch) => {
    const imagePost = await ref(storage, `images/${userId}/${image.name}`);
    const upload = await uploadBytes(imagePost, image).then(() => {
    });
    const imageDB = await getDownloadURL(ref(storage, `images/${userId}/${image.name}`));
      const post = await firebase.post(`${userId}/post.json`, {
      post: imageDB,
      });
    // dispatch(updatePost_db(imageDB, userId));
  };
};

export const postStart = () => {
  return {
    type: POST_START,
  };
};

export const postSuccess = (postStorage) => {
  return {
    type: POST_SUCCESS,
    postStorage,
  };
};

export const postFail = (error) => {
  return {
    type: POST_FAIL,
    error,
  };
};

export { POST_START, POST_SUCCESS, POST_FAIL, POST_SUCCESS_DB };
