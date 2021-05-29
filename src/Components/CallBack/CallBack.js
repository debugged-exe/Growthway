import React from 'react';
import './CallBack.scss';
import FormInput from './FormInput/FormInput.js';
import CustomButton from './CustomButton/CustomButton.js';
import {FaPhoneAlt} from 'react-icons/fa';
import 'tachyons';

const initialState = {
	name: '',
	phone: '',
	query:''
}

class CallBack extends React.PureComponent {
	constructor(){
		super();
		this.state = initialState;
	}

	handleSubmit = (event) =>
	{
		event.prefentDefault();
	}

  handleForm = () =>{
  }

	handleChange = (event) => {
    const {value, name} = event.target;
	  this.setState({[name]: value});
  }

	render() {
		return (
			<div className="bg-black callback-container" style={{overflow:'hidden'}}>

				<div className="form-start">
					<div className=" pb4" style={{borderTop:'7px solid green',height:'auto',backgroundColor:'#ADB4B0'}}>
							<h2 className="tc"><FaPhoneAlt/> Request a Call!</h2>
							<div className="contact-container1">
		            <form onSubmit ={this.handleSubmit} className="form-container1">
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

		              <CustomButton onClick={this.handleForm}>Submit</CustomButton>
		            </form>
		          </div>
		        </div>
					</div>

					<div className="grid-design white" style={{marginRight:'18%'}}>
						<p className="call-header line pb4">Book a Consultation Call only <span className="b">@ ₹99/-</span></p>

						<div className=" line flex flex-warp">
							<p className="gray ma0 " style={{fontSize:'5rem',fontWeight:'500'}}>01</p>
							<div className=" para">
								<h1>Tax Presentation</h1>
								<p>We prepare everything you need for your tax return </p>
							</div>
						</div>

						<div className="line flex flex-warp">
							<p className="gray ma0" style={{fontSize:'5rem',fontWeight:'500'}}>02</p>
							<div className=" para">
								<h1>Start-up Package</h1>
								<p>We prepare everything you need for your tax return </p>
							</div>
						</div>

						<div className="line flex flex-warp">
							<p className="gray ma0" style={{fontSize:'5rem',fontWeight:'500'}}>03</p>
							<div className=" para">
								<h1>Wealth Management</h1>
								<p>We prepare everything you need for your tax return </p>
							</div>
						</div>

					</div>

		  	</div>
		)
	}
}
export default CallBack;
