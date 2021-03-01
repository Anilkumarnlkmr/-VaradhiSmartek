import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import login from './components/Post/login/login';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1 style={{textAlign:'center'}}>Anil Kumar</h1>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
