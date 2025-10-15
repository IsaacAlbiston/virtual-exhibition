import type { SearchInputProps } from "../models/SearchForm"

const SearchInput: React.FC<SearchInputProps> = ({inputSearchTerm, setInputSearchTerm})=>{

    const updateInputSearchTerm = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputSearchTerm(event.target.value)
    }

    return <div className="py-2 flex" >
    <label className="pr-2 font-serif" htmlFor="search">Search:</label>
    <input className="px-2 font-serif w-full rounded-lg" onChange={updateInputSearchTerm} id="search" type="text" value={inputSearchTerm}/>
    </div>
}

export default SearchInput