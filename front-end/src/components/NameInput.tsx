import type { NameInputProps } from "../models/ComponentProps"

const NameInput: React.FC<NameInputProps> = ({inputName, setInputName})=>{

    const updateInputName = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputName(event.target.value)
    }

    return<div className="py-2 flex" >
    <label className="pr-2 font-serif" htmlFor="name">Name:</label>
    <input className="px-2 font-serif w-full rounded-lg" onChange={updateInputName} id="name" type="text" value={inputName}/>
    </div>
}

export default NameInput