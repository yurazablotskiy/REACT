import React, { useState } from 'react';

import Costs from './Components/Costs/Costs';
import NewCost from './Components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Пральна машина',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2022, 11, 25),
    description: 'Ноутбук',
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date(2022, 3, 1),
    description: 'Годинниик',
    amount: 49.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
