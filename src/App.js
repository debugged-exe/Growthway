import React from 'react';
import HomePage from './Pages/HomePage/HomePage.js';


class App extends React.Component {
	constructor(){
			 super();
	 }

	render() {
    return (
    <div stylle = {{overflow: 'hidden'}}>
       <HomePage />
  </div>
    );
	}
}

export default App;
