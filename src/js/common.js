import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
         <h1>my react app yup</h1>
      </div>
    );
  }
}


export default App;



ReactDOM.render(<App />, document.getElementById('root'));