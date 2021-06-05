import React from 'react';
import './SurveyForm.scss';
import CustomButton from './CustomButton/CustomButton.js';
import {FaPhoneAlt} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import 'tachyons';

const initialState = {
	name: '',
	phone: '',
	query:'',
  option:'',
  others:true
}

class SurveyForm extends React.PureComponent {
	constructor(){
		super();
		this.state = initialState;
	}

	handleSubmit = (event) =>
	{
		event.preventDefault();
	}

  handleForm = () =>{
  }

  enable = (e) =>{
    if(e.target.value=="3"){
      this.setState({others:false});
    }else{
      this.setState({others:true});
    }

  }
	handleChange = (event) => {
    const {value, name} = event.target;
	  this.setState({[name]: value});
  }

	render() {
    console.log(this.state.others);
		return (
			<div className="white" style={{overflow:'hidden',backgroundColor:'black'}}>
        <h1>Let's understand your Short term investing needs better, with this Survey: </h1>
					<div style={{height:'auto'}}>
							<div className="contact-container2">
		            <form onSubmit ={this.handleSubmit} className="form-container2">
                  1. Full Name:
                  <input
									className="inputform"
									placeholder="Name"
		              name="name"
		              type="text"
		              value={this.state.name}
		              handleChange={this.handleChange}
		              required
		              /><br/>
                  2.Age:
                  <input
									className="inputform"
									placeholder="Age"
		              name="age"
		              type="text"
		              value={this.state.name}
		              handleChange={this.handleChange}
		              required
		              /><br/>
                  3.Gender:
					        <br/>
                  <input
									type="radio"
									id="male"
									name="gender"
									value="male"
 		              handleChange={this.handleChange}
									required
									/>
									<label for="male">Male</label><br/>

                  <input
									type="radio"
									id="female"
									name="gender"
									value="female"
 		              handleChange={this.handleChange}
									required
									/>
									<label
									for="female">
									Female
									</label>
									<br/>

                  4.Phone no.
									<input
									className="inputform"
									placeholder="Phone no."
		              name="phone"
		              type="text"
		              value={this.state.phone}
		              handleChange={this.handleChange}
		              required
		              /><br/>
                  5.Email Id
                  <input
									className="inputform"
									placeholder="Email Id"
		              name="email"
		              type="email"
		              value={this.state.phone}
		              handleChange={this.handleChange}
		              required
		              /><br/>


                  <label for="edu" handleChange={this.handleChange}  value={this.state.phone}>
                  6.Education:</label>
                    <select id="edu" name="edu">
										  <option value=" ">Please select one option</option>
                      <option value="1">HSC</option>
                      <option value="2">SSC</option>
                      <option value="3">Graduation</option>
                      <option value="4">Masters</option>
                    </select>
                  <br/>
                7.Occupation:
		              <input
		              name="occupation"
									className="inputform"
									placeholder="Occupation"
		              type="text"
		              value={this.state.query}
		              handleChange={this.handleChange}
		              required
		              /><br/>
                8.Location
                  <input
		              name="location"
									className="inputform"
									placeholder="Location"
		              type="text"
		              value={this.state.query}
		              handleChange={this.handleChange}
		              required
		              /><br/>
                9.Do you invest for short term (1 year) ?
                <br/>

                <input type="radio" id="yes" name="invest" value="Yes"  value={this.state.name}
                handleChange={this.handleChange} required/>
								<label for="yes">Yes</label><br/>

                <input type="radio" id="no" name="invest" value="No"  value={this.state.name}
                handleChange={this.handleChange} required/>
								<label for="no">No</label><br/>

                <input type="radio" id="female" name="invest" value="Idk"  value={this.state.name}
                handleChange={this.handleChange} required/>
								<label for="female">I would like to</label><br/>


                  10.How much do you save per month?
                  <input
									className="inputform"
		              name="savepermonth"
									placeholder="₹"
		              type="text"
		              value={this.state.name}
		              handleChange={this.handleChange}
		              required
		              /><br/>
                  11.How much do you aim at saving per month?
                  <input
		              name="aimtosave"
		              type="text"
									placeholder="₹"
									className="inputform"
		              value={this.state.name}
		              handleChange={this.handleChange}
		              required
		              /><br/>

                  <label for="investwhere">  12.Where do you invest?</label>
                    <select id="investwhere" name="investwhere">
										  <option value=" ">Please select one option</option>
                      <option value="1">Bank fd/rd</option>
                      <option value="2">MF</option>
                      <option value="3">corporate/govt bonds</option>
                      <option value="4">Post office deposits</option>
                      <option value="5">Others</option>
                    </select>
                  <br/>

                  13.Do you like taking risks on your Investments?
									<br/>
                  <input type="radio" id="yes" name="risk" value="Yes"  value={this.state.name}
                  handleChange={this.handleChange} required/>
                  <label for="yes">Yes</label><br/>
                  <input type="radio" id="no" name="risk" value="No"  value={this.state.name}
                  handleChange={this.handleChange} required/>
                  <label for="no">No</label><br/>

                14.Do you plan your short term investments?
								<br/>
                <input type="radio" id="yes" name="shortterm" value="Yes"  value={this.state.name}
                handleChange={this.handleChange} required/>
                <label for="yes">Yes</label><br/>
                <input type="radio" id="no" name="shortterm" value="No"  value={this.state.name}
                handleChange={this.handleChange} required/>
                <label for="no">No</label><br/>
                <input type="radio" id="some" name="shortterm" value="Sometimes"  value={this.state.name}
                handleChange={this.handleChange} required/>
                <label for="some">Sometimes</label><br/>

             15.Looking to invest?
						 <br/>
             <input type="radio" id="yes" name="invest" value="Yes"  value={this.state.name}
             handleChange={this.handleChange} required/>
             <label for="yes">Yes</label><br/>
             <input type="radio" id="no" name="invest" value="No"  value={this.state.name}
             handleChange={this.handleChange} required/>
             <label for="no">No</label><br/>
             <input type="radio" id="some" name="invest" value="Can't decide"  value={this.state.name}
             handleChange={this.handleChange} required/>
             <label for="some">Can't decide</label><br/>

             16.Have you ever experienced any delays, hidden charges or deductions on maturity amount of your Investments ?
            <br/>
						 <input type="radio" id="yes" name="deplays" value="Yes"  value={this.state.name}
             handleChange={this.handleChange} required/>
             <label for="yes">Yes</label><br/>
             <input type="radio" id="no" name="deplays" value="No"  value={this.state.name}
             handleChange={this.handleChange} required/>
             <label for="no">No</label><br/>


          <label for="choice">17.Your choice of investing short term?</label>
            <select id="choice" name="choice" onChange={this.enable}>
						  <option value=" ">Please select one option</option>
              <option value="1">Bank fd</option>
              <option value="2">Liquid funds</option>
              <option value="3" >Others</option>
            </select>
          <input
          name="others"
          placeholder="What?"
          className={` ${this.state.others===true?'hide':'shortterm'}`}
          type="text"
          value={this.state.name}
          handleChange={this.handleChange}
          disabled={this.state.others}
          /><br/>


          18.Are you satisfied with the rate of return offered ?
					<br/>
          <input type="radio" id="yes" name="ror" value="Yes"  value={this.state.name}
          handleChange={this.handleChange} required/>
          <label for="yes">Yes</label><br/>
          <input type="radio" id="no" name="ror" value="No"  value={this.state.name}
          handleChange={this.handleChange} required/>
          <label for="no">No</label><br/>
          <input type="radio" id="some" name="ror" value="Sometimes"  value={this.state.name}
          handleChange={this.handleChange} required/>
          <label for="some">Looking for better option</label><br/>

          19.What are your views about our Growmax 365 plan ?
          <select id="select" name="choice" onChange={this.enable}>
					  <option value=" ">Please select one option</option>
            <option value="1">Tempting</option>
            <option value="2">Looking forward</option>
            <option value="3">Can't trust</option>
          </select>
        <input
        name="others"
        className={`${this.state.others===true?'hide':'shortterm'}`}
        type="text"
        value={this.state.name}
        handleChange={this.handleChange}
        /><br/>

           20.How did you get to know about us?
           <select id="know" name="know">
					   <option value=" ">Please select one option</option>
             <option value="1">Friend</option>
             <option value="2">Online</option>
             <option value="3">Newspaper</option>
           </select><br/>

           21.Preferred form of communication?
					 <br/>
           <input type="radio" id="call" name="communication" value="call"  value={this.state.name}
           handleChange={this.handleChange} required/>
           <label for="yes">Call</label><br/>
           <input type="radio" id="email" name="communication" value="email"  value={this.state.name}
           handleChange={this.handleChange} required/>
           <label for="no">Email</label><br/>

		              <CustomButton onClick={this.handleForm}>Submit</CustomButton>
		            </form>
		          </div>
		        </div>
					</div>
		)
	}
}

export default SurveyForm;

//function change for 19th ques
