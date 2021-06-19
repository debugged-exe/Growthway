import React from 'react';
import './PaymentForm.scss';

const PaymentForm = () => {
    return(
        <div className="payment-form-bg br4 shadow-5 pa4">
            <p className="tc">Please fill the following details to proceed.</p>
            <form className="flex flex-column justify-center items-center payment-form">
                <div className="flex justify-center items-center ">
                    <input type="text" placeholder="Name"/>
                </div>

                <div className="flex justify-center items-center ">
                    <input type="email" placeholder="Email"/>
                </div>

                <div className="flex justify-center items-center ">
                    <input type="tel" pattern="[0-9]{10}" placeholder="Phone"/>
                </div>

                <div className="flex justify-center items-center ">
                    <select name="plan" id="">
                        <option value="None">---Select Plan---</option>
                        <option value="Sapphire">Sapphire</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Emerald">Emerald</option>
                    </select>
                </div>

                <div className="flex justify-center items-center ">
                    <input type="number" placeholder="Amount"/>
                </div>
                <button class="f6 link ph4 pv3 dib grow white bg-dark-blue br2 pointer">Proceed to Pay</button>
            </form>
        </div>
    );
}

export default PaymentForm;