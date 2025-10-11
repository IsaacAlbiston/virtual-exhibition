import type { NameInputProps } from "../models/ComponentProps"

const NameInput: React.FC<NameInputProps> = ({inputName, setInputName})=>{

    const updateInputName = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputName(event.target.value)
    }

    return<>
    <label htmlFor="name">Name:</label>
    <input onChange={updateInputName} id="name" type="text" value={inputName}/>
    </>
}

export default NameInput