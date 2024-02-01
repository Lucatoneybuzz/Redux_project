import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
