import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const ItemType = 'DRAGGABLE_ITEM';

const DraggableItem = ({ item, index, moveItem }) => {
  const [isSelected, setIsSelected] = useState(false);
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: isSelected ? '2px solid #2196f3' : '1px solid transparent',
        borderRadius: '4px',
        padding: '10px',
        margin: '5px 0',
        backgroundColor: isSelected ? 'rgba(33, 150, 243, 0.1)' : 'white',
        transition: 'background-color 0.3s, border 0.3s',
      }}
    >
      <div className="item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
        <DragIndicatorIcon style={{ color: 'black', marginRight: '10px' }} />
        <span>{item.text}</span>
      </div>
    </div>
  );
};

export default DraggableItem;
