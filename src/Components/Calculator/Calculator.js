import React,{Component,useState} from 'react';
import './Calculator.scss';
import 'tachyons';

const Calculator =()=>
{
   const [number1, setNumber1] = useState();
   const [number2, setNumber2] = useState();
   const [roi, setroi] = useState();
   const [total, setTotal] = useState();

   function calculateTotal() {
      var val1=Math.pow(1+roi/100, number2);
      var val=(number1*[val1-1]).toFixed(4);
      setTotal(val);
    }

    return (
      <div className="white" style={{overflow:'hidden',backgroundColor:'black'}}>
        <h1>Get to check your future balance now!</h1>
          <div  style={{height:'auto'}}>
              <form >
                  <input
                  className="inputfield"
                  placeholder="Initial investment in ₹"
                  name="amount"
                  type="number"
                  onChange={e => setNumber1(+e.target.value)}
                  required
                  />

                  <input
                  className="inputfield"
                  placeholder="Years Invested"
                  name="years"
                  type="number"
                  onChange={e => setNumber2(+e.target.value)}
                  required
                  />
                  <input
                  className="inputfield"
                  placeholder="Interest Rate in %"
                  name="roi"
                  type="number"
                  onChange={e => setroi(+e.target.value)}
                  required
                  /><br/>

                  <input
                  className="inputfield center"
                  placeholder="Result"
                  name="result"
                  type="number"
                  value={total}
                  disabled={true}
                  />
                  <button onClick={calculateTotal} class="button-style">Submit</button>
                </form>
              </div>
            </div>

    );
  }

export default Calculator;
