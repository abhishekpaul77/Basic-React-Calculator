import React,{useState} from 'react'
import { Message } from './Message'
import { Buttons } from './Button'
import * as math from 'mathjs';

export const CalculatorPage = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = math.evaluate(input);
      setResult(calculatedResult);
      setInput(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <><div className='container col-5 border border-dark'>

      <Message  value='CALCULATOR' />
      <Message classname='danger' value={input || result} />
      <div className='row'>
        <div className='col'>

        </div>
        <div className='col-6'>
          <div className='mt-1'>
          <Buttons classname='success' value="+"   onClick={handleInput} /> &nbsp;&nbsp;
      <Buttons classname='success' value="-"  onClick={handleInput}/> &nbsp;&nbsp;
      <Buttons classname='success' value="*"  onClick={handleInput} /> &nbsp;&nbsp;
      <Buttons classname='dark' value="=" onClick={handleCalculate} />
      </div>
          <div className='mt-3'>
          <Buttons classname='success' value="1" onClick={handleInput} /> &nbsp;&nbsp;
      <Buttons classname='success' value="2" onClick={handleInput} /> &nbsp;&nbsp;
      <Buttons classname='success' value="3" onClick={handleInput} /> &nbsp;&nbsp;
      <Buttons classname='dark' value="4" />
      </div>
          <div className='mt-3'>
          <Buttons classname='success' value="5" onClick={handleInput} /> &nbsp;&nbsp;
      <Buttons classname='success' value="6" onClick={handleInput} /> &nbsp;&nbsp;
      <Buttons classname='success' value="7"  onClick={handleInput}/> &nbsp;&nbsp;
      <Buttons classname='dark' value="8" onClick={handleInput} />
      </div>
          <div className='mt-3'>
          <Buttons classname='success' value="9" onClick={handleInput}/> &nbsp;&nbsp;
      <Buttons classname='success' value="0" onClick={handleInput}/> &nbsp;&nbsp;
      <Buttons classname='success' value="(" /> &nbsp;&nbsp;
      <Buttons classname='dark' value=")" />&nbsp;&nbsp;
      </div>
      </div>
        <div className='col'></div>
      
      </div>

    </div></>
  )
}
