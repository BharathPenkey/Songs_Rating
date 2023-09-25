import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function AddArtist() {
    const [singers, setSingers] = useState([]); // List of singers
    const [newSinger, setNewSinger] = useState({ // New singer details
        name: '',
        dob: '',
        bio: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5002/api/artists') // Use GET to fetch singers
            .then((response) => {
                setSingers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching singers:', error);
            });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const handleAddArtist = () => {
        axios
            .post('http://localhost:5002/api/artist', newSinger)
            .then((response) => {
                setSingers([...singers, response.data]);
                setNewSinger({ name: '', dob: '', bio: '' }); // Clear input fields
                navigate('/addadmin');
            })
            .catch((error) => {
                console.error('Error adding artist:', error);
            });
    };

    return (
        <div>
            <form>
                <div className="addArtist-header">
                    <h4>Add Artist</h4>
                    <div>
                        <div className="mb-2 form-group">
                            <label htmlFor="an">Artist Name</label>
                            <input
                                id="an"
                                name="name"
                                className="form-control thicker-border"
                                type="text"
                                value={newSinger.name}
                                onChange={(e) => setNewSinger({ ...newSinger, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-2 form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                id="dob"
                                name="DOB"
                                className="form-control thicker-border"
                                type="date"
                                value={newSinger.dob}
                                onChange={(e) => setNewSinger({ ...newSinger, dob: e.target.value })}
                            />
                        </div>
                        <div className="mb-2 form-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                id="bio"
                                name="BIO"
                                className="form-control thicker-border"
                                type="text"
                                value={newSinger.bio}
                                onChange={(e) => setNewSinger({ ...newSinger, bio: e.target.value })}
                                rows={6}
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-3" id="btn-can-sav">
                        <Link to="/addsong">
                            <button className="btn btn-secondary rounded-0 shadow">Cancel</button>
                        </Link>
                        <Link>
                        <button
                            id="save-btn2"
                            className="btn btn-secondary rounded-0 shadow"
                            onClick={handleAddArtist}
                        >
                            Save
                        </button></Link>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddArtist;
