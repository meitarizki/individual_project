import "./share.scss";
import Image from "../../assets/img.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useMutation, QueryClient } from "@tanstack/react-query";

const Share = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  const access = currentUser.status === "verified";

  const queryClient = new QueryClient();

  // Mutations
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ caption, image: imgUrl });
    setCaption("");
    setFile(null);
  };
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <input
              type="text"
              placeholder={`So, tell me what's new ${currentUser.username}?`}
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
          </div>
          <div className="right">
            {access ? <button onClick={handleClick}>Share</button> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
