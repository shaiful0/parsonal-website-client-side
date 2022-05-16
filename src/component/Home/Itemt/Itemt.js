import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../useItemDetails/useItemDetails';

const Itemt = () => {
  const { itemId } = useParams();
  const [item] = useItemDetails(itemId);
  return (
    <div>
      <h2>this is item page:{item.name}</h2>
    </div>
  );
};

export default Itemt;