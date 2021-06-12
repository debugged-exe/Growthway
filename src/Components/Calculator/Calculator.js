import React,{Component,useState} from 'react';
import './Calculator.scss';
import 'tachyons';

const Calculator =()=>
{
   const [number1, setNumber1] = useState();
   const [number2, setNumber2] = useState();
   const [total, setTotal] = useState();
   const [total1, setTotal1] = useState(0);
   const [total2, setTotal2] = useState(0);
   const [total3, setTotal3] = useState(0);
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
       <div className="flex flex-column justify-center items-center">
         <div className="profit-div shadow-2 tc ma5">
            <h2>Profit <span style={{color:'green'}}>Calculator</span></h2>
            <p className="calc-def">You must know the calculation before investing in any plan, so you never make mistakes. Check the calculation and you will get as our calculator says.</p>
              <form className="form-calc pa2 flex flex-column justify-center align-items" onSubmit ={e=>handleSubmit(e.preventDefault())}>
                <div className="calc-1">
                  <select id='select-plan' name="plan" onChange={e => setNumber2(e.target.value)}>
                    <option value="p0">Please select one plan</option>
                    <option value="p1">Yearly (per yr)</option>
                    <option value="p2">Monthly (12 months)</option>
                    <option value="p3">Quatarly (4 months)</option>
                  </select>
                  <input
                  className="inputfield"
                  placeholder="Initial investment in ₹"
                  name="amount"
                  type="number"
                  onChange={e => setNumber1(+e.target.value)}
                  required
                  />
                </div>
                <input
                 className="inputfield-result"
                 placeholder="0.00"
                 name="result"
                 type="number"
                 value={total}
                 disabled={true}
                 />
                 <button type='submit' onClick={calculateTotal} class="button-style">Check</button>
              </form>

          </div>
          <div className="profit-div shadow-2 ma4">
            <h2>Wanna know how much to pay to achieve your goal amount?</h2>
              <form className="form-calc pa2 flex flex-column justify-center align-items" onSubmit ={e=>handleSubmit(e.preventDefault())}>
                <input
                className="inputfield"
                placeholder="Your Goal amount in ₹"
                name="amount"
                type="number"
                onChange={e => setAim(e.target.value)}
                required
                />
                <button type='submit' onClick={calculateAimvalue} class="button-style">Check</button>
                </form>
                <h2>Pay only</h2>
                  <div className="result-grid">
                    <div className="tc ph3" style={{borderRight:'1.5px solid green'}}>
                       <h3>Yearly</h3>
                       <p>{total1}</p>
                    </div>
                    <div className="tc ph3" style={{borderRight:'1.5px solid green'}}>
                       <h3>Monthly</h3>
                       <p>{total2}</p>
                    </div>
                    <div className="tc ph3">
                       <h3>Quatarly</h3>
                       <p>{total3}</p>
                    </div>

                  </div>
          </div>
       </div>
    );
  }

export default Calculator;


// <label className="f4">Per Year</label>
// <input
// className="inputfield"
// placeholder="pay only ₹/yr"
// name="Yearly"
// type="number"
// value={total1}
// disabled={true}
// />
// <label className="f4">Per Month</label>
// <input
// className="inputfield"
// placeholder="pay only ₹/mo"
// name="monthly"
// type="number"
// value={total2}
// disabled={true}
// />
// <label className="f4 ">Per Quater</label>
// <input
// className="inputfield"
// placeholder="pay only ₹/quater"
// name="quater"
// type="number"
// value={total3}
// disabled={true}
// />
