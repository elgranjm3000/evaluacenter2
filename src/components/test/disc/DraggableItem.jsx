import React from 'react';
import { useDrag } from 'react-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <DragIndicatorIcon style={{ color: 'black' }} />
      <div className="details" style={{ color: 'black' }}>
        <span>{item.text}</span>
      </div>
    </div>
  );
};

export default DraggableItem;
