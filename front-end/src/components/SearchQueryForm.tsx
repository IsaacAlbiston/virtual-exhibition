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
    return <div className="px-4">
        <form onSubmit={searchQueryFormSubmit}>
            <div className="rounded-lg p-4 bg-gray-200">
                <div className="flex flex-col">
                    <SearchInput inputSearchTerm={inputSearchTerm} setInputSearchTerm={setInputSearchTerm}/>
                    <MuseumDropdown inputMuseum={inputMuseum} setInputMuseum={setInputMuseum} />
                    <div className="py-2 flex" >
                        <DateInput inputString={inputAfterDate} setInputString={setInputAfterDate} inputLabel='After Year' />
                        <DateInput inputString={inputBeforeDate} setInputString={setInputBeforeDate} inputLabel='Before Year' />
                    </div>
                    <button className="my-2 font-serif rounded-lg bg-white hover:bg-gray-400" > Search </button>
                </div>
            </div>
        </form>
    </div>
}

export default SearchQueryForm