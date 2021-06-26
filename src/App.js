import React,{useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './Components/Navbar/Navbar.js';
import HomePage from './Pages/HomePage/HomePage.js';
import BlogPage from './Pages/BlogPage/BlogPage.js';
import AboutPage from './Pages/AboutPage/AboutPage.js';
import ServicesPage from './Pages/ServicesPage/ServicesPage.js';
import Work from './Components/WorkTogether/Work.js';
import Footer from './Components/Footer/Footer';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SurveyForm from './Components/SurveyForm/SurveyForm.js';


const App = () => {
    const[blogs,setBlogs]=useState([]);
    const [len, setLen] = useState(0);

    useEffect(()=>{
      fetch('https://stormy-escarpment-39477.herokuapp.com/blog')
      .then(response=>response.json())
      .then(resp=>{
        if(resp[0].heading){
          setBlogs(resp);
          setLen(resp.length);
          console.log(resp.length);
        }
      })
      .catch(err => {
       console.log(err)

     })
   },[])

    AOS.init();

        return (
            <div style={{overflow: 'hidden'}}>

                <Router basname='/'>
                    <NavBar/>
                    <Switch>
                        <Route exact path='/' component={()=><HomePage blogs={blogs}/>}/>
                        <Route exact path='/blog' component={()=><BlogPage blogs={blogs} len={len}/>}/>
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

export default App;
