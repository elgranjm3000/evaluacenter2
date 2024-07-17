// DroppableList.jsx
import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';

const DroppableList = ({ items, setItems }) => {
  const [, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (draggedItem) => {
      const newItems = [...items];
      const draggedIndex = newItems.findIndex((item) => item.id === draggedItem.id);
      const targetIndex = newItems.findIndex((item) => item.id === draggedItem.id); // Aquí debes pasar el índice del objetivo correcto

      if (draggedIndex !== -1 && targetIndex !== -1) {
        newItems.splice(draggedIndex, 1);
        newItems.splice(targetIndex, 0, draggedItem);
        setItems(newItems);
      }
    },
  }));

  return (
    <div ref={drop} className="sortable-list">
      {items.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DroppableList;
