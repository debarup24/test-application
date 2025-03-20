import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../ReduxStore/postSlice";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = useSelector((store) => store.post.items);
  const existingPost = posts.filter((f) => f.id === id);

  const { userName, postBody, hashtags } = existingPost[0];
  const [edituserName, setUserName] = useState(userName);
  const [editpostBody, setPostBody] = useState(postBody);
  const [edithashtags, setHashTags] = useState(hashtags);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const editedPost = {
      id: id,
      userName: edituserName,
      postBody: editpostBody,
      hashtags: edithashtags,
      visibility: "Public",
    };

    dispatch(updatePost(editedPost));
    navigate("/");
  };

  return (
    <div className="flex-1 overflow-auto no-scrollbar items-center relative z-10">
      <div className="max-w-2xl mx-auto py-6 px-4 lg:px-8">
        <div className="w-full h-auto">
          <h1 className="text-xl font-bold my-2">Edit Your Post</h1>

          <div className="py-5 bg-gray-100 rounded-lg">
            <form className="p-4" onSubmit={handleFormSubmit}>
              <label className="block text-sm font-medium mb-2">Name</label>
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-gray-200">
                <input
                  type="name"
                  value={edituserName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-transparent outline-none"
                  required
                />
              </div>

              <label className="block text-sm font-medium mb-2">
                Post Content
              </label>
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-gray-200">
                <textarea
                  value={editpostBody}
                  onChange={(e) => setPostBody(e.target.value)}
                  placeholder="What's on your mind"
                  className="w-full min-h-64 overflow-y-scroll no-scrollbar outline-none"
                  required
                />
              </div>

              <label className="block text-sm font-medium mb-2">Hashtags</label>
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-gray-200">
                <input
                  type="text"
                  value={edithashtags}
                  onChange={(e) => setHashTags(e.target.value)}
                  placeholder="Enter hashtags"
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <button className="p-2 m-1 bg-blue-600 text-white font-semibold rounded-lg cursor-pointer px-4">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
