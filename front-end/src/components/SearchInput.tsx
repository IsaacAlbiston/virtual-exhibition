import type { SearchInputProps } from "../models/SearchForm"

const SearchInput: React.FC<SearchInputProps> = ({inputSearchTerm, setInputSearchTerm})=>{

    const updateInputSearchTerm = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputSearchTerm(event.target.value)
    }

    return<>
    <label htmlFor="search">Search:</label>
    <input onChange={updateInputSearchTerm} id="search" type="text" value={inputSearchTerm}/>
    </>
}

export default SearchInput