import type { ExhibitionDropdownProps } from "../models/ComponentProps"
import type { Exhibition } from "../models/Exhibitions"

const ExhibitionDropdown:React.FC<ExhibitionDropdownProps> = ({exhibitions, inputExhibition, setInputExhibition, setInputExhibitionIndex})=>{
    const updateDropdown = (event:React.ChangeEvent<HTMLSelectElement>)=>{
        setInputExhibition(event.target.value)
        const currentIndex = findExhibitionIndex(exhibitions, event.target.value)
        setInputExhibitionIndex(currentIndex)
    }

    const findExhibitionIndex = (exhibitions: Exhibition[], exhibitionName:string)=>{
        let counter = 0
        let index = -1
        exhibitions.forEach((exhibition)=>{
            if (exhibition.name===exhibitionName) {
                index = counter
            }
            counter++
        })
        return index
    }

    return <div className="p-4 flex">
    <label className="pr-2 font-serif" htmlFor="ExhibitionDropdown">Exhibition:</label>
    <select className="font-serif w-full rounded-lg" id="SortByDropdown" value={inputExhibition} onChange={updateDropdown}>
        {exhibitions.map((exhibition: Exhibition) =>{
            return <option value={exhibition.name}>{exhibition.name}</option>
        })}
    </select>
    </div>
}

export default ExhibitionDropdown