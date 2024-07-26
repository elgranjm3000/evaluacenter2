import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const ItemType = 'DRAGGABLE_ITEM';

const DraggableItem = ({ item, index, moveItem }) => {  
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    enter: () => {
      setIsDraggingOver(true);
    },
    leave: () => {
      setIsDraggingOver(false);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      setIsDraggingOver(false);
    },
    start: () => {
      setIsDraggingOver(true);
    }
  });

  drag(drop(ref));


  // Event handlers for touch events
  const handleTouchStart = (e) => {
    setIsDraggingOver(true);
    e.target.classList.add('touch-started');
  };

  const handleTouchMove = (e) => {
    // Custom behavior during touch move
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    setIsDraggingOver(false);
    e.target.classList.remove('touch-started');
  };

  const handleTouchCancel = (e) => {
    setIsDraggingOver(false);
    e.target.classList.remove('touch-started');
  };


  const handleDragStart = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto
  };
  
  const handleDragEnd = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto
  };
 

  return (
    <div
      ref={ref}      
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        backgroundColor: isDraggingOver ? 'lightblue' : 'white',
        transition: 'background-color 0.3s ease',
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={() => setIsDraggingOver(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className="item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
        <DragIndicatorIcon style={{ color: 'black', marginRight: '10px' }} />
        <span>{item.text}</span>
      </div>
    </div>
  );
};

export default DraggableItem;
