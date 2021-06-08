import React from 'react';
import 'tachyons';
import {BsArrowDown} from 'react-icons/bs';

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
			style={{borderBottom: '2px solid green'}}
		>
			<div className="faq-question flex flex-wrap justify-between">
			 <p>{faq.id}. {faq.question}</p>
			 <p><BsArrowDown color="green" size="2rem"/></p>
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ;
