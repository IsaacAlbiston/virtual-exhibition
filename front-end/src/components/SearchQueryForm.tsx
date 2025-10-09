import type { SearchQueryFormProps } from "../models/SearchForm"
import SearchInput from "./SearchInput"
import { useState } from "react"

const SearchQueryForm: React.FC<SearchQueryFormProps> = ({setSearchTerm})=>{
    const [inputSearchTerm, setInputSearchTerm] = useState("")

    const searchQueryFormSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        setSearchTerm(inputSearchTerm)
    }
    return <form onSubmit={searchQueryFormSubmit}>
        <SearchInput inputSearchTerm={inputSearchTerm} setInputSearchTerm={setInputSearchTerm}/>
        <button className="font-serif rounded-lg bg-white hover:bg-gray-200" > Submit </button>
    </form>
}

export default SearchQueryForm