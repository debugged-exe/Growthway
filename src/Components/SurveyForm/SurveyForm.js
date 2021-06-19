import React from 'react';
import './SurveyForm.scss';
import CustomButton from './CustomButton/CustomButton.js';
import {FaPhoneAlt} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import 'tachyons';

const initialState = {
	email: '',
	name: '',
	age: '',
	gender: '',
	
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
					<h1 className="survey-header">
						Survey Form
					</h1>
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
								<label htmlFor="invest" className="label">Monthly Income ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="less" name="income" value=""
								handleChange={this.handleChange} required/>
								<label for="less">Less than 20,000</label><br/>

								<input type="radio" id="20-50" name="income" value=""
								handleChange={this.handleChange} required/>
								<label for="20-50">20,000-50,000</label><br/>

								<input type="radio" id="50-75" name="income" value=""
								handleChange={this.handleChange} required/>
								<label for="50-75">50,000-75,000</label><br/>

								<input type="radio" id="more" name="income" value=""
								handleChange={this.handleChange} required/>
								<label for="more">More than 75,000</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Monthly Savings ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="less_save" name="savings" value=""
								handleChange={this.handleChange} required/>
								<label for="less_save">Less than 5,000</label><br/>

								<input type="radio" id="5-15" name="savings" value=""
								handleChange={this.handleChange} required/>
								<label for="5-15">5,000-15,000</label><br/>

								<input type="radio" id="more_save" name="savings" value=""
								handleChange={this.handleChange} required/>
								<label for="more_save">More than 15,000</label><br/>

								<input type="radio" id="no_save" name="savings" value=""
								handleChange={this.handleChange} required/>
								<label for="no_save">No savings at all</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Do you prefer investing for short term (1 year) ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes" name="short_term_invest" value="Yes"
								handleChange={this.handleChange} required/>
								<label for="yes">Yes</label><br/>

								<input type="radio" id="no" name="short_term_invest" value="No"
								handleChange={this.handleChange} required/>
								<label for="no">No</label><br/>

								<input type="radio" id="female" name="short_term_invest" value="Idk"
								handleChange={this.handleChange} required/>
								<label for="female">Maybe</label>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Where have you been investing till date<span className="red f3">*</span></label><br/>
								<input type="checkbox" id="bank" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="bank">Bank FD/RD</label><br/>

								<input type="checkbox" id="mutual" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="mutual">Mutual Funds</label><br/>

								<input type="checkbox" id="bonds" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="bonds">Government/Corporate bonds</label><br/>

								<input type="checkbox" id="post" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="post">Post Office Deposits</label><br/>

								<input type="checkbox" id="money_market" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="money_market">Money Market</label><br/>

								<input type="checkbox" id="debt" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="debt">Debt Instruments</label><br/>

								<input type="checkbox" id="none" name="invest" value=""
								handleChange={this.handleChange} required/>
								<label for="none">None</label>
						</div>
						<div className="input-div">	
								<label htmlFor="invest" className="label">What makes you trust a financial institution with your money?<span className="red f3">*</span></label><br/>
								<input type="radio" id="peers" name="trust" value=""
								handleChange={this.handleChange} required/>
								<label for="peers">Popularity among peers</label><br/>

								<input type="radio" id="ads" name="trust" value=""
								handleChange={this.handleChange} required/>
								<label for="ads">Advertisement Influence</label><br/>

								<input type="radio" id="doc" name="trust" value=""
								handleChange={this.handleChange} required/>
								<label for="doc">Heavy Documentation</label><br/>

								<input type="radio" id="dontknow" name="trust" value=""
								handleChange={this.handleChange} required/>
								<label for="dontknow">Don't know</label>
						</div>
						<div className="input-div">	
								<label htmlFor="delay" className="label">
										Have you ever experienced any delays/deductions/hidden charges on maturity amounts of your investment?
								<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes_delay" name="delay" value="Yes"
								handleChange={this.handleChange} required/>
								<label for="yes_delay">Yes</label><br/>

								<input type="radio" id="no_delay" name="delay" value="No"
								handleChange={this.handleChange} required/>
								<label for="no_delay">No</label><br/>
						</div>
						<div className="input-div">	
								<label htmlFor="return" className="label">
										Are you satisfied with the rate of return you are currently being offered?
								<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes_return" name="return" value="Yes"
								handleChange={this.handleChange} required/>
								<label for="yes_return">Yes</label><br/>

								<input type="radio" id="no_return" name="return" value="No"
								handleChange={this.handleChange} required/>
								<label for="no_return">No</label><br/>

								<input type="radio" id="better_return" name="return" value="better"
								handleChange={this.handleChange} required/>
								<label for="better_return">Looking for better options</label><br/>
						</div>
						<div className="input-div">	
								<label htmlFor="risk" className="label">Do you like taking risks on your Investments?<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes_risk" name="risk" value="Yes"
								handleChange={this.handleChange} required/>
								<label for="yes_risk">Yes</label><br/>

								<input type="radio" id="no_risk" name="risk" value="No"
								handleChange={this.handleChange} required/>
								<label for="no_risk">No</label><br/>

								<input type="radio" id="maybe_risk" name="risk" value="maybe"
								handleChange={this.handleChange} required/>
								<label for="maybe_risk">Maybe</label>
						</div>
						<div className="input-div">
								<label htmlFor="shortterm" className="label">Do you plan your short term investments?<span className="red f3">*</span></label>
								<br/>
								<input type="radio" id="yes_shortterm" name="shortterm" value="Yes"
								handleChange={this.handleChange} required/>
								<label for="yes_shortterm">Yes</label><br/>

								<input type="radio" id="no_shortterm" name="shortterm" value="No"
								handleChange={this.handleChange} required/>
								<label for="no_shortterm">No</label><br/>

								<input type="radio" id="some" name="shortterm" value="Sometimes"
								handleChange={this.handleChange} required/>
								<label for="some">Sometimes</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="shorttermplan" className="label">Would you like to know more about a short term investment plan (1 Year) that assures a guaranteed return of 18%-25%?<span className="red f3">*</span></label>
								<br/>
								<input type="radio" id="yes_plan" name="shorttermplan" value="Yes"
								handleChange={this.handleChange} required/>
								<label for="yes_plan">Yes</label><br/>

								<input type="radio" id="no_plan" name="shorttermplan" value="No"
								handleChange={this.handleChange} required/>
								<label for="no_plan">No</label><br/>
						</div>
						<div className="input-div">
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
						</div>
						<div className="input-div">
							<label htmlFor="know" className="label">How did you get to know about us?<span className="red f3">*</span></label>
							<select id="know" name="know" className="select-boom">
							<option value=" ">Please select one option</option>
							<option value="1">Friend</option>
							<option value="2">Online</option>
							<option value="3">Newspaper</option>
							</select>
						</div>
						<div className="input-div">
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
								<CustomButton onClick={this.handleForm} style={{marginLeft: '0%'}}>Submit</CustomButton>
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
								
								
							</div>

							

								<div className="mt3 mb3">
									
								</div>

								<div className="mt3 mb3">
									
								</div>

								<div className="mt3 mb3">
									
								</div>

								<div className="mt3 mb3">
									
								</div>

								<div className="mt3 mb3">
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
							
								</div>

									

							

							<div className="mt3 mb3">
								
							</div>
							
							</form>*/}