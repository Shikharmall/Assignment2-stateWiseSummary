// TreeMapChart.js

import React from 'react';
import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';

const TreeMapChart1 = ({ states, selectedState, onStateClick }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          data={states}
          dataKey="temperature"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent selectedState={selectedState} onStateClick={onStateClick} />}
        >
          {/* Optional: add Tooltip */}
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

const CustomizedContent = ({ root, depth, x, y, width, height, index, payload, selectedState, onStateClick }) => {
  const handleClick = () => {
    onStateClick(payload);
  };

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: payload === selectedState ? 'lightgray' : 'white',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
        onClick={handleClick}
      />
      {depth === 1 ? (
        <text x={x + width / 2} y={y + height / 2} textAnchor="middle" fill="#fff" fontSize={14}>
          {payload?.name || ''}
        </text>
      ) : null}
    </g>
  );
};

export default TreeMapChart1;
