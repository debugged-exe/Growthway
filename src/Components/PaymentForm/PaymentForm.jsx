import React from 'react';
import './PaymentForm.scss';

const PaymentForm = ({plan}) => {
    return(
        <div className="payment-form-bg  pa4">
            <p className="tc">Please fill the following details to proceed.</p>
            <form className="flex flex-column justify-center items-center payment-form">
                    <input type="text" className="width-input" placeholder="Name"/>
                    <input type="email" placeholder="Email" className="width-input"/>
                    <input type="tel" pattern="[0-9]{10}" placeholder="Phone" className="width-input"/>
                    <select name="plan" id="" className="width-input">
                        <option value={plan}>{plan}</option>
                        <option value="Sapphire">Sapphire</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Emerald">Emerald</option>
                    </select>
                    <input className="width-input" type="number" placeholder="Amount"/>
                <button className="f6 link ph4 pv3 dib grow white bg-dark-blue br2 pointer">Proceed to Pay</button>
            </form>
        </div>
    );
}

export default PaymentForm;