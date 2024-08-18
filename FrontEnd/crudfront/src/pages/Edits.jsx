import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
const intialstate = {
    fname: "",
    lname: "",
    city: "",
};
const Edit = () => {
    const [state, setState] = useState(intialstate);
    const { fname, lname, city } = state
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/get/${id}`)
            .then((resp) => setState({ ...resp.data[0] }));

    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname || !lname || !city) {
            toast.error("insert value ...");
        }
        else {
            if (!id) {
                axios.
                    post('http://localhost:5000/api/post', {
                        fname,
                        lname,
                        city,
                    }).then(() => {
                        setState({ fname: "", lname: "", city: "" });
                    }).catch((err) => toast.error(err.response.data));
                toast.success("contact added succesfully...");
            } else {
                axios.
                    put(`http://localhost:5000/api/update/${id}`, {
                        fname,
                        lname,
                        city,
                    }).then(() => {
                        setState({ fname: "", lname: "", city: "" });
                    }).catch((err) => toast.error(err.response.data));
                toast.success("contact update succesfully...");
            }
            setTimeout(() => navigate("/"), 500);
        }
    }

    const handleInputchange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    return (
        <>

            <div>
                <h1>Edit And Add</h1>


                <form action=""
                    // style={{
                    //     margin: "auto",
                    //     padding: "15px",
                    //     maxWidth: "400px",
                    //     alignContent: "center"
                    // }}

                    onSubmit={handleSubmit}

                >

                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="fname" placeholder="enter your first name ..." value={fname || ""}
                        onChange={handleInputchange} /> <br />

                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname" placeholder="enter your surname ..." value={lname || ""}
                        onChange={handleInputchange} /> <br />

                    <label htmlFor="city">city</label>
                    <input type="text" id="city" name="city" placeholder="enter your city ..." value={city || ""}
                        onChange={handleInputchange} /> <br />

                    <input type="submit" value={id ? "update" : "Save"} /> <br />
                    <Link to="/">
                        <input type="button" value="Go Back" />
                    </Link>
                </form>

            </div>
        </>
    );
};

export default Edit;