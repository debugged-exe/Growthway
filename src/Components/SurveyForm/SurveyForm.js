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
			<div className="white survey-div flex flex-column justify-center items-center" style={{overflow:'hidden'}}>
					<h1 className="black">Survey</h1>
					<div className="center bg-white form-card">
					  <p class="para1">Let's understand your Short term investing needs better, with this Survey</p>
							<form onSubmit ={this.handleSubmit} className="form-container2 center black">
								<label htmlFor="name" className="label">Full Name<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Name"
								name="name"
								type="text"
								value={this.state.name}
								handleChange={this.handleChange}
								required
								/><br/>
								<label htmlFor="age" className="label">Age<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Age"
								name="age"
								type="text"
								value={this.state.name}
								handleChange={this.handleChange}
								required
								/>
								<div className="mt3 mb3">
									<label htmlFor="gender" className="label">Gender<span className="red f3">*</span></label>
									<br/><input
									type="radio"
									id="male"
									name="gender"
									value="male"
									handleChange={this.handleChange}
									required
									/>
									<label for="male" className="label">Male</label><br/>
									<input
									type="radio"
									id="female"
									name="gender"
									value="female"
									handleChange={this.handleChange}
									required
									/>
									<label
									for="female" className="label">
									Female
									</label>
								</div>

								<label htmlFor="phone" className="label">Phone Number<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Phone no."
								name="phone"
								type="text"
								value={this.state.phone}
								handleChange={this.handleChange}
								required
								/>
								<label htmlFor="email" className="label">Email<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Email Id"
								name="email"
								type="email"
								value={this.state.phone}
								handleChange={this.handleChange}
								required
								/>
								<label for="edu" handleChange={this.handleChange}  value={this.state.phone} className="label">
								Education<span className="red f3">*</span></label>
									<select className="select-boom" id="edu" name="edu">
										<option value=" ">Please select one option</option>
										<option value="1">HSC</option>
										<option value="2">SSC</option>
										<option value="3">Graduation</option>
										<option value="4">Masters</option>
									</select>
								<br/>
								<label htmlFor="occupation" className="label">Occupation<span className="red f3">*</span></label>
								<input
								name="occupation"
								className="inputform"
								placeholder="Occupation"
								type="text"
								value={this.state.query}
								handleChange={this.handleChange}
								required
								/>
								<label htmlFor="location" className="label">Location<span className="red f3">*</span></label>
								<input
								name="location"
								className="inputform"
								placeholder="Location"
								type="text"
								value={this.state.query}
								handleChange={this.handleChange}
								required
								/>

							<div className="mt3 mb3">
								<label htmlFor="invest" className="label">Do you invest for short term (1 year) ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes" name="invest" value="Yes"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="yes">Yes</label><br/>

								<input type="radio" id="no" name="invest" value="No"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="no">No</label><br/>

								<input type="radio" id="female" name="invest" value="Idk"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="female">I would like to</label>
							</div>

							<div className="mt3 mb3">
								<label htmlFor="savepermonth" className="label">How much do you save per month?<span className="red f3">*</span></label>
								<input
								className="inputform"
								name="savepermonth"
								placeholder="₹"
								type="text"
								value={this.state.name}
								handleChange={this.handleChange}
								required
								/><br/>
								<label htmlFor="aimtosave" className="label">How much do you aim at saving per month?<span className="red f3">*</span></label>
								<input
								name="aimtosave"
								type="text"
								placeholder="₹"
								className="inputform"
								value={this.state.name}
								handleChange={this.handleChange}
								required
								/>
							</div>

							<label for="investwhere" className="label">Where do you invest?<span className="red f3">*</span></label>
								<select id="investwhere" name="investwhere" className="select-boom">
									<option value=" ">Please select one option</option>
									<option value="1">Bank fd/rd</option>
									<option value="2">MF</option>
									<option value="3">corporate/govt bonds</option>
									<option value="4">Post office deposits</option>
									<option value="5">Others</option>
								</select>

								<div className="mt3 mb3">
									<label htmlFor="risk" className="label">Do you like taking risks on your Investments?<span className="red f3">*</span></label><br/>
									<input type="radio" id="yes" name="risk" value="Yes"  value={this.state.name}
									handleChange={this.handleChange} required/>
									<label for="yes">Yes</label><br/>
									<input type="radio" id="no" name="risk" value="No"  value={this.state.name}
									handleChange={this.handleChange} required/>
									<label for="no">No</label>
								</div>

								<div className="mt3 mb3">
									<label htmlFor="shortterm" className="label">Do you plan your short term investments?<span className="red f3">*</span></label>
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
								</div>

								<div className="mt3 mb3">
									<label htmlFor="" className="label">Looking to invest?<span className="red f3">*</span></label>
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
								</div>

								<div className="mt3 mb3">
									<label htmlFor="" className="label">Have you ever experienced any delays, hidden charges or deductions on maturity amount of your Investments ?<span className="red f3">*</span></label>
									<br/>
									<input type="radio" id="yes" name="deplays" value="Yes"  value={this.state.name}
									handleChange={this.handleChange} required/>
									<label for="yes">Yes</label><br/>
									<input type="radio" id="no" name="deplays" value="No"  value={this.state.name}
									handleChange={this.handleChange} required/>
									<label for="no">No</label><br/>
								</div>

								<div className="mt3 mb3">
									<label for="choice" className="label">Your choice of investing short term?<span className="red f3">*</span></label>
									<select id="choice" name="choice" onChange={this.enable} className="select-boom">
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
									/><br />
								</div>

								<div className="mt3 mb3">
									<label htmlFor="ror" className="label">Are you satisfied with the rate of return offered ?<span className="red f3">*</span></label><br/>
									<input type="radio" id="yes" name="ror" value="Yes"  value={this.state.name}
									handleChaclassName="label"nge={this.handleChange} required/>
									<label for="yes">Yes</label><br/>
									<input type="radio" id="no" name="ror" value="No"  value={this.state.name}
									handleChange={this.handleChange} required/>
									<label for="no">No</label><br/>
									<input type="radio" id="some" name="ror" value="Sometimes"  value={this.state.name}
									handleChange={this.handleChange} required/>
									<label for="some">Looking for better option</label><br/>
								</div>

									<label htmlFor="choice" className="label">What are your views about our Growmax 365 plan ?<span className="red f3">*</span></label>
									<select id="select" name="choice" onChange={this.enable} className="select-boom">
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

							<label htmlFor="know" className="label">How did you get to know about us?<span className="red f3">*</span></label>
							<select id="know" name="know" className="select-boom">
							<option value=" ">Please select one option</option>
							<option value="1">Friend</option>
							<option value="2">Online</option>
							<option value="3">Newspaper</option>
							</select>

							<div className="mt3 mb3">
								<label htmlFor="communication" className="label">Preferred form of communication?<span className="red f3">*</span></label>
								<br/>
								<input type="radio" id="call" name="communication" value="call"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="yes">Call</label><br/>
								<input type="radio" id="email" name="communication" value="email"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="no">Email</label><br/>
							</div>
							<div className="center">
								<CustomButton onClick={this.handleForm}>Submit</CustomButton>
							</div>
							</form>
		        </div>
					</div>
		)
	}
}

export default SurveyForm;
