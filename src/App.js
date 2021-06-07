import React from 'react';
import NavBar from './Components/Navbar/Navbar.js';
import HomePage from './Pages/HomePage/HomePage.js';
import BlogPage from './Pages/BlogPage/BlogPage.js';
import Faqs from './Components/Faqs/faqfun.js';
import {
  HashRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import SurveyForm from './Components/SurveyForm/SurveyForm.js';

class App extends React.Component {
	constructor(){
			 super();
	 }

	render() {
    return (
    <div style = {{overflow: 'hidden'}}>

				<Router basename="/">
        <NavBar/>
         <Switch>
           <Route exact path='/' component={HomePage}/>
           <Route exact path="/blog" component={BlogPage} />
					 <Route exact path='/faq' component={Faqs}/>
           <Route exact path='/surveyform' component={SurveyForm}/>
         </Switch>
        </Router>
  </div>
    );
	}
}

export default App;
