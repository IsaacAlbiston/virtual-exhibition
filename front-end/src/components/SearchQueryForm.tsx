import type { SearchQueryFormProps } from "../models/SearchForm"
import DateInput from "./DateInput"
import MuseumDropdown from "./MuseumDropdown"
import SearchInput from "./SearchInput"
import { useState } from "react"

const SearchQueryForm: React.FC<SearchQueryFormProps> = ({setCurrentFilters,setShowSearchResults})=>{
    const [inputSearchTerm, setInputSearchTerm] = useState('')
    const [inputMuseum, setInputMuseum] = useState('')
    const [inputAfterDate, setInputAfterDate] = useState('')
    const [inputBeforeDate, setInputBeforeDate] = useState('')

    const searchQueryFormSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        setShowSearchResults(true)
        setCurrentFilters(()=>{
            let newFilters ={q:inputSearchTerm,museum:inputMuseum,after:'',before:''}
            if (!isNaN(Number(inputAfterDate))) {
                newFilters={...newFilters,after:inputAfterDate}
            }
            if (!isNaN(Number(inputBeforeDate))) {
                newFilters={...newFilters,before:inputBeforeDate}
            }
            return newFilters
        })
    }
    return <form onSubmit={searchQueryFormSubmit}>
        <SearchInput inputSearchTerm={inputSearchTerm} setInputSearchTerm={setInputSearchTerm}/>
        <MuseumDropdown inputMuseum={inputMuseum} setInputMuseum={setInputMuseum} />
        <DateInput inputString={inputAfterDate} setInputString={setInputAfterDate} inputLabel='After Year' />
        <DateInput inputString={inputBeforeDate} setInputString={setInputBeforeDate} inputLabel='Before Year' />
        <button className="font-serif rounded-lg bg-white hover:bg-gray-200" > Search </button>
    </form>
}

export default SearchQueryForm