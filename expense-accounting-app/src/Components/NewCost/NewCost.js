import React, { useState } from 'react';
import CostForm from './CostForm';

import './NewCost.css';

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Додати нові витрати</button>
      )}
      {isFormVisible && (
        <CostForm
          onCancel={cancelCostHandler}
          onSaveCostData={saveCostDataHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
