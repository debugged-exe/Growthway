import React,{Component,useState} from 'react';
import './Calculator.scss';
import 'tachyons';

const Calculator =()=>
{
   const [number1, setNumber1] = useState();
   const [number2, setNumber2] = useState();
   const [total, setTotal] = useState();
   const [total1, setTotal1] = useState();
   const [total2, setTotal2] = useState();
   const [total3, setTotal3] = useState();
   const [handle,handleSubmit] = useState();
   const [aim, setAim] = useState();


   function calculateTotal() {

     if(number2=='p1'){
       setTotal((number1*(0.25))+number1);
     }
     else if (number2=='p2') {
        setTotal((number1*12*(0.18))+(number1*12));
     }else if (number2=='p3') {
        setTotal((number1*4*(0.20))+(number1*4));
     }
    }

    function calculateAimvalue() {
        setTotal1(aim-(aim*0.25));
         setTotal2(aim-(aim*0.18));
         setTotal3(aim-(aim*0.20));
     }

    return (
      <div className="white" style={{overflow:'hidden',backgroundColor:'black'}}>
        <div>
        <h2>Get to check your future balance now!</h2>
          <div  style={{height:'auto'}}>
              <form onSubmit ={e=>handleSubmit(e.preventDefault())}>
                  <input
                  className="inputfield"
                  placeholder="Initial investment in ₹"
                  name="amount"
                  type="number"
                  onChange={e => setNumber1(+e.target.value)}
                  required
                  />
                <select id="plan" name="plan" onChange={e => setNumber2(e.target.value)}>
								  <option value="p0">Please select one plan</option>
                  <option value="p1">Yearly (per yr)</option>
                  <option value="p2">Monthly (12 months)</option>
                  <option value="p3">Quatarly (4 months)</option>
                </select>
               <button type='submit' onClick={calculateTotal} class="button-style">Check</button>
                  <div className="b f3 mv3" style={{marginLeft:'13%'}}>{total}</div>
                </form>
              </div>
              </div>
              <div>
                <h2>Wanna know how much to pay to achieve your goal amount?</h2>
                  <form onSubmit ={e=>handleSubmit(e.preventDefault())}>
                    <input
                    className="inputfield"
                    placeholder="Your Goal amount in ₹"
                    name="amount"
                    type="number"
                    onChange={e => setAim(e.target.value)}
                    required
                    />
                     <button type='submit' onClick={calculateAimvalue} class="button-style">Check</button>
                    <h3>Pay only</h3>
                     1.Per Year
                     <input
                     className="inputfield center"
                     placeholder="pay only ₹/yr"
                     name="Yearly"
                     type="number"
                     value={total1}
                     disabled={true}
                     />
                     2.Per Month
                     <input
                     className="inputfield center"
                     placeholder="pay only ₹/mo"
                     name="monthly"
                     type="number"
                     value={total2}
                     disabled={true}
                     />
                     3.Per Quater
                     <input
                     className="inputfield center"
                     placeholder="pay only ₹/quater"
                     name="quater"
                     type="number"
                     value={total3}
                     disabled={true}
                     />
                  </form>
              </div>
            </div>
    );
  }

export default Calculator;
