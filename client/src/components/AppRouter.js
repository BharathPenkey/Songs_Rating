import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddSong from "../pages/AddSong";
import AddArtist from "../pages/AddArtist";

function AppRouter(){
    return <BrowserRouter >
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/addsong" element={<AddSong />} />
        <Route path="/addartist" element={<AddArtist />} />
    </Routes>
    </BrowserRouter>
}

export default AppRouter; 