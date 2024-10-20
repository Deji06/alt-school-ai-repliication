"use client";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const main = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<
    "screen1" | "screen2" | "screen3" | "screen4"
  >("screen1");
  const[openMenu, setOpenMenu] = useState<boolean>(false)

  const handleScreenChange = () => {

  }
  const handleHamburgerMenu = (): void => {
    setOpenMenu((prevState) => !prevState); // Toggle the state
  };
  // const handleHamburgerMenu = () => {
  //   setOpenMenu(!openMenu)
  //   console.log(openMenu);
  //   console.log('clicked');
    
  // }
  useEffect(() => {
    console.log('openMenu state changed:', openMenu);
  }, [openMenu]);


  //   const handleScreenChange = (
  //     screen: "screen1" | "screen2" | "screen3" | "screen4"
  //   ): void => {
  //     setCurrentPage(screen); // Update the state to the selected screen
  //     if (screen === "screen1") {
  //       setOpenDashboard(true); // Open the dashboard when screen2 is selected
  //     } else if (screen === "screen2") {
  //       setOpenDashboard(false); // Open the dashboard when screen2 is selected
  //     } else {
  //       setOpenDashboard(false); // Close the dashboard for other screens
  //     }
  //   };

  // const[pages, setPages] =  useState(false)
  return (
    <>
      <div className="px-4 py-4 sm:px-0 sm:py-0 ">
        <div className="flex border-2 items-center sm:bg-white sm:border sm:w-[90%] sm:mt-10 sm:mx-auto  sm:py-1 rounded-[10px]  justify-between px-5">
          <p className="font-bold text-[30px] capitalize">
            deji___ <br />
            school
          </p>
          <GiHamburgerMenu className="sm:hidden text-[30px]" onClick={handleHamburgerMenu}/>
          <button className="hidden sm:flex">log out</button>
        </div>
        <div className="flex sm:flex-row flex-col items-center relative sm:absolute">
          {/* left side modal */}
        {openMenu &&
          <div className="sm:w-[40%] w-[100%] absolute top-[-80px] sm:top-0">
            <div className="border mt-20 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white">
              <p className="mx-4 hidden sm:flex  py-4">
                choose a service below
              </p>
              <div className="border hidden sm:flex "></div>
              <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
                <div className="flex items-center gap-x-5">
                  <FaUserGroup />
                  <p onClick={() => {}} className=" capitalize">interview prep</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <FaLinkedin />
                  <p onClick={() => {}} className=" capitalize">linkedIn profile review</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <BsFileEarmarkText />
                  <p onClick={() => {}} className="capitalize">cv/resume review</p>
                </div>
                <div className="flex items-center gap-x-5 ">
                  <CiChat1 />
                  <p onClick={() => {}} className="capitalize">career advisor chat</p>
                </div>
              </div>
            </div>
          </div> 
      }
          {/* right side */}
          <div className="border-dashed border absolute top-[500px] sm:top-[100px] sm:left-[800px]">
            <p>hi</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
