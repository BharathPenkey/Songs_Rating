import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function AddSong() {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({ name: '', releaseDate: '', cover: '', artists: '' });
//  const artist=['Anne Marie','Ed sheran','dan reynolds']
  // Handle input changes for newSong
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  };

  // Handle adding a song
  const HandleAddSong = () => {
    axios
      .post('http://localhost:5007/api/songs', newSong)
      .then((response) => {
        setSongs([...songs, response.data]);
        setNewSong({ name: '', releaseDate: '', cover: '', artists: '' });
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding song:', error);
      });
  };

  // Handle image upload
  const HandleImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'songImage');
    data.append('cloud_name', 'drfg4tq7u');
    fetch('https://api.cloudinary.com/v1_1/drfg4tq7u/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNewSong({ ...newSong, cover: data.url });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="d-flex align-items-center 100-w 100-vh bg-white">
        <div className="40-w p-5 bg-white">
          <form>
            <h3>Adding a new song</h3>
            <div className="mb-2 form-group">
              <label For="sn">Song Name</label>
              <input
                id="sn"
                name="name"
                className="form-control thicker-border"
                type="text"
                placeholder="Name"
                value={newSong.name}
                onChange={HandleChange}
              />
            </div>
            <div className="form-group">
              <label For="dr">Date Released</label>
              <input
                id="dr"
                name="releaseDate"
                className="form-control thicker-border"
                type="date"
                placeholder="Release Date"
                value={newSong.releaseDate}
                onChange={HandleChange}
              />
            </div>
            <div className="mb-2">
              <label For="artwork">ArtWork</label>
              <input
                id="artwork"
                name="cover"
                className="form-control thicker-border"
                type="file"
                placeholder="select image"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  HandleImage()
                }}
                
                // onChange={HandleImage}
              />
            </div>
            <div className="mb-2">
              <label>Artist</label>
              <div className="sec-btn">
              <input
                id="dr"
                name="artists"
                className="form-control thicker-border"
                type="string"
                placeholder="singers"
                value={newSong.artists}
                onChange={HandleChange}
              />
              <div>
                {/* <select
                  id="idname"
                  className="form-control mt-2 gap-2"
                  name="artists"
                  onChange={HandleChange}
                > */}
                   {/* {artist.map(value =>
                     <option >{value}</option> */}
                   {/* )}  */}
                  {/* <option value="artist1">opt 1</option>
                  <option value="artist2">opt 2</option>
                  <option value="artist3">opt 3</option> */}
                {/* </select><div> */}
      {/* <button id="addartist" className="btn btn-secondary rounded-0" navigate='/adartist'>+ Artist</button> */}
      <button className="btn btn-secondary rounded-0" onClick={() => { navigate("/addartist") }} >Add artist</button>  
                </div>
               
              </div>
            </div>
            <div className="mt-2" id="btn-can-sav">
              <Link to="/">
                <button className="btn btn-secondary rounded-0 shadow">Cancel</button>
              </Link>
              <Link to="/"><button
                id="save-btn"
                className="btn btn-secondary rounded-0 shadow"
                onClick={HandleAddSong}>
                Save
              </button></Link>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddSong;