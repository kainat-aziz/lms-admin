import React, { useState } from "react";
import Sidebar from "./Sidebar";
import EduKids from "/assets/icons/EduKids.svg";
import Image from "next/image";
import messages from "/assets/icons/message-text.svg";
import MessageIcon from "/assets/icons/messages2.svg";
import notification from "/assets/icons/notification.svg";
import NotifyImg from "/assets/icons/notification2.svg";
import avatar from "/assets/icons/avatar.svg";
import chev_down from "/assets/icons/chev_down.svg";
// import Notification from "../Notification/Notification";
// import ChatWidget from "../Messages/ChatWidget";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

function Header() {
  const [showNotification, setShowNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <div className="z-50 fixed w-[100%] h-[7vh] mt-0">
        <div className="flex bg-white justify-between px-10">
          <div className="flex items-center">
            <div className="p-6">
              <h1>Admin</h1>
              {/* <Image src={EduKids} alt="Image" /> */}
            </div>

            {/* <div className="ml-5">
              <form>
                <input
                  type="text"
                  className="bg-gray-50 border hover:border-primary hover:border-opacity-80 focus:border-none outline-1 focus:outline-primary
                   text-gray-900 rounded-3xl  w-[300px]  py-2 px-4 text-[19px]"
                  placeholder="Search Here"
                />
              </form>
            </div> */}
          </div>

          {/* <div className="flex items-center"> */}
          {/* message widget */}
          {/* <div className="md:pr-[10px] lg:pr-[15px]"> */}
          {/* <div
                className={`border-2 border-yellow-500   p-2 mt-3 rounded-full  h-[42px] w-[45px] relative ${
                  !showMessage
                    ? ""
                    : "border-2 border-yellow-500 bg-[#F0A901]  p-2 mt-3 rounded-full  h-[42px] w-[45px] relative"
                }`}
              > */}
          {/* <div
                  onClick={() => {
                    setShowMessage((val) => !val);
                    setShowNotification(false);
                  }}
                  className="cursor-pointer"
                >
                  {!showMessage ? (
                    <Image src={messages} alt="" />
                  ) : (
                    <Image src={MessageIcon} alt="" />
                  )}
                </div> */}

          {/* <div className=" absolute -right-2 -top-2 rounded-full bg-[#F94F46]  w-[20px] h-[20px]">
                  <h1 className="text-white text-[12px] pl-[7px]">2</h1>
                </div> */}
          {/* messages widget */}
          {/* <Slide direction={showMessage ? "right" : "left"}>
                  <div className="absolute md:left-[-104px] top-[5px]">
                    <ChatWidget
                      mesgemenu={showMessage}
                      showMessage={showMessage}
                    />
                  </div>
                </Slide> */}
          {/* </div> */}
          {/* </div> */}
          {/* notification widget */}
          {/* <div className=" relative md:pr-[10px] lg:pr-[15px]"> */}
          {/* <div
                className={`border-2 border-yellow-500   p-2 mt-3 rounded-full  h-[42px] w-[45px] relative ${
                  showNotification
                    ? "border-2 border-yellow-500 bg-[#F0A901]  p-2 mt-3 rounded-full  h-[42px] w-[45px] relative"
                    : ""
                }`}
              >
                <div
                  onClick={() => {
                    setShowMessage(false);
                    setShowNotification((val) => !val);
                  }}
                  className="cursor-pointer"
                >
                  {showNotification ? (
                    <Image className="" src={NotifyImg} alt="Image" />
                  ) : (
                    <Image src={notification} alt="Image" />
                  )}
                </div>

                <div className="absolute -right-2 -top-2 rounded-full bg-[#F94F46]  w-[20px] h-[20px]">
                  <h1 className="text-white text-[12px] pl-[7px]">5</h1>
                </div>
              </div> */}
          {/* <Slide direction={showNotification ? "right" : "left"}>
                <div className="absolute md:left-[-120px] top-[5px]">
                  {/* <Notification showNotification={showNotification} /> */}
          {/* </div> */}
          {/* </Slide>  */}
          {/* </div> */}

          {/* <div className="pt-2 mr-2">
              <Image src={avatar} alt="" />
            </div>
            <div className="pt-2">
              <h2 className="md:text-[13px] lg:text-[15px] font-bold  lg:font-extrabold">
                <Link href="/student-profile">Sarah Baker</Link>
              </h2>
            </div> */}
          {/* <div className="pt-2 ml-2 mr-2">
              <Image src={chev_down} alt="" />
            </div> */}
        </div>
      </div>
      <Sidebar />
      {/* </div> */}
    </>
  );
}
export default Header;
