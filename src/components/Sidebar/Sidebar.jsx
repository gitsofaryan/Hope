import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { SlReload } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    await onSent(prompt);
    setRecentPrompt(prompt);
  };

  return (
    <div
      className={`sidebar bg-neutral-800 text-white ${
        !extended ? "w-18" : "w-64"
      }`}
    >
      <div className="top">
        <FaBarsStaggered
          className="text-2xl text-[#ED3B77] ml-2 cursor-pointer hover:scale-110"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div
          onClick={() => newChat()}
          className="flex p-3 justify-center items-center space-x-2 bg-[#ED3B77]/40 rounded-2xl mt-10 hover:scale-95 cursor-pointer text-gray-200"
        >
          <GoPlus className="text-2xl text-gray-200" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent gap-3">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="flex p-3 justify-center items-center space-x-2  bg-violet-700/20 rounded-2xl  hover:scale-95 cursor-pointer text-gray-200"
              >
                <MdOutlineChat className="text-2xl text-gray-200" />
                <p>
                  {item.slice(0, 18)} {"..."}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex space-y-3 flex-col">
        <div className="text-gray-200 flex  items-center space-x-2 hover:bg-violet-700/20 hover:p-1 hover:rounded-2xl cursor-pointer">
          <IoMdHelpCircleOutline className="text-2xl" />
          {extended ? <p>About</p> : null}
        </div>
        <div className="text-gray-200 flex  items-center space-x-2 hover:bg-violet-700/20 hover:p-1 hover:rounded-2xl cursor-pointer">
          <SlReload className="text-2xl" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="text-gray-200 flex  items-center space-x-2 hover:bg-violet-700/20 hover:p-1 hover:rounded-2xl cursor-pointer">
          <IoSettingsOutline className="text-2xl" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
