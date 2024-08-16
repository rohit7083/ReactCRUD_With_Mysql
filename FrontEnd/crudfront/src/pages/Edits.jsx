import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
    fname: "",
    lname: "",
    city: "",
};

const Edit = () => {
    const [state, setState] = useState(initialState);
    const { fname, lname, city } = state;
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fname || !lname || !city) {
            toast.error("Please insert all values.");
        } else {
            try {
                await axios.post("http://localhost:5000/api/post", { fname, lname, city });
                setState(initialState); // Clear state after submission
                toast.success("Data saved successfully!");
                setTimeout(() => navigate("/"), 500); // Redirect after 500ms
            } catch (err) {
                toast.error(err.response?.data || "An error occurred."); // Improved error handling
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div>
            <h1>Edit And Add</h1>

            <form
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="fname">First name</label>
                <input
                    type="text"
                    id="fname"
                    name="fname" // Corrected to match state property
                    placeholder="Enter your first name..."
                    value={fname}
                    onChange={handleInputChange}
                /> <br />

                <label htmlFor="lname">Last name</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your surname..."
                    value={lname}
                    onChange={handleInputChange}
                /> <br />

                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city..."
                    value={city}
                    onChange={handleInputChange}
                /> <br />

                <input type="submit" value="Save" /> <br />
                <Link to="/">
                    <button type="button">Go Back</button> {/* Changed to button */}
                </Link>
            </form>
        </div>
    );
};

export default Edit;
