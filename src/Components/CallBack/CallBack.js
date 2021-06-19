import React from 'react';
import './CallBack.scss';
import FormInput from './FormInput/FormInput.js';
import CustomButton from './CustomButton/CustomButton.js';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import 'tachyons';
import calling_bg from './calling_img.svg';

const initialState = {
	name: '',
	phoneno: '',
	query: '',
	show: false
}

class CallBack extends React.PureComponent {
	constructor() {
		super();
		this.state = initialState;
	}

	handleSubmit = (event) => {
		event.prefentDefault();
	}

	showfunction = (e) => {
		this.setState({ show: e }, () => console.log(this.state.show));
	}
	handleForm = () =>{
	fetch('https://stormy-escarpment-39477.herokuapp.com/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				phoneno: this.state.phoneno,
				query: this.state.query
		})
	})
	.then(response => response.json())
	.then(resp => {
		if(resp==='Success')
		{
		alert('Your message was recieved successfully.Thank you for your feedback.')
		}
	})
	.catch(err => {
		console.log(err)
		alert('OOPS....something went wrong.Please try again.')
	})
	this.setState({name: '', phoneno: '', query: '',show:true});
}

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(this.state.name,this.state.phoneno);
	}

	render() {
		return (
			<div  className="callback-container " style={{ overflow: 'hidden' }}>
				<div className="grid-design white" style={{ marginLeft: '6%' }}>
					<img src={calling_bg} alt=""/>
				</div>

				<div className="form-start">
					<div className=" pb4" style={{height: 'auto' }}>
						<h2 className="tc"><FaPhoneAlt color="blue"/> Request a Call!</h2>
						<p className="tc">Consultation Call only at <span className="dark-blue b f3"> Rs.99</span></p>
						<p className="tc">In this session over the call, we provide Legal Tax Advice and Financial Planning Advice.</p>
						<div className="contact-container1">
							<form onSubmit={(event) => this.handleForm(event)} className="form-container1">
								<FormInput
									label="Name"
									name="name"
									type="text"
									value={this.state.name}
									handleChange={this.handleChange}
									required
								/>
								<FormInput
									label="Phone no."
									name="phoneno"
									type="tel"
									pattern="[0-9]{10}"
									value={this.state.phoneno}
									handleChange={this.handleChange}
									required
								/>
								<FormInput
									label="Query"
									name="query"
									type="text"
									value={this.state.query}
									handleChange={this.handleChange}
									required
								/>

								<CustomButton  style={{backgroundColor:'blue',border:'1px solid blue'}} type='submit'>Submit</CustomButton>
							</form>
							<div className={` ${this.state.show === true ? 'alert' : 'hidden'}`} >
								<span onClick={() => this.showfunction(false)} className={`${this.state.show === true ? 'closebtn' : ' hidden'}`}><AiOutlineClose /></span>
								<strong>Thank you, you will recieve a call within 24 or 48 hrs.</strong>
							</div>

						</div>
					</div>
				</div>


			</div>
		)
	}
}
export default CallBack;
