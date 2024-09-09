// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Main from "./components/Main/Main";
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
      <Analytics />
    </>
  );
};

export default App;
