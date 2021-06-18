import React from 'react';
import 'tachyons';
import {BsArrowDown} from 'react-icons/bs';

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
			style={{borderBottom: '2px solid blue'}}
		>
			<div className="faq-question flex justify-between">
			 <p>{faq.id}. {faq.question}</p>
			 <p><BsArrowDown color="blue" size="2rem"/></p>
			</div>
			<div className="faq-answer" style={{color:'black'}}>
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ;
