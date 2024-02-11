import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineCart = ({ randomObjects }) => {
  const mainLabels = randomObjects.map((item) => item.name);

  const mainDatas1 = randomObjects[0]?.fundPerformance;
  const mainDatas2 = randomObjects[1]?.fundPerformance;
  const mainDatas3 = randomObjects[2]?.fundPerformance;
  const mainDatas4 = randomObjects[3]?.fundPerformance;
  const mainDatas5 = randomObjects[4]?.fundPerformance;

  const year = [2019, 2020, 2021, 2022, 2023];

  const data = {
    labels: year,
    datasets: [
      {
        label: mainLabels[0],
        data: mainDatas1,
        fill: false,
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: mainLabels[1],
        data: mainDatas2,
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: mainLabels[2],
        data: mainDatas3,
        fill: false,
        borderColor: "green",
        borderWidth: 2,
      },
      {
        label: mainLabels[3],
        data: mainDatas4,
        fill: false,
        borderColor: "yellow",
        borderWidth: 2,
      },
      {
        label: mainLabels[4],
        data: mainDatas5,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-3 w-1/2" id="flexApp1">
      <h3 style={{ fontFamily: "Fahkwang" }}>Fund Performance</h3>
      <Line data={data} />
    </div>
  );
};

export default LineCart;
