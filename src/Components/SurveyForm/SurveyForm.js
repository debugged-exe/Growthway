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
			<div className="survey-div">
					<h3 className="survey-header">
						Survey Form
					</h3>
					<form className="survey-form-container">
						<div className="input-div">
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
						</div>
						<div className="input-div">
								<label htmlFor="name" className="label">Full Name<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Name"
								name="name"
								type="text"
								value={this.state.name}
								handleChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
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
						</div>
						<div className="input-div">
									<label htmlFor="gender" className="label">Gender<span className="red f3">*</span></label><br/>
									<input
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
									<br/>
									<input
									type="radio"
									id="transgender"
									name="gender"
									value="transgender"
									handleChange={this.handleChange}
									required
									/>
									<label
									for="transgender" className="label">
									Transgender
									</label>
									<br/>
									<input
									type="radio"
									id="not_to_say"
									name="gender"
									value="not_to_say"
									handleChange={this.handleChange}
									required
									/>
									<label
									for="not_to_say" className="label">
									Prefer Not to Say
									</label>
						</div>
						<div className="input-div">
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
						</div>
						<div className="input-div">
								<label for="edu" handleChange={this.handleChange}  value={this.state.phone} className="label">
								Education<span className="red f3">*</span></label>
								<select className="select-boom" id="edu" name="edu">
									<option value=" ">Please select one option</option>
									<option value="1">HSC</option>
									<option value="2">SSC</option>
									<option value="3">Graduation</option>
									<option value="4">Masters</option>
								</select>
						</div>
						<div className="input-div">
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
						</div>
						<div className="input-div">
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
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Do you prefer investing for short term (1 year) ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes" name="invest" value="Yes"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="yes">Yes</label><br/>

								<input type="radio" id="no" name="invest" value="No"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="no">No</label><br/>

								<input type="radio" id="female" name="invest" value="Idk"  value={this.state.name}
								handleChange={this.handleChange} required/>
								<label for="female">Maybe</label>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Monthly Income ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="less" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="less">Less than 20,000</label><br/>

								<input type="radio" id="20-50" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="20-50">20,000-50,000</label><br/>

								<input type="radio" id="50-75" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="50-75">50,000-75,000</label><br/>

								<input type="radio" id="more" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="more">More than 75,000</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Monthly Savings ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="less_save" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="less_save">Less than 5,000</label><br/>

								<input type="radio" id="5-15" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="5-15">5,000-15,000</label><br/>

								<input type="radio" id="more_save" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="more_save">More than 15,000</label><br/>

								<input type="radio" id="no_save" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="no_save">No savings at all</label><br/>
						</div>
					</form>
			</div>
		)
	}
}

export default SurveyForm;

{/*<form onSubmit ={this.handleSubmit} className="form-container2  black">
								
								
								<div className="mt3 mb3">
									
									
								</div>

								
								
								
								<br/>
								
								

							<div className="mt3 mb3">
								
							</div>

							<div className="mt3 mb3">
								
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
							</form>*/}