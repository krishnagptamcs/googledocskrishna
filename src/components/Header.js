import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { BiLock } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row w-full  items-center justify-between bg-[#f3f3f3]">
        {/* left part  */}
        <div className="flex flex-row pt-2 pb-2 pl-4 gap-x-2">
          <div>
            <img src="/assets/google-docs.png" className="h-14 w-14 mt-2" />
          </div>

          <div className="flex flex-col gap-y-2 mt-3">
            <h2 className="text-[20px] leading-5 opacity-80"> Untitled document</h2>

            <div className="flex flex-row gap-x-4 ">
              <p className="text-[18px] tracking-wide hover:cursor-pointer hover:bg-[#9aa0a6] ">File</p>
              <p className="text-[18px] tracking-wide  hover:cursor-pointer hover:bg-[#9aa0a6]">Edit</p>
              <p className="text-[18px] tracking-wide hover:cursor-pointer hover:bg-[#9aa0a6]">View</p>
              <p className="text-[18px] tracking-wide hover:cursor-pointer hover:bg-[#9aa0a6]">Insert</p>
              <p className="text-[18px] tracking-wide hover:cursor-pointer hover:bg-[#9aa0a6]">Tools</p>
              <p className="text-[18px] tracking-wide hover:cursor-pointer hover:bg-[#9aa0a6]">Extension</p>
              <p className="text-[18px] tracking-wide hover:cursor-pointer hover:bg-[#9aa0a6]">Help</p>
            </div>
          </div>
        </div>

        {/* right part  */}

        <div className="flex flex-row pr-4 items-center gap-x-7">


          <div>
            <BiMessageAltDetail className="text-3xl" />
          </div>

          <div className="flex flex-row items-center gap-x-2 ">
            <BsCameraVideo className="text-3xl" />
            <AiFillCaretDown className="text-sm" />
          </div>

          <div className="flex flex-row items-center justify-center bg-[#c2e7ff] py-3 px-4 rounded-3xl gap-x-2">
            <BiLock className="text-xl" />
            <p className="text-lg font-semibold">Share</p>
          </div>

          <div>
            <img src="/assets/k-letter.webp" className="w-12 h-12"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
