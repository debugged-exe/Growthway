import React,{Component,useState} from 'react';
import './Calculator.scss';
import 'tachyons';

const Calculator =()=>
{
   const [show, setShow] = useState(false);
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
        setTotal1((aim-(aim*0.25)).toFixed(2));
         setTotal2(((aim-(aim*0.18))/12).toFixed(2));
         setTotal3(((aim-(aim*0.20))/4).toFixed(2));
     }

    return (
      <div>
      <div className="claculator-box">
         <p className="calc-head fw6" style={{fontSize:'35px'}}>Get to check your profit now!!</p>
         <div className="button-div">
           <button onClick={()=>setShow(true)} className=" fw6 bg-white black pa3 ph4 f4 grow pointer" style={{borderRadius:'8px',border:'none'}}>
           Calculator
           </button>
        </div>
       </div>

       <div className={`${show===true?'show':'hide'}`}>
         <div className="profit-div shadow-2 tc ma5">
            <h2>Profit <span style={{color:'#0069FF'}}>Calculator</span></h2>
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
            <h2 className="ph2 tc">How much to pay to achieve your goal amount?</h2>
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
                    <div className="tc ph3 pay">
                       <h3>Yearly</h3>
                       <p>{total1}/yr</p>
                    </div>
                    <div className="tc ph3 pay">
                       <h3>Monthly</h3>
                       <p>{total2}/mo</p>
                    </div>
                    <div className="tc ph3">
                       <h3>Quaterly</h3>
                       <p>{total3}/qtr</p>
                    </div>

                  </div>
          </div>
       </div>


      </div>
    );
  }

export default Calculator;
