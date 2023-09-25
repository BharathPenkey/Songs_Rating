import axios from "axios";
import { useEffect, useState } from "react";

function Home(){
    const [list, setList] = useState([])

  const [artist,setArtist] =useState([])

  useEffect(() => {
 
    axios.get('http://localhost:5002/api/songs')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching top songs:', error);
      });
  }, []);

  useEffect(() => {
   
    axios.get('http://localhost:5002/api/artists')
      .then((response) => {
        setArtist(response.data);
      })
      .catch((error) => {
        console.error('Error fetching top artists:', error);
      });
  }, [artist]);
  // <form method="POST" action='#'>
  //     <Link to="/addsong"><button type="submit"></button></Link>
  // </form>

    return (<div className="main-container">
    <form >
      <div className="container-1">
        <div className="c-1">
          <h2>Top 10 Songs</h2>
          {/* <Link to="/addsong"><button type="submit" className="button-1"> + Add Song </button></Link> */}
          <Link to="/addsong"><button id="btn" clasName="btn btn-secondary"> + Add Song </button></Link>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr bg-secondary>
                <th>ArtWork</th>
                <th>Song</th>
                <th>Date of Release</th>
                <th>Artists</th>
                <th>Rate</th>


              </tr>
            </thead>
            <tbody>
              {list.map((song) => (
                <tr key={song._id}>
                  <td><img src={song.cover} alt={song.name} /></td>
                  <td><strong>{song.name}</strong></td>
                  <td>{song.releaseDate}</td>
                  <td>{[...song.artists]}</td>
                  <td>{song.rating}</td>
                </tr>
              ))}
            </tbody>


            {/* <tbody>
                            <tr>
                                <td>image url</td>
                                <td>some one you loved</td>
                                <td> july 21,2019</td>
                                <td> lewis capaldi</td>
                                <td></td>
                            </tr>
                        </tbody> */}
          </table>

        </div>
      </div>
      {/* <Link to="/addsong"><button type="submit" className="button-1"> + Add Song </button></Link>    */}
    </form>

    <div className="container-2">
    <div className="c-1">
     
          <h2 className="artist-header">Top 10 Artists</h2>
          </div>
        <div className="table">
          <table>
            <thead>
              <tr bg-secondary>
                <th>Artists</th>
                <th>Date of Birth</th>
                <th>songs</th>

              </tr>
            </thead>
            <tbody>
              {artist.map((singer) => (
                <tr key={singer._id}>
                  <td>{singer.name}</td>
                  <td>{singer.dob}</td>
                  <td>{singer.bio}</td>
              
                </tr>
              ))}
            </tbody>
          </table>

        </div>
    </div>

  </div>

  )
}

export default Home;