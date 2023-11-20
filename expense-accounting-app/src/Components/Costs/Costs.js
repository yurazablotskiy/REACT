import React, { useState } from 'react';

import Card from '../UI/Card';
import CostFilter from './CostFilter';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

import './Costs.css';

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter valueYear={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
