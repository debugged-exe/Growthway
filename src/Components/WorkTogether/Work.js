import React, {useState, useEffect } from 'react';
import image from './WorkImage.png';
import 'tachyons';
import './Work.scss';
import FormInput from './FormInput/FormInput.js';
import CustomButton from './CustomButton/CustomButton.js';


const initialState = {
	name: '',
	email: '',
	phone: ''
}

class Work extends React.PureComponent {
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

      <div className="work-container bg-black">
  			<p className="white pt3 pl5 work-title"
        style={{fontWeight:'500'}}>
          Let's Work Together </p>
        <div className="flex flex-wrap white">
          <img className="mb4 ml4 handshake" src={image}/>
          <div className="contact-container">
            <form onSubmit ={this.handleSubmit} className="form-container center ">
              <FormInput
              label="Name"
              name="name"
              type="text"
              value={this.state.name}
              handleChange={this.handleChange}
              required
              />
              <FormInput
              label="Email"
              name="email"
              type="email"
              value={this.state.email}
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
              <CustomButton onClick={this.handleForm}>Contact Us</CustomButton>
            </form>
          </div>
        </div>
  		</div>

		)
	}
}

export default Work;
