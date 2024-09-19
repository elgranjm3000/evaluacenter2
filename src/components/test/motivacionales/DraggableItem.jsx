import React, { useState,useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Box from '@mui/material/Box';

const ItemType = 'DRAGGABLE_ITEM';

const DraggableItem = ({ item, index, moveItem }) => {  
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  //const [isDragging, setIsDragging] = useState(false);

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
    ref.current.style.transition = 'none';
  };

  const handleTouchMove = (e) => {
    // Custom behavior during touch move
   
    e.target.style.opacity = '0.5';

    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    setIsDraggingOver(false);
    e.target.style.opacity = '1';
  };

  const handleTouchCancel = (e) => {
    setIsDraggingOver(false);
    e.target.style.opacity = '1';
  };


  const handleDragStart = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto
  };
  
  const handleDragEnd = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto
  };


  useEffect(() => {
    const element = ref.current;
    element.addEventListener('touchmove', handleTouchMove, { passive: false }); // Set passive to false

    return () => {
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
 

  return (
    <Box
  ref={ref}
  style={{
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
    backgroundColor: isDraggingOver ? 'lightblue' : 'white',
    transition: 'background-color 0.3s ease',
  }}
  // Eventos de arrastre del mouse
  onDragStart={handleDragStart}
  onDragEnd={handleDragEnd}
  onDragEnter={() => setIsDraggingOver(true)}
  onDragLeave={() => setIsDraggingOver(false)}
  onDragOver={(e) => e.preventDefault()} // Previene el comportamiento por defecto del navegador
  // Eventos táctiles
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
  onTouchCancel={handleTouchCancel}

>
      <div className="item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
        <DragIndicatorIcon style={{ color: 'black', marginRight: '10px' }} />
        <span>{item.text}</span>
      </div>
    </Box>
  );
};

export default DraggableItem;
