import react, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link ,useHistory  } from "react-router-dom";
const intialstate = {
    fname: "",
    lname: "",
    city: "",
};
const Edit = () => {
    const [state, setState] = useState(intialstate);
    const { fname, lname, city } = state
const history=useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!fname || !lname || !city){
            toast.error("insert value ...")
        }
        else{
            axios.post("http://localhost:5000/api/post",{
            
                fname,
                lname,
                city,
            }).then(()=>{
                setState({fname:"", lname:"",city:""});
            }).catch((err)=>toast.error(err.response.data));
                setTimeout(() => history.push("/"), 500);
        }
    }

    const handleInputchange = (e) => {
        const { fname, value } = e.target;
        setState({ ...state, [fname]: value });
    }
    return (
        <>

            <div>
                <h1>Edit And Add</h1>


                <form action=""
                    style={{
                        margin: "auto",
                        padding: "15px",
                        maxWidth: "400px",
                        alignContent: "center"
                    }}

                    onSubmit={handleSubmit}

                >

                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="dname" placeholder="enter your first name ..." value={fname}
                        onChange={handleInputchange} /> <br />

                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname" placeholder="enter your surname ..." value={lname}
                        onChange={handleInputchange} /> <br />

                    <label htmlFor="city">city</label>
                    <input type="text" id="city" name="city" placeholder="enter your city ..." value={city}
                        onChange={handleInputchange} /> <br />

                    <input type="button" value="save" /> <br />
                    <Link to="/">
                        <input type="button" value="Go Back" />
                    </Link>
                </form>

            </div>
        </>
    );
};

export default Edit;