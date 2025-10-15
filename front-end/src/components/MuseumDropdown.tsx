import type { MuseumDropdownProps } from "../models/ComponentProps"

const MuseumDropdown:React.FC<MuseumDropdownProps> = ({inputMuseum, setInputMuseum})=>{
    const updateDropdown = (event:React.ChangeEvent<HTMLSelectElement>)=>{
        setInputMuseum(event.target.value)
    }

    return <div>
    <label htmlFor="MuseumDropdown">Museum:</label>
    <select id="MuseumDropdown" value={inputMuseum} onChange={updateDropdown}>
        <option value=''>All</option>
        <option value='science-museum'>Science Museum</option>
        <option value='national-railway-museum'>National Railway Museum</option>
        <option value='national-science-and-media-museum'>National Science and Media Museum</option>
        <option value='locomotion'>Locomotion</option>
        <option value='science-and-industry-museum'>Science and Industry Museum</option>
    </select>
    </div>
}

export default MuseumDropdown