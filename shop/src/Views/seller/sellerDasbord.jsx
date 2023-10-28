import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiPrinterCloudLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/admin.png";
function sellerDasbord() {
  const state = {
    series: [
      {
        name: "orders",
        data: [34, 65, 43, 65, 34, 34, 56, 23, 67, 23, 45],
      },
      {
        name: "Revenue",
        data: [34, 62, 34, 69, 24, 32, 56, 33, 67, 20, 47],
      },
      {
        name: "Sellers",
        data: [78, 32, 34, 32, 34, 34, 43, 56, 65, 67, 78],
      },
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
        curve: ["smooth", "straigth", "stepline"],
        lineCap: "butt",
        color: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        category: [
          "jan",
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

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="felx flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">$756</h2>
            <span className="text-md font-medium ">Total Sales</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#24c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="felx flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">20</h2>
            <span className="text-md font-medium ">Product</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#d85dc01f] flex justify-center items-center text-xl">
            <RiPrinterCloudLine className="text-[#3145c7] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="felx flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium ">Seller</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
            <FaUsers className="text-[#7532da] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="felx flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">40</h2>
            <span className="text-md font-medium ">Orders</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
            <AiOutlineShoppingCart className="text-[#7367f0] shadow-lg" />
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

        <div className="w-full  lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6] ">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent Seller message
              </h2>
              <Link className="font-semibold text-sm text-[#d0d2d6]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-1 border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full  z-10 ">
                    <img
                      src={logo1}
                      alt=""
                      className=" w-full rounded-full  h-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-md border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm  font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      Asslamualikum, How are you?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full  z-10 ">
                    <img
                      src={logo1}
                      alt=""
                      className=" w-full rounded-full  h-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-md border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm  font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      Asslamualikum, How are you?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full  z-10 ">
                    <img
                      src={logo1}
                      alt=""
                      className=" w-full rounded-full  h-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-md border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm  font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      Asslamualikum, How are you?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-[#283046] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
            Recent Order
          </h2>
          <Link className="font-semibold text-sm text-[#d0d2d6]">View All</Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  #455fdfjjr
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  $780
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <Link>view</Link>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  #455fdfjjr
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  $780
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <Link>view</Link>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  #455fdfjjr
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  $780
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <Link>view</Link>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  #455fdfjjr
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  $780
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <span>Panding</span>
                </td>
                <td className="py-3 px-6 font-medium whitespace-nowrap">
                  <Link>view</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default sellerDasbord;
