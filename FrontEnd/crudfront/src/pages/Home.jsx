import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const Home = () => {
    const [data, setData] = useState([]);

    const loaddata = async () => {
        // try {
            const response = await axios.get("http://localhost:5000/api/get");
            setData(response.data); // Update state with the fetched data
        // } catch (error) {
        //     console.error('Error fetching data:', error); // Error handling
        // }
    };

    useEffect(() => {
        loaddata();
    }, []); 

    const deleteContact=(id)=>{
        if(window.confirm("are you sure you want delete")){
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            toast.success("contact delete sucessfully");
            setTimeout(() => {
                loaddata()
            }, 500);
        }
    }
    return (
        <div>
            <h2>This is the Home page</h2>
            <Link to="/addcontact">
                <button className="btn btn-edit">
                    Add
                </button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>No</th>
                        <th style={{ textAlign: 'center' }}>First name</th>
                        <th style={{ textAlign: 'center' }}>Last name</th>
                        <th style={{ textAlign: 'center' }}>City</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.city}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                </Link>
                                <button className="btn btn-delete" onClick={()=> deleteContact(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
