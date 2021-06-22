import React, {useState, useEffect } from 'react';
import 'tachyons';
import './Work.scss';
import Image from './work.svg';

const initialState = {
	name: '',
	email: '',
	phone: '',
	role:'',
	job:'',
	date:''
}

class Work extends React.PureComponent {
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
 setRole=(e)=>{
	 this.setState({role: e.target.value});
 }
 setJob=(e)=>{
	this.setState({job: e.target.value});
 }
	handleChange = (event) => {
    const {value, name} = event.target;
	  this.setState({[name]: value});
  }
	render() {
		return (
			<div className="pt6">
			 <div className="tc" style={{lineHeight:'1.5'}}>
			   <h1>Work <span style={{color:'#0069FF'}}>with us</span></h1>
				 <p className="f4 ph6-ns ph2">Are you interested in learning investment and finance basics?
				  Join us as an intern to gain experience in financial and investment advising.</p>
			 </div>
			<div className="work-div">
			  <div><img src={Image} alt="Work-with-us"/></div>
				<div>
			  	<form onSubmit ={this.handleSubmit} className="center" >
							 <input
								placeholder="Name"
							 className="inputval"
								name="name"
								type="text"
								value={this.state.name}
								onChange={this.handleChange}
								required
								/>

								<input
								placeholder="Email"
							 className="inputval"
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
								/>

								<input
								placeholder="Phone no."
							 className="inputval"
								name="phone"
								type="text"
								value={this.state.phone}
								onChange={this.handleChange}
								required
								/>

							 <select id="role" name="role" className="inputval" onChange={this.setRole}>
								 <option value="role0">Applying for following role</option>
								 <option value="CTO- Chief Technology Officer">CTO- Chief Technology Officer</option>
								 <option value="CMO- Chief Marketing Officer">CMO- Chief Marketing Officer</option>
								 <option value="CFO- Chief Financial Officer">CFO- Chief Financial Officer</option>
								 <option value="Research and Development">Research and Development</option>
								 <option value="Financial journalist">Financial journalist</option>
								 <option value="Company Secretary">Company Secretary</option>
								 <option value="Chartered Accountant">Chartered Accountant</option>
								 <option value="Product Manager and Developer">Product Manager & Developer</option>
								 <option value="Operations Manager">Operations Manager</option>
								 <option value="Coordinator">Coordinator</option>
								 <option value="Accountant">Accountant</option>
								 <option value="Marketing and Sales - rainmaker">Marketing & Sales - rainmaker</option>
								 <option value="Customer support executive">Customer support executive</option>
								 <option value="Receptionist">Receptionist</option>
							 </select>


							 <select id="jobtime" name="jobtime" className="inputval" onChange={this.setJob}>
									<option value="0">Interested in</option>
								 <option value="Full time">Full time</option>
								 <option value="Part time">Part time</option>
								 <option value="Internship">Internship</option>
								 <option value="Contract">Contract</option>
								 <option value="Volunteer">Volunteer</option>
							 </select>
							 <p className="tc ph4">Please attach Resume, Proof of residence, PAN card <span className="red">*</span></p>
							 <button type="submit" className="button-upload "><a href={`mailto:growthwayinvestments.com@gmail.com?subject=Want to apply for the position of ${this.state.role} &body=I am ${this.state.name} and would like to apply for position of ${this.state.role} as a ${this.state.job} job.`}>Upload</a></    button>
							</form>

				</div>
			</div>
    </div>
		)
	}
}

export default Work;
