import React, { useState } from "react";
import { addPost } from "../ReduxStore/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [userName, setUserName] = useState("");
  const [postBody, setPostBody] = useState("");
  const [hashtags, setHashTags] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Convert imG to base64 & set it
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      userName: userName,
      postBody: postBody,
      hashtags: hashtags,
      image: image,
      visibility: "Public",
    };

    dispatch(addPost(newPost));
    navigate("/");
  };

  return (
    <div className="flex-1 overflow-auto no-scrollbar items-center relative z-10">
      <div className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <div className="w-full h-auto">
          <h1 className="text-xl font-bold my-2">Create Post</h1>

          <div className="py-5 bg-gray-100 rounded-lg">
            <form className="p-4" onSubmit={handleFormSubmit}>
              <label className="block text-sm font-medium mb-2">Name</label>
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-gray-200">
                <input
                  type="name"
                  value={userName}
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
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                  placeholder="What's on your mind"
                  className="w-full min-h-64 overflow-y-scroll no-scrollbar outline-none"
                  required
                />
              </div>

              <label className="block text-sm font-medium mb-2">
                Upload Image
              </label>
              <div className="mb-4 flex items-center gap-3 w-1/2 px-5 py-2.5 rounded-xl bg-gray-200">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full bg-transparent outline-none cursor-pointer"
                />
              </div>

              {/* Preview that img */}
              {image && (
                <div className="mb-4">
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-24 h-24 rounded-lg"
                  />
                </div>
              )}

              <label className="block text-sm font-medium mb-2">Hashtags</label>
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-gray-200">
                <input
                  type="text"
                  value={hashtags}
                  onChange={(e) => setHashTags(e.target.value)}
                  placeholder="Enter hashtags"
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <button className="p-2 m-1 bg-blue-600 text-white font-semibold rounded-lg cursor-pointer px-4">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
