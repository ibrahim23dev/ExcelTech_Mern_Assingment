import React, { useEffect } from "react";
import { SiVirustotal } from "react-icons/si";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { MdFiberNew } from "react-icons/md";
import { GrCompliance,GrInProgress } from "react-icons/gr";
import Chart from "react-apexcharts";
//import customer from "../../assets/images/admin.png";
import { useSelector, useDispatch } from "react-redux";
//import { get_seller_dashboard_index_data } from "../../store/Reducers/dashboardIndexReducer";
//import moment from "moment";
//totalSeller
const UserDashboard = () => {
  //const { userInfo } = useSelector((state) => state.auth);
  const { totaltask } = useSelector((state) => state.task);

  const state = {
    series: [
      {
        name: "Total Task",
        data: [10, 20, 17, 13, 19, 25, 30, 12, 22, 18, 28, 15],
      },
      {
        name: "New Task",
        data: [5, 3, 7, 10,15, 9,12, 3, 4, 10, 13,4],
          },
      {
        name: "completed Task",
        data: [9, 6, 5, 7, 6, 12, 2, 1, 12, 6, 2, 4],
      },
      {
        name: "In Progress",
        data: [9, 6, 3, 4, 6, 10, 2, 1, 12, 6, 2, 4],
      },
      {
        name: "Canceled",
        data: [1, 4, 7, 3,2, 8, 2, 12, 3, 1, 0, 4],
      }
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  const dispatch = useDispatch();

  //useEffect(() => {
   // dispatch(get_seller_dashboard_index_data());
  //}, []);
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-5">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totaltask}</h2>
            <span className="text-md font-medium">Total Task</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <SiVirustotal className="text-[#7d85dd] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">12{ }</h2>
            <span className="text-md font-medium">New Task</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <MdFiberNew className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">22{ }</h2>
            <span className="text-md font-medium">In Progress Task</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <GrInProgress className="text-[#c2da27] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">30{ }</h2>
            <span className="text-md font-medium">Completed Task</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <GrCompliance className="text-[#1be167] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">4{ }</h2>
            <span className="text-md font-medium">Canceled Task</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <ImCancelCircle className="text-[#ce1335] shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#283046] p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent customer message
              </h2>
              <Link className="font-semibold text-sm text-[#d0d2d6]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-1 border-slate-600 ml-4">
                
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
