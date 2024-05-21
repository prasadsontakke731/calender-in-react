import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Calendar from './components/Calendar';
import "./App.css"

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Calendar />
    </DndProvider>
  );
};

export default App;