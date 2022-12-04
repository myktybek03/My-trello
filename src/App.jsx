import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Form from './components/FormTrello/Form';
import TodoForm from './components/ContentTrello';

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="trello" element={<TodoForm />} />
          <Route path="*" element={<Form />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
