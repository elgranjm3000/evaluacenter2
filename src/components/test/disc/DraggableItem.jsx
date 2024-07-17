import React from 'react';
import { useDrag } from 'react-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import './App.css'

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
      <div className="item" style={{ color: 'black' }}>
          <DragIndicatorIcon style={{ color: 'black' }} />
            <span>{item.text}</span>
      </div>
    </div>
  );
};

export default DraggableItem;
