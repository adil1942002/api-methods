import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

export default function Home() {
    const [listData, setListData] = useState<any>([]);

    const navigate = useNavigate();

    const deletePost = (id: any) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(() => {
                console.log("Post Deleted Successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setListData([...res.data]);
                console.log(res.data);
                
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div>
                <h1 className="text-center">All Data</h1>
                <button
                className="btn btn-warning px-5"
                    onClick={() => {
                        navigate("/add");
                    }}
                >
                    Add  Data
                </button>
                <div className="container-fluid d-flex flex-wrap ">
<div className="row ms-md-5">

                {listData &&
                    Array.isArray(listData) &&
                    listData.length > 0 &&
                    listData.map((x: any, i: any) => (
                        <div className=" col-md-3 border m-3 p-5 text-center" key={i}>
                            <h2>{x.name}</h2>
                            <p>{x.body}</p>
                            <p className="text-primary">{x.email}</p>
                            <p>{x.id}</p>
                            
                            <button className="btn btn-danger  mx-3" onClick={() => deletePost(x.id)}>
                                Delete</button>
                            <button onClick={() => {
                                navigate(`/edit/${x.id}`)}}
                                className="btn btn-info  ">Edit</button>

                        </div>
                    ))} 
                    </div>
                    </div>
            </div>
        </>
    );
}