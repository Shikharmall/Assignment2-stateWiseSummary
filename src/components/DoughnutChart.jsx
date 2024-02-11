import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({ randomObjects }) => {
  console.log(randomObjects);

  const data1 = [
    {
      name: "Uttar Pradesh",
      value: 200,
      population: "199,812,341",
      temperature: 39.3,
      fundPerformance: 12.5,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 30 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Maharashtra",
      value: 150,
      population: "112,374,333",
      temperature: 31.9,
      fundPerformance: 8.2,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 40 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 15 },
      ],
    },
    {
      name: "Madhya Pradesh",
      value: 120,
      population: "72,626,809",
      temperature: 36.9,
      fundPerformance: 10.1,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 35 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Tamil Nadu",
      value: 100,
      population: "72,147,030",
      temperature: 37.3,
      fundPerformance: 15.8,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 50 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Karnataka",
      value: 80,
      population: "61,095,297",
      temperature: 28.9,
      fundPerformance: 9.7,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 45 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Gujarat",
      value: 70,
      population: "60,439,692",
      temperature: 20.1,
      fundPerformance: 11.3,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 40 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Punjab",
      value: 60,
      population: "27,743,338",
      temperature: 24.3,
      fundPerformance: 7.5,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 50 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Tripura",
      value: 50,
      population: "3,673,917",
      temperature: 25.1,
      fundPerformance: 13.2,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 30 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Mizoram",
      value: 40,
      population: "1,097,206",
      temperature: 26.4,
      fundPerformance: 8.9,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 35 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Ladakh",
      value: 30,
      population: "274,000",
      temperature: 21.1,
      fundPerformance: 10.6,
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 40 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 15 },
      ],
    },
  ];

  const mainLabels = randomObjects.map((item) => item.name);

  const mainDatas1 = randomObjects[0]?.assetAllocation?.map(
    (item) => item.percentage
  );
  const mainDatas2 = randomObjects[1]?.assetAllocation?.map(
    (item) => item.percentage
  );
  const mainDatas3 = randomObjects[2]?.assetAllocation?.map(
    (item) => item.percentage
  );
  const mainDatas4 = randomObjects[3]?.assetAllocation?.map(
    (item) => item.percentage
  );
  const mainDatas5 = randomObjects[4]?.assetAllocation?.map(
    (item) => item.percentage
  );

  console.log(mainLabels);

  const data = {
    labels: ["Domestic Equity", "International Equity", "Bonds", "Cash"],
    datasets: [
      {
        label: randomObjects[0].name,
        data: mainDatas1,
        backgroundColor: ["red", "blue", "yellow", "green"],
        borderColor: ["red", "blue", "yellow", "green"],
        borderWidth: 1,
      },
      {
        label: randomObjects[1].name,
        data: mainDatas2,
        backgroundColor: ["red", "blue", "yellow", "green"],
        borderColor: ["red", "blue", "yellow", "green"],
        borderWidth: 1,
      },
      {
        label: randomObjects[2].name,
        data: mainDatas3,
        backgroundColor: ["red", "blue", "yellow", "green"],
        borderColor: ["red", "blue", "yellow", "green"],
        borderWidth: 1,
      },
      {
        label: randomObjects[3].name,
        data: mainDatas4,
        backgroundColor: ["red", "blue", "yellow", "green"],
        borderColor: ["red", "blue", "yellow", "green"],
        borderWidth: 1,
      },
      {
        label: randomObjects[4].name,
        data: mainDatas5,
        backgroundColor: ["red", "blue", "yellow", "green"],
        borderColor: ["red", "blue", "yellow", "green"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-3 w-1/2" id="flexApp1">
      <h3 style={{ fontFamily: "Fahkwang" }}>Asset Allocation</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
