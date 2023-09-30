import React from "react";
import ReactDOM from "react-dom/client";
import HeaderButton from "./components/header_button/header_button.jsx";
import Entrance from "./components/entrance/entrance.jsx";
import Salutation from "./components/salutation/salutation.jsx";
import RecentWorks from "./components/recent_works/index.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderButton />
    <Entrance />
    <Salutation />
    <RecentWorks />
  </React.StrictMode>
);
