import React, { useEffect, useState } from 'react';

const DynamicGrid = ({ children }) => {
  const [gridColumns, setGridColumns] = useState(1);

  useEffect(() => {
    const childrenCount = React.Children.count(children);

    if (childrenCount <= 5) {
      setGridColumns(1);
    } else if (childrenCount <=10) {
      setGridColumns(2);
    } else {
        setGridColumns(3);
    }
  }, [children]);

  return (
    <div className={`skills-list-${gridColumns}`}>
      {children}
    </div>
  );
};

export default DynamicGrid;
