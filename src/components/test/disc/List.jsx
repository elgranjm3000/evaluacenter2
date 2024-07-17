import React, { useState } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    marginBottom: '4px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    cursor: 'move',
  },
  dragging: {
    opacity: 0.5,
  },
}));

const List = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const [draggingItem, setDraggingItem] = useState(null);
  const classes = useStyles();

  const handleDragStart = (e, item) => {
    setDraggingItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    const draggedIndex = items.findIndex((item) => item.id === draggingItem.id);
    const targetIndex = items.findIndex((item) => item.id === targetItem.id);
    const newItems = [...items];

    newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggingItem);

    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${classes.item} ${item === draggingItem ? classes.dragging : ''}`}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, item)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, item)}
        >
          <DragIndicatorIcon style={{ color: 'black' }} />
          <div className="details" style={{ color: 'black' }}>
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
