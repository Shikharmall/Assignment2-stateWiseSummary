import React from "react";
import { Treemap, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { Container, Row, Col } from "react-grid-system";
import "../assets/common.css";
import { Link, useNavigate } from "react-router-dom";

const TreeMapChart = () => {
  const data = [
    {
      name: "Uttar Pradesh",
      value: 200,
      population: "199,812,341",
      temperature: 39.3,
      id: 1,
    },
    {
      name: "Maharashtra",
      value: 150,
      population: "112,374,333",
      temperature: 31.9,
      id: 2,
    },
    {
      name: "Madhya Pradesh",
      value: 120,
      population: "72,626,809",
      temperature: 36.9,
      id: 3,
    },
    {
      name: "Tamil Nadu",
      value: 100,
      population: "72,147,030",
      temperature: 37.3,
      id: 4,
    },
    {
      name: "Karnataka",
      value: 80,
      population: "61,095,297",
      temperature: 28.9,
      id: 5,
    },
    {
      name: "Gujarat",
      value: 70,
      population: "60,439,692",
      temperature: 20.1,
      id: 6,
    },
    {
      name: "Punjab",
      value: 60,
      population: "27,743,338",
      temperature: 24.3,
      id: 7,
    },
    {
      name: "Tripura",
      value: 50,
      population: "3,673,917",
      temperature: 25.1,
      id: 8,
    },
    {
      name: "Mizoram",
      value: 40,
      population: "1,097,206",
      temperature: 26.4,
      id: 9,
    },
    {
      name: "Ladakh",
      value: 30,
      population: "274,000",
      temperature: 21.1,
      id: 10,
    },
  ];

  /*const calculateColor = (temperature) => {
    const minTemperature = 0;
    const maxTemperature = 40;
    const normalizedTemperature = Math.min(
      1,
      Math.max(
        0,
        (temperature - minTemperature) / (maxTemperature - minTemperature)
      )
    );
    const red = Math.round(255 * normalizedTemperature);
    const blue = Math.round(255 * (1 - normalizedTemperature));
    return `rgb(${red}, 0, ${blue})`;
  };*/

  const calculateColorr = (temperature,id) => {
    // Normalize temperature to a value between 0 and 1
    const normalizedTemperature = (temperature - 0) / (40 - 0);
    // Use linear interpolation to calculate the color
    const blue = Math.round(255 * (1 - normalizedTemperature));
    const red = Math.round(255 * normalizedTemperature);
    return `rgb(${red}, 0, ${blue})`;
  };

  const calculateColor = (temperature) => {
    // Adjust the temperature range based on your data
    const minTemperature = 0;
    const maxTemperature = 40;

    // Interpolate color between red and blue based on temperature
    const normalizedTemperature = Math.max(
      0,
      Math.min(
        1,
        (temperature - minTemperature) / (maxTemperature - minTemperature)
      )
    );
    const red = Math.floor(255 * normalizedTemperature);
    const blue = Math.floor(255 * (1 - normalizedTemperature));

    return `rgb(${red}, 0, ${blue})`;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value, population, temperature } = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>
            <strong>{name}</strong>
          </p>
          <p>Population: {population}</p>
          <p>Temperature: {temperature}°C</p>
        </div>
      );
    }
    return null;
  };

  const navigate = useNavigate();

  const openDetails = () => {
    console.log("pressed!");
    navigate(`/opendetails`);
  };

  return (
    <div className="m-2">
      <Container fluid>
        <Row>
          <Col /*sm={12} md={6} lg={4} xl={3}*/ onClick={() => openDetails()} >
            <ResponsiveContainer width="100%" height={300}>
              <Treemap
                width={300}
                height={300}
                data={data}
                dataKey="value"
                ratio={4 / 3}
                stroke="#fff"
                //fill="#8884d8"
              >
                <Tooltip content={<CustomTooltip />} />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    //fill={`#${index % 8}8c34`}
                    fill={calculateColor(entry.temperature)}
                    data={entry}
                    onMouseOver={(e) =>
                      e.target.setAttribute("stroke", "black")
                    }
                    onMouseOut={(e) => e.target.setAttribute("stroke", "none")}
                    
                  />
                ))}
              </Treemap>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TreeMapChart;
