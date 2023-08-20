import { useState } from "react";

import "./App.css";
import Arrow from "../src/assets/icon-arrow-down.svg";
import Moon from "../src/assets/icon-moon.svg";
import Window from "../src/assets/icon-new-window.svg";
import Play from "../src/assets/icon-play.svg";
import Search from "../src/assets/icon-search.svg";
import Logo from "../src/assets/logo.svg";
function App() {
  const [theme, setTheme] = useState("light");
  const HandleTheme = () => {
    setTheme("dark");
  };
  return (
    <>
      <div className=" flex items-center">
        <img src={Logo} alt="" />
        <h1 className=" text-[14px] ml-[130px]">Mono</h1>
        <img className=" ml-4" src={Arrow} alt="" />
        <div className=" w-[1px] h-8 bg-[#E9E9E9] ml-4 "></div>
        <div className=" flex w-10 h-5 bg-[#757575] ml-4 rounded-[10px] p-[3px] ">
          <span className=" w-[14px] h-[14px] bg-white rounded-full "></span>
        </div>
        <img src={Moon} alt="" />
      </div>
      <div className=" mt-7">
        <input
          className=" w-[327px] h-12 bg-[#F4F4F4] rounded-2xl relative p-5  "
          type="text"
        />
        <img
          className=" absolute top-[104px] left-[308px] "
          src={Search}
          alt=""
        />
      </div>
    </>
  );
}

export default App;
