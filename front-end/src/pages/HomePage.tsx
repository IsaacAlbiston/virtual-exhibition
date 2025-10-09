import { useState } from "react"
import SearchQueryForm from "../components/SearchQueryForm"

const HomePage = ()=>{
    const [searchTerm, setSearchTerm] = useState("")

    return <>
    <h1>Home Page</h1>
    <SearchQueryForm setSearchTerm={setSearchTerm}/>
    </>
}

export default HomePage