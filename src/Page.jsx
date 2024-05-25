import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const Page = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Page;
