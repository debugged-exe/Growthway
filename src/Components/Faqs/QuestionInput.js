import React,{useState} from 'react';
import './QuestionInput.scss';

class QuestionInput extends React.PureComponent {

   constructor() {
 		super();
 		this.state = {
      ques:'',
      answer:'',
      open:false
    };
 	}
   	 handleChange=(event)=> {
       const {value} = event.target;
   	  this.setState({ques: value});
     }

   handleForm = (event) =>{
     fetch('https://stormy-escarpment-39477.herokuapp.com/about', {
   			method: 'post',
   			headers: {'Content-Type': 'application/json'},
   			body: JSON.stringify({
   			ques: this.state.ques,
   			answer:this.state.answer,
        open:this.state.open
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
  	});
  event.preventDefault();
};

render(){
  return(
      <div className="question-input">
      <p className="calc-head fw6" style={{fontSize:'35px'}}>Got few doubts? Send them up</p>
      <div>

      <div className="button-div-faq" >
      <form onSubmit={(event) => this.handleForm(event)}>
          <textarea type="text" className="mr2-ns br2"
          style={{
              outline:"none",
              border:"none"
          }}
          name="ques"
          onChange={this.handleChange}
          placeholder="Your Doubts"
          required
          />
            <button type="submit" className="fw6 bg-white black pa3 ph4 f4 grow pointer" style={{borderRadius:'8px',border:'none'}}>
            Submit
            </button>
        </form>
     </div>
      </div>
    </div>
  );

}
}

export default QuestionInput;
