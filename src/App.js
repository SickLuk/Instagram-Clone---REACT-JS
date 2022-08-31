import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Index from './pages/index';
import Home from './pages/home';
import Profile from "./pages/profile";
import Logout from './pages/logout';
import UploadPhoto from './pages/uploadPost';
import ChangeInfo from "./pages/changeInfo";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authCheck } from "./store/actions/handleAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/uploadPost' element={<UploadPhoto />} />
        <Route exact path='/changeInfo' element={<ChangeInfo />} />
      </Routes>
    </div>
  );
}

export default App;
