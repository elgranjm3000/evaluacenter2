import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';

const DroppableList = ({ items, setItems }) => {
  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = items[dragIndex];
    const updatedItems = [...items];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <div className="sortable-list">
      {items.map((item, index) => (
        <DroppableItem key={item.id} item={item} index={index} moveItem={moveItem} />
      ))}
    </div>
  );
};

const DroppableItem = ({ item, index, moveItem }) => {
  const [, drop] = useDrop({
    accept: 'ITEM',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={drop}>
      <DraggableItem item={{ ...item, index }} />
    </div>
  );
};

export default DroppableList;
