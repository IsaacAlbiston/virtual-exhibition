import { useState } from "react"
import type { FormInputProps } from "../models/ComponentProps"

const DateInput: React.FC<FormInputProps> = ({inputString, setInputString, inputLabel})=>{
    const [invalidInput, setInvalidInput] = useState(false)

    const updateInputSearchTerm = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputString(event.target.value)
    }

    const validateInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
        if (isNaN(Number(event.target.value))){
            setInvalidInput(true)
        } else{
            setInvalidInput(false)
        }
    }

    return<>
    <label htmlFor={inputLabel}>{inputLabel}:</label>
    <input onChange={updateInputSearchTerm} onBlur={validateInput} id={inputLabel} type="text" value={inputString}/>
    {invalidInput?<p className="font-serif text-red-600 text-center" >Please enter a number</p>:null}
    </>
}

export default DateInput