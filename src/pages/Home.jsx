import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import TreeMapChart from "./TreeMapChart";

export default function Home() {
  /*const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("C");
  const [loader, setLoader] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const chartData = {
    labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'],
    datasets: [
      {
        label: 'Temperature',
        data: [20, 22, 18, 25, 21],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const getWeatherDataFunc = async (city) => {
    setLoader(true);
    try {
      const weatherdata = await getWeatherAPI(city);
      if (weatherdata) {
        setWeatherData(weatherdata?.data);
        updateRecentSearches(city);
        setLoader(false);
      } else {
        setWeatherData(null);
        setLoader(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateRecentSearches = (newCity) => {
    const updatedRecentSearches = [...recentSearches.slice(0, 4), newCity];
    setRecentSearches(updatedRecentSearches);
  };

  console.log(weatherData);

  useEffect(() => {
    if (city) {
      getWeatherDataFunc(city);
    }
  }, [city, unit]);*/

  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <>
      <Header />
      <TreeMapChart />
    </>
  );
}
