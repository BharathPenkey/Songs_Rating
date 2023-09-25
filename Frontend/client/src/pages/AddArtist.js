import React from 'react';
import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function AddArtist() {
    const [singers, setSingers] = useState([]); // List of singers
    const [newSinger, setNewSinger] = useState({ // New singer details
        name: '',
        dob: '',
        bio: ''
    });

    const navigate = useNavigate(); // Initialize the navigate function

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setNewSinger({ ...newSinger, [name]: value });
    };

    const handleAddArtist = () => {
        axios
            .post('http://localhost:5007/api/artists', newSinger)
            .then((response) => {
                setSingers([...singers, response.data]);
                setNewSinger({ name: '', dob: '', bio: '' }); // Clear input fields
                // Navigate to the appropriate route here
                navigate('/');
            })
            .catch((error) => {
                console.error('Error adding artist:', error);
            });
    };

    return (
        <div className="d-flex align-items-center 100-w 100-vh bg-white">
            <div className="40-w p-5 bg-white">
                
                    <h4>Add Artist</h4>
                    <form>
                        <div className="addArtist-header">
                            
                                <div className="mb-2 form-group">
                                    <label htmlFor="an">Artist Name</label>
                                    <input
                                        id="an"
                                        name="name"
                                        className="form-control thicker-border"
                                        type="text"
                                        value={newSinger.name}
                                        onChange={HandleChange}
                                    />
                                </div>

                                <div className="mb-2 form-group">
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input
                                        id="dob"
                                        name="dob"
                                        className="form-control thicker-border"
                                        type="date"
                                        value={newSinger.dob}
                                        onChange={HandleChange}
                                    />
                                </div>
                                <div className="mb-2 form-group">
                                    <label htmlFor="bio">Bio</label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        className="form-control thicker-border"
                                        type="text"
                                        value={newSinger.bio}
                                        onChange={HandleChange}
                                        rows={6}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-2" id="btn-can-sav">
                                <Link to="/"> {/* Update the route to the appropriate destination */}
                                    <button className="btn btn-secondary rounded-0 shadow">Cancel</button>
                                </Link>
                                <Link to="/"><button
                                    id="save-btn2"
                                    className="btn btn-secondary rounded-0 shadow"
                                    onClick={handleAddArtist}
                                >
                                    Save
                                </button></Link>
                                
                            
                        </div>
                    </form>
            
            </div>
        </div>
    );
}

export default AddArtist;
