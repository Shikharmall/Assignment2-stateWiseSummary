import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineCart = ({ randomObjects }) => {

  const mainLabels = randomObjects.map((item) => item.name);

  const year = [2019, 2020, 2021, 2022, 2023];

  const data = {
    labels: year,
    datasets: [
      {
        label: mainLabels[0],
        data: [10, 20, 15, 25, 18], // Replace with your actual data
        fill: false,
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: mainLabels[1],
        data: [10, 20, 15, 65, 18], // Replace with your actual data
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: mainLabels[2],
        data: [10, 60, 85, 25, 18], // Replace with your actual data
        fill: false,
        borderColor: "green",
        borderWidth: 2,
      },
      {
        label: mainLabels[3],
        data: [10, 20, 35, 25, 18], // Replace with your actual data
        fill: false,
        borderColor: "yellow",
        borderWidth: 2,
      },
      {
        label: mainLabels[4],
        data: [10, 20, 35, 85, 18], // Replace with your actual data
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-3 w-1/2">
      <h3 style={{ fontFamily: "Fahkwang" }}>Fund Performance</h3>
      <Line data={data} />
    </div>
  );
};

export default LineCart;
