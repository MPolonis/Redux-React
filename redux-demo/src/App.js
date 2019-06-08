import React from 'react';
import CommentsList from './CommentsListContainer';
import './App.css';
import DevTools from './DevTools';

const App = () => {

  return (

    <div className="App">
      <h1 className="App-header">Please share your opinion with us!</h1>
      <CommentsList />
      <DevTools />
    </div>
  );
}

export default App;
