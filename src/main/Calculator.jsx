/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

const Calculator = () => {
    
    const [initialState, setInitialState] = useState({
        clearDisplay: false,
        operation: null,
        firstValue: null,
        secondValue: null,
        current: 0,
    })

    const clearMemory = () => {
        setInitialState({ ...initialState })
    }

    const Operation = (operation) => {
        console.log(operation)
    }
            
    const addDigit = (n) => {
        console.log(n)
        if(initialState.operation === null) {
            if(initialState.firstValue === null) {
                console.log(n)
            }else{
                console.log(n)
            }
        }else {
            if(initialState.secondValue === null) {
                console.log(n)
            }else{
                console.log(n)
            }
        }
    }

    return (
    <div className="calculator">
    <Display value={initialState.current} />
    <Button label="AC" click={clearMemory} triple />
    <Button label="/" click={Operation} operation />
    <Button label="7" click={addDigit} />
    <Button label="8" click={addDigit} />
    <Button label="9" click={addDigit} />
    <Button label="*" click={Operation} operation />
    <Button label="4" click={addDigit} />
    <Button label="5" click={addDigit} />
    <Button label="6" click={addDigit} />
    <Button label="-" click={Operation} operation />
    <Button label="1" click={addDigit} />
    <Button label="2" click={addDigit} />
    <Button label="3" click={addDigit} />
    <Button label="+" click={Operation} operation />
    <Button label="0" click={addDigit} double />
    <Button label="." click={addDigit} />
    <Button label="=" click={Operation} operation />
</div>)
}
    


export default Calculator;




