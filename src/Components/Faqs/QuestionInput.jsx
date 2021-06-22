import React from 'react';
import './QuestionInput.scss';

const QuestionInput = () => {
    return(
        <div className="question-input">
        <p className="calc-head fw6" style={{fontSize:'35px'}}>Got few doubts? Send them up</p>
        <div>

        <div className="button-div-faq" >
        <textarea type="text" className="mr2-ns br2"
        style={{
            outline:"none",
            border:"none"
        }}
        placeholder="Your Doubts"
        />
          <button className="fw6 bg-white black pa3 ph4 f4 grow pointer" style={{borderRadius:'8px',border:'none'}}>
          Submit
          </button>
       </div>
        </div>
      </div>
    );
}

export default QuestionInput;