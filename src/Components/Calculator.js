import {  Stack } from "react-bootstrap";
import Input from "./Input/Input";
import Button from "./Button/Button";
import { useState } from "react";
import './calculator.css'


function Calculator () {
    const [value , setValue] = useState ('')

    function buttonHandler (number) {
        if(value == "Wrong Expressions") {

            setValue("")
            setValue(number)
        }
        else{
        setValue( value+number);
        }
    }

    function resultHandler () {
        

        try {
            setValue(eval (value))
        } catch (e) {
            setValue('Wrong Expressions')
            
        }

    }
    return (
        <div className="main-container" >
            <div> 
                <h1>Calculator</h1>    
             </div>
            <Stack direction="horizontal" className="justify-content-center mt-4"  >
                <Input value={value} className='text-align-center'  />
                </Stack>

            <Stack direction="horizontal" className="justify-content-center ">

                <Button  onClick = {()=>{setValue('')}}  text="AC"  />
                <Button onClick = {() =>   { buttonHandler ('/')}} text="/" />
                <Button onClick = {() =>   { buttonHandler ('m+')}} text="m+" />
                <Button onClick = {() =>   { buttonHandler ('m-')}} text="m-" />
            </Stack>

            <Stack direction="horizontal" className=" justify-content-center " >

                 <Button onClick = {() =>   { buttonHandler ('7')}} text="7" />
                 <Button onClick = {() =>   { buttonHandler ('8')}} text="8" />
                 <Button onClick = {() =>   { buttonHandler ('9')}} text="9" />
                  <Button onClick = {() =>   { buttonHandler ('*')}} text="x" />    
               </Stack>

               <Stack direction="horizontal" className=" justify-content-center " >

                <Button onClick = {() =>   { buttonHandler ('4')}} text="4" />
                <Button onClick = {() =>   { buttonHandler ('5')}}  text="5" />
                <Button onClick = {() =>   { buttonHandler ('6')}} text="6" />
                <Button onClick = {() =>   { buttonHandler ('-')}} text="-" />    
                </Stack>

                
               <Stack direction="horizontal" className=" justify-content-center " >

            <Button onClick = {() =>   { buttonHandler ('1')}} text="1" />
             <Button onClick = {() =>   { buttonHandler ('2')}} text="2" />
              <Button onClick = {() =>   { buttonHandler ('3')}} text="3" />
               <Button onClick = {() =>   { buttonHandler ('+')}} text="+" />    
                </Stack>


               <Stack direction="horizontal" className=" justify-content-center " >

                  <Button onClick = {() =>   { buttonHandler ('0')}} text="0" />
                   <Button onClick = {() =>   { buttonHandler ('.')}} text="." />
                   <Button onClick = {() =>   { buttonHandler ('%')}} text="%" />
                   <Button onClick = {() =>   { resultHandler ('/')}} text="=" />    
                   </Stack>
        </div>
    )
}

export default Calculator;