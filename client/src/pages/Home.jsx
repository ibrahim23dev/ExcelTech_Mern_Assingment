import React from "react";

import img1 from "../assets/Images/regnum.jpg";
//import img2 from "./images/main_banner_2.png";
//import img3 from "./images/main_banner_3.jpg";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <section>
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div>
                  <img
                    src="http://localhost:3001/banner.jpeg"
                    className="h-50% w-[1600px] "
                  />
                </div>
                <div className="main-banner-content position-absolute  "></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-center font-extrabold pt-10 text-3xl pb-10">
            Overview
          </h3>
          <p className="text-xl pl-5 scroll-pr-3 font-serif">
            RIT Incorporated is a sister concern of Regnum Resource Ltd and Sony
            Chocolate Industries Ltd. Regnum Resource is based on Traffic
            Management Products and Systems technologies,highly specialised on
            controlling overload trucks. Earlier (2005) we start our service.RIT
            Incorporated is the complete solution of your thinking.
            <br />
            <br />
          </p>
        </section>
        <section className="section-3">
          <h3 className=" manipal-experience text-center text-white ">
            {" "}
            <b>Regnum Resource Limited Experience </b>
          </h3>
          <div className="flex justify-center items-center gap-6">
            <div className="col-md-12 col-lg-12">
              <div className="flex flex-wrap justify-center gap-9">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="h-12 w-12"
                      src="http://localhost:3001/success.png"
                      alt="ChitChat Logo"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black font-serif">
                      Success Stories
                    </div>
                    <p className="text-slate-500">
                      {" "}
                      Thrilled to hear that you reached your goal
                    </p>
                  </div>
                </div>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="h-12 w-12"
                      src="http://localhost:3001/innovative.png"
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black font-serif">
                      Innovative Solutions
                    </div>
                    <p className="text-slate-500">
                      RIT Incorporated always try to give you a solution
                    </p>
                  </div>
                </div>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="h-12 w-12"
                      src="http://localhost:3001/premium-48.png"
                      alt="ChitChat Logo"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black font-serif">
                      Premium Quality
                    </div>
                    <p className="text-slate-500">
                      A high-quality software is secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-28 pl-10 pr-10 pt-40">
            <div className="col-3 pt-10">
              <video width="320" height="240" controls />
              <source className="rounded-md" src="" type="video/mp4" />
              <source src="" type="video/ogg" />
            </div>
            <div className="col-2 pt-10">
              <video width="320" height="240" controls />
              <source src="https://youtu.be/xC3wNLUYeHU?si=GGQ8XZd25PDgc9bA" type="video/mp4" />
              <source src="https://youtu.be/xC3wNLUYeHU?si=GGQ8XZd25PDgc9bA" type="video/ogg" />
            </div>
            <div className="col-1 pt-10">
              <video width="320" height="240" controls />
              <source src="" type="video/mp4" />
              <source src="" type="video/ogg" />
            </div>
          </div>

          <div className="text-center pt-4">
            <a className="home-see-all-btn" href="">
              View All
            </a>
          </div>
        </section>

        <section>
          <h4 className="section-4 text-center ">
            {" "}
            <b>Centre of Excellence</b>
          </h4>
          <div className="flex flex-row gap-14">
            <div className="row">
              <div className="col-4">
                <h1>hello</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h1>hello</h1>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <h1>hello</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
