import React from 'react';
import './PaymentForm.scss';

const PaymentForm = ({plan}) => {
    return(
        <div className="payment-form-bg br4 shadow-5 pa4">
            <p className="tc">Please fill the following details to proceed.</p>
            <form className="flex flex-column justify-center items-center payment-form">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="tel" pattern="[0-9]{10}" placeholder="Phone"/>
                    <div className="" style={{width:"58%"}}>
                    <select name="plan" id="" className="w-100">
                        <option value={plan}>{plan}</option>
                        <option value="Sapphire">Sapphire</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Emerald">Emerald</option>
                    </select>
                    </div>
                    <input type="number" placeholder="Amount"/>
                <button class="f6 link ph4 pv3 dib grow white bg-dark-blue br2 pointer">Proceed to Pay</button>
            </form>
        </div>
    );
}

export default PaymentForm;