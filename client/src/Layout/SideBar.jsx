import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNavs } from "../Navigation/index";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
import { MdAddTask, MdCancelPresentation } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { GrInProgress, GrCompliance } from "react-icons/gr";
import { BiLogInCircle } from "react-icons/bi";
import { logout } from "../store/Reducers/authReducer";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.auth);
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNavs(role);
    setAllNav(navs);
  }, [role]);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(true)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#283046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              className="w-full h-full bg-gray-500 rounded-lg"
              src="http://localhost:3000/app-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="px-[16px]">
          <ul>
            <li>
              <Link
                to="/user/dashboard"
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span>
                  <AiFillDashboard />
                </span>
                <span className="items-center font-serif font-semibold">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/user/dashboard/create-task"
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span>
                  <MdAddTask />
                </span>
                <span className="items-center font-serif font-semibold">
                  Create New
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/user/dashboard/task-list"
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span>
                  <FaTasks />
                </span>
                <span className="items-center font-serif font-semibold">
                  New Task
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/user/dashboard/inprogress"
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span className="w-30 h-15">
                  <GrInProgress />
                </span>
                <span className="items-center font-serif font-semibold">
                  In Progress
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/user/dashboard/complete"
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span className="w-30 h-15">
                  <GrCompliance />
                </span>
                <span className="items-center font-serif font-semibold">
                  completed
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/user/dashboard/cencel"
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span className="w-30 h-15">
                  <MdCancelPresentation />
                </span>
                <span className="items-center font-serif font-semibold">
                  Canceled
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/user/dashboard/profile"
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span className="w-30 h-15">
                  <CgProfile />
                </span>
                <span className="items-center font-serif font-semibold">
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => dispatch(logout({ navigate }))}
                className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 "
              >
                <span>
                  <BiLogInCircle />
                </span>
                <span className="items-center font-serif font-semibold">
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
