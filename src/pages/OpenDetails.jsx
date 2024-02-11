import React from "react";
import Header from "../partials/Header";

import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";

export default function OpenDetails() {
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

  function getRandomObjects(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const randomObjects = getRandomObjects(data1, 5);

  return (
    <>
      <Header />
      <div className="flex w-[100%]">
        <LineChart randomObjects={randomObjects} />
        <DoughnutChart randomObjects={randomObjects} />
      </div>
    </>
  );
}
