import React from 'react';
import NavBar from './Components/Navbar/Navbar.js';
import HomePage from './Pages/HomePage/HomePage.js';
import BlogPage from './Pages/BlogPage/BlogPage.js';
import AboutPage from './Pages/AboutPage/AboutPage.js';
import ServicesPage from './Pages/ServicesPage/ServicesPage.js';
import ReachUsAt from './Components/ReachUsAt/ReachUsAt.js';
import Work from './Components/WorkTogether/Work.js';
import Footer from './Components/Footer/Footer';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SurveyForm from './Components/SurveyForm/SurveyForm.js';


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{overflow: 'hidden'}}>

                <Router basename="/">
                    <NavBar/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path="/blog" component={BlogPage}/>
                        <Route exact path='/about' component={AboutPage}/>
                        <Route exact path='/workwithus' component={Work}/>
                        <Route exact path='/services' component={ServicesPage}/>
                        <Route exact path='/surveyform' component={SurveyForm}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;
