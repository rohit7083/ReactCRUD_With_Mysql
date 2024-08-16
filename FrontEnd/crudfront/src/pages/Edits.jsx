import react from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Edit = () => {
    return (
        <>

            <div>
                <h1>Edit And Add</h1>


                <form action=""
                style={{margin:"auto",
                    padding:"15px",
                    maxWidth:"400px",
                    alignContent:"center"
                }}
                
                onSubmit={handleSubmit}

                >

                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="dname" placeholder="enter your first name ..." value={fname}
                        onChange={handleInputchange} />

                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname" placeholder="enter your surname ..." value={lname}
                        onChange={handleInputchange} />

                    <label htmlFor="city">city</label>
                    <input type="text" id="city" name="city" placeholder="enter your city ..." value={city}
                        onChange={handleInputchange} />

                </form>

            </div>
        </>
    );
};

export default Edit;