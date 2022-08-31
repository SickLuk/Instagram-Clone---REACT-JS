import axios from "axios";

const firebase = axios.create({
  baseURL: "https://instagramreplica-d7de9-default-rtdb.europe-west1.firebasedatabase.app/"
})

export {firebase}