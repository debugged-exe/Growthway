import React, {useState, useEffect } from 'react';
import image from './WorkImage.png';
import 'tachyons';
import './Work.scss';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';


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
 dateValue=()=>{
	 Date = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
	 this.setState({date:Date});
	 console.log(this.state.date,Date);
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
              1.Name
							<input
              placeholder="Name"
							className="inputval"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
              />
							2.Email
              <input
              placeholder="Email"
							className="inputval"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              />
							3.Phone
              <input
              placeholder="Phone no."
							className="inputval"
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleChange}
              required
              />
							4.Applying for following role
							<select id="role" name="role" className="inputval" onChange={this.setRole}>
								<option value="role0">Please select one from below</option>
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

							5.Interested in
							<select id="jobtime" name="jobtime" className="inputval" onChange={this.setJob}>
                <option value="0">Please select one from below</option>
								<option value="Full time">Full time</option>
								<option value="Part time">Part time</option>
								<option value="Internship">Internship</option>
								<option value="Contract">Contract</option>
								<option value="Volunteer">Volunteer</option>
							</select>
              6.Available from
							<CalendarComponent
							className="mt3 ml3"
							value={this.dateValue}
				      ></CalendarComponent>
							<br/>
							7.Resume, Proof of residence, PAN card
							<button type="submit" className="button-upload "><a href={`mailto:harshikasmishra@outlook.com?subject=Want to apply for the position of ${this.state.role} &body=I am ${this.state.name} and would like to apply for position of ${this.state.role} as a ${this.state.job} job and I m Available from ${this.state.date} date.Land in Miami The air was hot from summer rain
              Sweat dripping off me Before I even knew her name, la-la-la It felt like ooh, la-la-la.Yeah, no`}>Upload</a></button>
            </form>
          </div>
        </div>
  		</div>

		)
	}
}

export default Work;
