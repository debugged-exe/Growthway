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
	phone: '',
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
	handleForm = (event) => {
		event.preventDefault();
		this.showfunction(true);

	}

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="callback-container " style={{ overflow: 'hidden' }}>

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
									name="phone"
									type="text"
									value={this.state.phone}
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

								<CustomButton style={{backgroundColor:'blue',border:'1px solid blue'}} type='submit'>Submit</CustomButton>
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
