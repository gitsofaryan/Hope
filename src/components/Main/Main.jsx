import React, { useContext, useState, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { IoIosSend } from "react-icons/io";
import aiicon from "../../assets/ailogo.png";
import mainLogo from "../../assets/logonew.png";
import MainCenter from "./MainCenter";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const [userDataPresent, setUserDataPresent] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleCardClick = (text) => {
    setInput(text);
    console.log(text);
    onSent(text);
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
      setUserDataPresent(true);
    } else {
      setUserDataPresent(false);
    }
  }, []);
  return (
    <div className="main bg-gradient-to-r from-neutral-900 to-[#13002b] w-full ">
      <div className="flex items-center justify-between px-7">
        <img className=" mt-3 w-40" src={mainLogo} />
        {userDataPresent ? (
          <img
            src={userData.photoURL}
            alt="ailogo"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <img src={aiicon} alt="ailogo" className="w-10 h-10 rounded-full" />
        )}
      </div>
      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className="result-title">
              {userDataPresent ? (
                <img
                  src={userData.photoURL}
                  alt="ailogo"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <img
                  src={aiicon}
                  alt="ailogo"
                  className="w-10 h-10 rounded-full"
                />
              )}
              <p className="text-gray-100">{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="flex flex-col gap-3 w-1/2">
                  <hr className="h-8 rounded-full w-full bg-gray-600 animate-pulse" />
                  <hr className="h-8 rounded-full w-1/2 bg-gray-600 animate-pulse" />
                  <hr className="h-8 rounded-full w-1/3 bg-gray-600 animate-pulse" />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-gray-200"
                ></p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="greet relative isolate overflow-hidden ">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                  className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-500 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                      width={200}
                      height={200}
                      x="50%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="50%"
                    y={-1}
                    className="overflow-visible fill-[#ED3B77]/10"
                  >
                    <path
                      d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                      strokeWidth={0}
                    />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                  />
                </svg>
              </div>
              <p>
                <span className="bg-gradient-to-r from-indigo-500 to-[#ED3B77] bg-clip-text text-transparent">
                  Hi there, pal!
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards text-gray-50">
              <div
                className="card bg-indigo-500/50 text-gray-50 hover:bg-[#ED3B77]/50 h-28 md:h-32 lg:h-32 rounded-[2rem]"
                onClick={() =>
                  handleCardClick(
                    "Suggest beautiful places to see on an upcoming road trip"
                  )
                }
              >
                <p className="text-gray-50">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card bg-indigo-500/50 text-gray-50 hover:bg-[#ED3B77]/50 h-28 md:h-32 lg:h-32  rounded-[2rem]"
                onClick={() =>
                  handleCardClick(
                    "Briefly summarize this concept: urban planning"
                  )
                }
              >
                <p className="text-gray-50">
                  Briefly summarize this concept: urban planning
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card bg-indigo-500/50 text-gray-50 hover:bg-[#ED3B77]/50 h-28 md:h-28  lg:h-32 rounded-[2rem]"
                onClick={() =>
                  handleCardClick(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              >
                <p className="text-gray-50">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card bg-indigo-500/50 text-gray-50 hover:bg-[#ED3B77]/50 h-28 md:h-32 lg:h-32 rounded-[2rem]"
                onClick={() =>
                  handleCardClick(
                    "Improve the readability of the following code"
                  )
                }
              >
                <p className="text-gray-50">
                  Improve the readability of the following code
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        )}

        <div className="main-bottom mt-auto">
          <div className="search-box bg-white/10 text-gray-100 w-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              className="w-"
            />
            <div>
              {input ? (
                <IoIosSend
                  className="text-3xl text-[#ED3B77]/80 cursor-pointer hover:scale-110"
                  onClick={() => onSent()}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info text-gray-400 text-xs md:textsm lg:textsm">
            Conversify may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Conversify Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
