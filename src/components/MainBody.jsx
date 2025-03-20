import React from "react";
import StoryCards from "./cards/StoryCards";
import StartPostCard from "./cards/StartPostCard";
import { useDispatch, useSelector } from "react-redux";
import {
  CircleUserRound,
  MessageSquarePlus,
  PencilLine,
  Repeat2,
  Send,
  ThumbsUp,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { removePost } from "../ReduxStore/postSlice";
import Navbar from "./Navbar";

const MainBody = () => {
  const posts = useSelector((store) => store.post.items);

  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(removePost(id));
  };

  console.log("Posts updated:", posts);

  return (
    <div className="flex-1 overflow-auto no-scrollbar relative z-10">
      <Navbar />

      <StoryCards />
      <StartPostCard />

      <div className=" flex flex-col py-2 items-center justify-center gap-y-2.5 px-24">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-300 shadow-sm shadow-gray-200 rounded-lg py-2 w-[370px] md:w-[510px] lg:w-[630px] px-4"
          >
            <div className="flex px-2 pb-2 my-1 flex-row justify-between">
              <div>
                <div className="flex flex-row gap-2">
                  <CircleUserRound />
                  <span className="font-semibold text-base">
                    {post.userName}{" "}
                  </span>
                </div>

                <p className="text-slate-500 font-medium ml-8 text-xs">
                  {post.visibility} 🌐
                </p>
              </div>
              <div className="flex flex-row gap-3.5">
                <Link to={`/edit-post/${post.id}`}>
                  <div className="flex flex-row gap-2 cursor-pointer">
                    <PencilLine size={18} className="text-gray-500 " />
                    <p className="text-sm text-gray-500  font-medium">Edit</p>
                  </div>
                </Link>
                <Trash2
                  size={18}
                  className="text-red-600 cursor-pointer hover:bg-red-200"
                  onClick={() => handleDeletePost(post.id)}
                />
              </div>
            </div>
            <div>
              <p className="p-1 mb-2">{post.postBody} </p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-[360px] md:w-[400px] lg:w-[600px] rounded-lg my-2"
                />
              )}
              <span className="font-semibold text-blue-600 mt-2 mb-1 text-sm">
                {post.hashtags}
              </span>
            </div>
            <div className="px-7 md:px-9 lg:px-12 pt-3 pb-1 flex flex-row justify-between">
              <ThumbsUp
                size={21}
                className="text-gray-700 hover:text-black cursor-pointer"
              />
              <MessageSquarePlus
                size={21}
                className="text-gray-700 cursor-pointer hover:text-black"
              />
              <Repeat2
                size={21}
                className="text-gray-700 hover:text-black cursor-pointer"
              />
              <Send
                size={21}
                className="text-gray-700 hover:text-black  cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBody;
