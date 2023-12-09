import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './TodoApp';

function App() {

  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  );
  
}

export default App
