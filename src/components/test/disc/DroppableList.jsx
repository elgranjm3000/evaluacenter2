import React from 'react';
import { useDrag, useDrop,DndProvider } from 'react-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DraggableItem from './DraggableItem';
import { TouchBackend } from 'react-dnd-touch-backend';

const ItemType = 'ITEM';

/*const DraggableItem = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="item">
      <DragIndicatorIcon style={{ color: '#9b9b9b' }} />
      <div className="details" style={{ color: 'black' }}>
        <span>{item.text}</span>
      </div>
    </div>
  );
};
*/
const DroppableList = ({ items, setItems }) => {
  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div style={{position:"relative",overflow:"hidden"}}>
        <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>

      {items.map((item, index) => (
        <DraggableItem
          key={item.id}
          item={item}
          index={index}
          moveItem={moveItem}
        />
      ))}
       </DndProvider>
    </div>
  );
};

export default DroppableList;
