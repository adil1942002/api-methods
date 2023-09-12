import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";

export default function Form() {
  const [model, setModel] = useState<any>({});
    const baseApi = "https://jsonplaceholder.typicode.com/comments";
  const params = useParams();

  const getPostById = () => {
    axios
      .get(`${baseApi}/${params.id}`)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
    axios
      .put(`${baseApi}/${params.id}`, model)
      .then((res) => {
        console.log("Post Updated Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitPost = () => {
    model.userId = 11;
    axios
      .post(baseApi, model)
      .then((res) => {
        console.log("Post Added Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostById();
    }
  }, []);

  return (
    <>
      <div style={{backgroundColor:"lightsalmon ", height:"100vh"}}>
        <div className=" p-5 mx-auto text-center" style={{width:"300px "}}>
          {params.id ? (
            <p>Edit data</p>
            ) : (
            <p>Add data</p>
          )}
            <Paper>
            <div className="pt-4">
            <input
                          value={model.name}
                          onChange={(e) => setModel({ ...model, name: e.target.value })}
                          type="text"
                          placeholder="Enter Name"
              />
              </div>
                  <div className="my-3">
            <input
              value={model.email}
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              type="email"
                              placeholder="Enter Email"
                          />
                          </div>
            <div>


            <input
              value={model.id}
              onChange={(e) => setModel({ ...model, id: e.target.value })}
              type="number"
                              placeholder="Enter ID"
              />
              </div>
                  <div>


            <textarea cols={23}
                className="my-3"
            rows={10}
            value={model.body}
            onChange={(e) => setModel({ ...model, body: e.target.value })}
            placeholder="Enter Commints"
            ></textarea>
              </div>
                  <div>


            {params.id ? (
                              <button className="btn btn-warning w-100"  onClick={updatePost}>Update</button>
                ) : (
                                  <button className="btn btn-warning w-100" onClick={submitPost}>Submit</button>
                    )}
                </div>
                    </Paper>
          </div>
      </div>
    </>
  );
}