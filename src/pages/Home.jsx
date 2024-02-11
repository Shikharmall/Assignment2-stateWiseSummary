import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import TreeMapChart from "./TreeMapChart";

const statesData = [
  // Sample data, you can replace it with your actual data
  {
    name: "State A",
    temperature: 30,
    population: 1000000,
    cities: [{ name: "City A1", info: "Some info" } /*...*/],
  },
  {
    name: "State B",
    temperature: 25,
    population: 800000,
    cities: [{ name: "City B1", info: "Some info" } /*...*/],
  },
  // ...
];

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
      <div>
        <TreeMapChart />
      </div>

      {/*<div className="flex justify-center m-3">
        <div className="w-1/2 flex lg:flex-row md:flex-row sm:flex-col xs:flex-col">
          <input
            type="text"
            name="societyName"
            id="first-name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block lg:w-3/4 md:w-3/4 p-2.5 m-1 sm:w-full xs:w-full"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <select
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block lg:w-1/4 md:w-1/4 p-2.5 m-1 sm:w-full xs:w-full"
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {loader ? (
          <p>loading...</p>
        ) : (
          <>
            {weatherData === undefined || weatherData === null ? (
              <p>City not found..</p>
            ) : (
              <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs shadow">
                <div className="font-bold text-xl">
                  {weatherData?.location?.name}
                </div>
                <div className="text-sm text-gray-500">
                  {weatherData?.location?.localtime}
                </div>
                <div className="text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                  <img
                    className="w-full h-full"
                    src={weatherData?.current?.condition?.icon}
                    alt="condition"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  {unit === "C" ? (
                    <div className="font-medium text-4xl">
                      {weatherData?.current?.temp_c}° C
                    </div>
                  ) : null}

                  {unit === "F" ? (
                    <div className="font-medium text-4xl">
                      {weatherData?.current?.temp_f}° F
                    </div>
                  ) : null}
                  <div className="flex flex-col items-center ml-6">
                    <div>{weatherData?.current?.condition?.text}</div>
                    <div className="mt-1">
                      <span className="text-sm">
                        <i className="far fa-long-arrow-up"></i>
                      </span>
                      <span className="text-sm font-light text-gray-500">
                        28°C
                      </span>
                    </div>
                    <div>
                      <span className="text-sm">
                        <i className="far fa-long-arrow-down"></i>
                      </span>
                      <span className="text-sm font-light text-gray-500">
                        20°C
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-6">
                  <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Wind</div>
                    <div className="text-sm text-gray-500">
                      {weatherData?.current?.wind_kph}k/h
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Humidity</div>
                    <div className="text-sm text-gray-500">
                      {weatherData?.current?.humidity}%
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Visibility</div>
                    <div className="text-sm text-gray-500">
                      {weatherData?.current?.vis_km}km
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>*/}
    </>
  );
}
