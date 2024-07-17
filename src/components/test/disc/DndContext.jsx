// DndContext.jsx
import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

const DndContext = ({ children }) => (
  <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
    {children}
  </DndProvider>
);

export default DndContext;
