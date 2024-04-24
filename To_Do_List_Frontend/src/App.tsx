import React from 'react';
import Navigation from './Component/Navigation';
import ListToDo from './Component/ListTodo';
import { Route, Switch } from 'react-router-dom';
import Task from './Component/Task';

function App() {
  return (
    <>
    <Navigation/>
    
    <Switch>
      <Route exact path="/todo-list"><ListToDo/></Route>
      <Route exact path="/edit-task/:id"><Task/></Route>
      <Route exact path="/task"><ListToDo/></Route>
      <Route exact path="/add-task"><Task/></Route>
    </Switch>
    </>
  );
}
export default App;
