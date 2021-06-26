import React, { useState,useEffect} from 'react';
import FAQ from './FAQ';
import './faqfun.css';
import 'tachyons';
import QuestionInput from './QuestionInput.js';

function Faqs () {
  const [faqs, setfaqs] = useState([]);


  useEffect(()=>{
    fetch('https://stormy-escarpment-39477.herokuapp.com/about')
    .then(response=>response.json())
    .then(resp=>{
      if(resp[0].ques){
        setfaqs(resp);
      }
    })
    .catch(err => {
     console.log(err)

   })
  },[])

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="pb4" style={{background: 'rgba(236, 243, 255)',	lineHeight:'1.7'}}>
     <p className="tc pa3 f1 fw6">Faq's</p>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <div>
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
             </div>
        ))}

      </div>
      <QuestionInput/>
    </div>
  );
}

export default Faqs;
