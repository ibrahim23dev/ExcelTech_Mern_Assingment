import React, { useEffect } from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import CanvasJSReact from '@canvasjs/react-charts';
import Plot from 'react-plotly.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import Chart from "react-apexcharts";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { useDispatch, useSelector } from "react-redux";
import { get_admin_dashboard_index_data } from "../../store/Reducers/dashboardIndexReducer";

const AdminDasboard = () => {
  //const { userInfo } = useSelector((state) => state.auth);
  const { totalProduct, totalSeller,  recentMessage } =
    useSelector((state) => state.dashboardIndex);

  
  const dispatch = useDispatch();

 // useEffect(() => {
   // dispatch(get_admin_dashboard_index_data());
  //}, []);

  const options = {
    animationEnabled: true,
    toolTip: {
        shared: true
    },
    data: [
        {
            type: "spline",
            name: "Teesta",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "1" },
                { y: 150, label: "2" },
                { y: 152, label: "3" },
                { y: 148, label: "4" },
                { y: 142, label: "5" },
                { y: 150, label: "6" },
                { y: 146, label: "7" },
                { y: 149, label: "8" },
                { y: 153, label: "9" },
                { y: 158, label: "10" },
                { y: 154, label: "11" },
                { y: 150, label: "12" }
            ]
        },
        {
            type: "spline",
            name: "Bhanga",
            showInLegend: true,
            dataPoints: [
                { y: 172, label: "Jan" },
                { y: 173, label: "Feb" },
                { y: 175, label: "Mar" },
                { y: 172, label: "Apr" },
                { y: 162, label: "May" },
                { y: 165, label: "Jun" },
                { y: 172, label: "Jul" },
                { y: 168, label: "Aug" },
                { y: 175, label: "Sept" },
                { y: 170, label: "Oct" },
                { y: 165, label: "Nov" },
                { y: 169, label: "Dec" }
            ]
        },
        {
            type: "spline",
            name: "Charsindur",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "1" },
                { y: 150, label: "2" },
                { y: 152, label: "3" },
                { y: 148, label: "4" },
                { y: 142, label: "5" },
                { y: 150, label: "6" },
                { y: 146, label: "7" },
                { y: 149, label: "8" },
                { y: 153, label: "9" },
                { y: 158, label: "10" },
                { y: 154, label: "11" },
                { y: 150, label: "12" }
            ]
        },
        {
            type: "spline",
            name: "Mohanonda",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "1" },
                { y: 150, label: "2" },
                { y: 152, label: "3" },
                { y: 148, label: "4" },
                { y: 142, label: "5" },
                { y: 150, label: "6" },
                { y: 146, label: "7" },
                { y: 149, label: "8" },
                { y: 153, label: "9" },
                { y: 158, label: "10" },
                { y: 154, label: "11" },
                { y: 150, label: "12" }
            ]
        },
        {
            type: "spline",
            name: "Dhaleshwari",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "1" },
                { y: 150, label: "2" },
                { y: 152, label: "3" },
                { y: 148, label: "4" },
                { y: 142, label: "5" },
                { y: 150, label: "6" },
                { y: 146, label: "7" },
                { y: 149, label: "8" },
                { y: 153, label: "9" },
                { y: 158, label: "10" },
                { y: 154, label: "11" },
                { y: 150, label: "12" }
            ]
        }
    ]
};

 const data = [
  { name: 'Bhanga', value: 20 },
  { name: 'Charsindur', value: 15 },
  { name: 'Mohanonda', value: 25 },
  { name: 'Teesta', value: 30 },
  { name: 'Dhaleshwari', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
  const state = {
    series: [
      {
        name: "Total Toll collection",
        data: [1000000,2000000,3000000,4000000,5000000],
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
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Teesta",
          "Bhanga",
          "Charsindur",
          "Mohanonda",
          "Dhaleshwari"
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
               "Teesta",
               "Bhanga",
               "Charsindur",
               "Mohanonda",
               "Dhaleshwari"
              
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
    <div className="px-2 md:px-7 py-5 grid">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalSeller}</h2>
            <span className="text-md font-medium">Toll Collection</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalProduct}</h2>
            <span className="text-md font-medium">Number of Vehicle</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
            <FaUsers className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalSeller}</h2>
            <span className="text-md font-medium">Toll Collection</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalSeller}</h2>
            <span className="text-md font-medium">Toll Collection</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap  lg:pl-4 mt-6 lg:mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#283046] p-4 rounded-md">
            <h3 className="text-center text-white pt-4 font-extrabold text-[20px]">Toll Collection Status[7,411,980]</h3>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#283046] p-4 rounded-md">
            <h3 className="text-center text-white pt-4 font-extrabold text-[20px]">Toll Collection Status [7,411,980]</h3>
           <PieChart width={350} height={364}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={90}
        outerRadius={110}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
          </div>
        </div>
        <div className="w-full lg:w-7/12 lg:pr-3 mt-6 lg:mt-7">
          <div className="w-full bg-[#283046] p-4 rounded-md">
           <CanvasJSChart options = {options} />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-7">
          <div className="w-full bg-[#283046] p-4 rounded-md">
            <Plot/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDasboard;
