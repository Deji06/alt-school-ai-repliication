"use client";
// import Modal from "../components/Modal";
import { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

// type Props = {};

const Main = () => {
  const [currentPage, setCurrentPage] = useState<
    "screen1" | "screen2" | "screen3" | "screen4"
  >("screen1");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleHamburgerMenu = () => {
    setOpenMenu(!openMenu);
    // setOpenMenu((prevState) => !prevState); // Toggle the state
    console.log("clicked");
  };
  const handleScreenChange = (
    screen: "screen1" | "screen2" | "screen3" | "screen4"
  ): void => {
    setCurrentPage(screen);
    setOpenMenu(!openMenu);
  };

  // useEffect(() => {
  //   console.log('openMenu state changed:', openMenu);
  // }, [openMenu]);

  return (
    <>
      <div className="px-4 py-4 sm:px-0 sm:py-0 ">
        <div className="flex border-2 items-center sm:bg-white sm:border sm:w-[90%] sm:mt-10 sm:mx-auto  sm:py-1 rounded-[10px]  justify-between px-5">
          <p className="font-bold text-[30px] capitalize">
            deji___ <br />
            school
          </p>
          <GiHamburgerMenu
            className="sm:hidden text-[30px] cursor-pointer"
            onClick={handleHamburgerMenu}
          />
          <button className="hidden sm:flex">log out</button>
        </div>
        {/* contsainer div */}
        <div className="flex sm:flex-row flex-col items-center gap-x-2 relative sm:absolute pb-10">
          {/* left side mobile modal */}
          {openMenu && (
            <div className="sm:w-[40%] w-[100%] sm:hidden absolute top-[-80px] sm:top-0">
              <div className="border mt-20 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white">
                <p className="mx-4 hidden sm:flex  py-4">
                  choose a service below
                </p>
                <div className="border hidden sm:flex "></div>
                <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
                  <div className="flex items-center gap-x-5">
                    <FaUserGroup />
                    <p
                      onClick={() => {
                        handleScreenChange("screen1");
                      }}
                      className=" capitalize"
                    >
                      interview prep
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <FaLinkedin />
                    <p
                      onClick={() => {
                        handleScreenChange("screen2");
                      }}
                      className=" capitalize"
                    >
                      linkedIn profile review
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <BsFileEarmarkText />
                    <p onClick={() => {}} className="capitalize">
                      cv/resume review
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 ">
                    <CiChat1 />
                    <p onClick={() => {}} className="capitalize">
                      career advisor chat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* left side big screen modal */}
          <div className="hidden sm:flex">
            <div className="border mt-20 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white">
              <p className="mx-4 hidden sm:flex  py-4">
                choose a service below
              </p>
              <div className="border hidden sm:flex "></div>
              <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
                <div className="flex items-center gap-x-5">
                  <FaUserGroup />
                  <p
                    onClick={() => {
                      handleScreenChange("screen1");
                    }}
                    className=" capitalize cursor-pointer"
                  >
                    interview prep
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <FaLinkedin />
                  <p
                    onClick={() => {
                      handleScreenChange("screen2");
                    }}
                    className=" capitalize cursor-pointer"
                  >
                    linkedIn profile review
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <BsFileEarmarkText />
                  <p onClick={() => {}} className="capitalize cursor-pointer">
                    cv/resume review
                  </p>
                </div>
                <div className="flex items-center gap-x-5 ">
                  <CiChat1 />
                  <p onClick={() => {}} className="capitalize cursor-pointer">
                    career advisor chat
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          {/* screen 1 */}
          {currentPage === "screen1" && (
            <div className="border-dashed border-2 rounded-[10px] px-2 space-y-10 py-5 sm:w-[60%] w-[100%] mt-10">
              <p className="">interview prep</p>
              <p className="px-5">
                Interview Prep helps you get comprehensive access to possible
                questions and their answers in preparation for your next job
                interview.
              </p>
              <form className="flex flex-col gap-y-3 mx-5 ">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Job Title</label>
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    className="border text-[18px] py-2 px-3 rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Job Description</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter Job Description"
                    className="border text-[18px] py-2 px-3 rounded-[10px]"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Interview Date</label>
                  <input
                    type="date"
                    className="border py-2 px-3 rounded-[10px] w-[100%]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Upload your document
                  </label>
                  <input
                    type="file"
                    // onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  />
                  <button
                    type="submit"
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* screen 2 */}
          {currentPage === "screen2" && (
            <div className="border-dashed border">
              <p>yo</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
