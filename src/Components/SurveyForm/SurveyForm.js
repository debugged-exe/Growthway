import React from 'react';
import './SurveyForm.scss';
import CustomButton from './CustomButton/CustomButton.js';
import {FaPhoneAlt} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import 'tachyons';

const initialState = {
	name: '',
	email: '',
	age: '',
	gender: '',
	phone: '',
	education: '',
	occupation: '',
	location: '',
	income: '',
	savings: '',
	short_term_invest: '',
	invest: [],
	trust: '',
	delay: '',
	return3: '',
	risk: '',
	shortterm: '',
	shorttermplan: '',
	view_365: '',
	know: '',
	communication: ''
}

class SurveyForm extends React.PureComponent {
	constructor(){
		super();
		this.state = initialState;
	}

	handleSubmit = (event) =>
	{
		console.log(this.state);
		const {
			name,
			email,
			age,
			gender,
			phone,
			education,
			occupation,
			location,
			income,
			savings,
			short_term_invest,
			invest,
			trust,
			delay,
			return3,
			risk,
			shortterm,
			shorttermplan,
			view_365,
			know,
			communication
		} = this.state;

		event.preventDefault();
		fetch('https://stormy-escarpment-39477.herokuapp.com/surveyform', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				email: email,
				age: age,
				gender: gender,
				phone: phone,
				education: education,
				occupation: occupation,
				location: location,
				income: income,
				savings: savings,
				short_term_invest: short_term_invest,
				invest: invest,
				trust: trust,
				delay: delay,
				return: return3,
				risk: risk,
				shortterm: shortterm,
				shorttermplan: shorttermplan,
				view_365: view_365,
				know: know,
				communication: communication
			})
		})
		.then(response => response.json())
		.then(resp => {
			if(resp==='Success')
			{
				alert('Insert success message here');
			}
		})
		.catch(err => {
			console.log(err);
			alert('OOPS....something went wrong.Please try again.');
		})
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

  handleCheck = (event) => {
  	const {id, value} = event.target;
  	const check1 = document.getElementById(id);
  	if(check1.checked)
  	{
  		const invest = this.state.invest;
  		invest.push(value);
  		this.setState({invest: invest}, () => {
  			console.log('');
  		});
  	}
  	else
  	{
  		const invest = this.state.invest;
  		const filtered = invest.filter(item => item!=value);
  		this.setState({invest: filtered}, () => {
  			console.log('');
  		})
  	}
  }

	render() {
		return (
			<div className="survey-div mt5">
					<h1 className="survey-header">
						Survey Form
					</h1>
					<form className="survey-form-container" onSubmit={this.handleSubmit}>
						<div className="input-div">
								<label htmlFor="name" className="label">Full Name<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Name"
								name="name"
								type="text"
								onChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
								<label htmlFor="email" className="label">Email<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Email Id"
								name="email"
								type="email"
								onChange={this.handleChange}
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
								onChange={this.handleChange}
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
									onChange={this.handleChange}
									required
									/>
									<label for="male" className="label">Male</label><br/>
									<input
									type="radio"
									id="female"
									name="gender"
									value="female"
									onChange={this.handleChange}
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
									onChange={this.handleChange}
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
									onChange={this.handleChange}
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
								type="tel"
								pattern="[0-9]{10}"
								onChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
								<label for="edu" value={this.state.phone} className="label">
								Education<span className="red f3">*</span></label>
								<select className="select-boom" id="edu" onChange={this.handleChange} name="education">
									<option value=" ">Please select one option</option>
									<option value="HSC">HSC</option>
									<option value="SSC">SSC</option>
									<option value="Graduation">Graduation</option>
									<option value="Masters">Masters</option>
								</select>
						</div>
						<div className="input-div">
								<label htmlFor="occupation" className="label">Occupation<span className="red f3">*</span></label>
								<input
								name="occupation"
								className="inputform"
								placeholder="Occupation"
								type="text"
								onChange={this.handleChange}
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
								onChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Monthly Income ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="less" name="income" value="lessThan20"
								onChange={this.handleChange} required/>
								<label for="less">Less than 20,000</label><br/>

								<input type="radio" id="20-50" name="income" value="20-50"
								onChange={this.handleChange} required/>
								<label for="20-50">20,000-50,000</label><br/>

								<input type="radio" id="50-75" name="income" value="50-75"
								onChange={this.handleChange} required/>
								<label for="50-75">50,000-75,000</label><br/>

								<input type="radio" id="more" name="income" value="moreThan75"
								onChange={this.handleChange} required/>
								<label for="more">More than 75,000</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Monthly Savings ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="less_save" name="savings" value="lessThan5"
								onChange={this.handleChange} required/>
								<label for="less_save">Less than 5,000</label><br/>

								<input type="radio" id="5-15" name="savings" value="5-15"
								onChange={this.handleChange} required/>
								<label for="5-15">5,000-15,000</label><br/>

								<input type="radio" id="more_save" name="savings" value="moreThan15"
								onChange={this.handleChange} required/>
								<label for="more_save">More than 15,000</label><br/>

								<input type="radio" id="no_save" name="savings" value="none"
								onChange={this.handleChange} required/>
								<label for="no_save">No savings at all</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Do you prefer investing for short term (1 year) ?<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes" name="short_term_invest" value="Yes"
								onChange={this.handleChange} required/>
								<label for="yes">Yes</label><br/>

								<input type="radio" id="no" name="short_term_invest" value="No"
								onChange={this.handleChange} required/>
								<label for="no">No</label><br/>

								<input type="radio" id="female" name="short_term_invest" value="Idk"
								onChange={this.handleChange} required/>
								<label for="female">Maybe</label>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">Where have you been investing till date<span className="red f3">*</span></label><br/>
								<input type="checkbox" id="bank" name="invest" value="Bank FD/RD"
								onClick={this.handleCheck}/>
								<label for="bank">Bank FD/RD</label><br/>

								<input type="checkbox" id="mutual" name="invest" value="mutualFunds"
								onClick={this.handleCheck}/>
								<label for="mutual">Mutual Funds</label><br/>

								<input type="checkbox" id="bonds" name="invest" value="bonds"
								onClick={this.handleCheck}/>
								<label for="bonds">Government/Corporate bonds</label><br/>

								<input type="checkbox" id="post" name="invest" value="postOfficeDeposits"
								onClick={this.handleCheck}/>
								<label for="post">Post Office Deposits</label><br/>

								<input type="checkbox" id="money_market" name="invest" value="money_market"
								onClick={this.handleCheck}/>
								<label for="money_market">Money Market</label><br/>

								<input type="checkbox" id="debt" name="invest" value="debt"
								onClick={this.handleCheck}/>
								<label for="debt">Debt Instruments</label><br/>

								<input type="checkbox" id="none" name="invest" value="none"
								onClick={this.handleCheck}/>
								<label for="none">None</label>
						</div>
						<div className="input-div">
								<label htmlFor="invest" className="label">What makes you trust a financial institution with your money?<span className="red f3">*</span></label><br/>
								<input type="radio" id="peers" name="trust" value="popularityInPeers"
								onChange={this.handleChange} required/>
								<label for="peers">Popularity among peers</label><br/>

								<input type="radio" id="ads" name="trust" value="ads"
								onChange={this.handleChange} required/>
								<label for="ads">Advertisement Influence</label><br/>

								<input type="radio" id="doc" name="trust" value="documentation"
								onChange={this.handleChange} required/>
								<label for="doc">Heavy Documentation</label><br/>

								<input type="radio" id="dontknow" name="trust" value="IDK"
								onChange={this.handleChange} required/>
								<label for="dontknow">Don't know</label>
						</div>
						<div className="input-div">
								<label htmlFor="delay" className="label">
										Have you ever experienced any delays/deductions/hidden charges on maturity amounts of your investment?
								<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes_delay" name="delay" value="Yes"
								onChange={this.handleChange} required/>
								<label for="yes_delay">Yes</label><br/>

								<input type="radio" id="no_delay" name="delay" value="No"
								onChange={this.handleChange} required/>
								<label for="no_delay">No</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="return" className="label">
										Are you satisfied with the rate of return you are currently being offered?
								<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes_return" name="return3" value="Yes"
								onChange={this.handleChange} required/>
								<label for="yes_return">Yes</label><br/>

								<input type="radio" id="no_return" name="return3" value="No"
								onChange={this.handleChange} required/>
								<label for="no_return">No</label><br/>

								<input type="radio" id="better_return" name="return3" value="lookinForBetter"
								onChange={this.handleChange} required/>
								<label for="better_return">Looking for better options</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="risk" className="label">Do you like taking risks on your Investments?<span className="red f3">*</span></label><br/>
								<input type="radio" id="yes_risk" name="risk" value="Yes"
								onChange={this.handleChange} required/>
								<label for="yes_risk">Yes</label><br/>

								<input type="radio" id="no_risk" name="risk" value="No"
								onChange={this.handleChange} required/>
								<label for="no_risk">No</label><br/>

								<input type="radio" id="maybe_risk" name="risk" value="maybe"
								onChange={this.handleChange} required/>
								<label for="maybe_risk">Maybe</label>
						</div>
						<div className="input-div">
								<label htmlFor="shortterm" className="label">Do you plan your short term investments?<span className="red f3">*</span></label>
								<br/>
								<input type="radio" id="yes_shortterm" name="shortterm" value="Yes"
								onChange={this.handleChange} required/>
								<label for="yes_shortterm">Yes</label><br/>

								<input type="radio" id="no_shortterm" name="shortterm" value="No"
								onChange={this.handleChange} required/>
								<label for="no_shortterm">No</label><br/>

								<input type="radio" id="some" name="shortterm" value="Sometimes"
								onChange={this.handleChange} required/>
								<label for="some">Sometimes</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="shorttermplan" className="label">Would you like to know more about a short term investment plan (1 Year) that assures a guaranteed return of 18%-25%?<span className="red f3">*</span></label>
								<br/>
								<input type="radio" id="yes_plan" name="shorttermplan" value="Yes"
								onChange={this.handleChange} required/>
								<label for="yes_plan">Yes</label><br/>

								<input type="radio" id="no_plan" name="shorttermplan" value="No"
								onChange={this.handleChange} required/>
								<label for="no_plan">No</label><br/>
						</div>
						<div className="input-div">
								<label htmlFor="choice" className="label">What are your views about our Growmax 365 plan ?<span className="red f3">*</span></label>
								<select id="select" name="view_365" onChange={this.handleChange} className="select-boom">
								<option value=" ">Please select one option</option>
								<option value="tempting">Tempting</option>
								<option value="lookingForward">Looking forward</option>
								<option value="cant_trust">Can't trust</option>
								</select>
						</div>
						<div className="input-div">
							<label htmlFor="know" className="label">How did you get to know about us?<span className="red f3">*</span></label>
							<select id="know" name="know" onChange={this.handleChange} className="select-boom">
							<option value=" ">Please select one option</option>
							<option value="friend">Friend</option>
							<option value="online">Online</option>
							<option value="newspaper">Newspaper</option>
							</select>
						</div>
						<div className="input-div">
								<label htmlFor="communication" className="label">Preferred form of communication?<span className="red f3">*</span></label>
								<br/>
								<input type="radio" id="call" name="communication" value="call"
								onChange={this.handleChange} required/>
								<label for="yes">Call</label><br/>
								<input type="radio" id="email" name="communication" value="email"
								onChange={this.handleChange} required/>
								<label for="no">Email</label><br/>
						</div>
						<div className="center">
								<CustomButton type="submit" style={{marginLeft: '0%'}}>Submit</CustomButton>
						</div>
					</form>
			</div>
		)
	}
}

export default SurveyForm;
