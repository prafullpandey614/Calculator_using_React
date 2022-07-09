import * as math from 'mathjs';
import "../App.css"
import {useState , React} from 'react'
import { Input } from "./Input";
import { Button } from "./Button";

export const Calculator = () => {
    const resetInput= ()=>{
        setResult("");
        setText("");
    }
    const addToText = (val) => {
        setText((text)=>[...text,val+" "])
    }
    const calculateResult = () => {
        const inp = text.join("");
        setResult(math.evaluate(inp));
    }
    const buttonColor = "#f2a33c";
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
  return (
    <div className="calc-wrapper">
     <Input text={text} result={result} />
     <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
     </div>
     <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput} />
    </div>
  )
}

 
export default Calculator;
