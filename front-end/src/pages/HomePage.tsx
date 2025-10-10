import { useEffect, useState } from "react"
import SearchQueryForm from "../components/SearchQueryForm"
import UseLoadingHook from "../hooks/UseLoadingHook"
import { searchArtworks } from "../utils/api"

const HomePage = ()=>{
    const [searchTerm, setSearchTerm] = useState("")
    const [artworksSearchTerm, setArtworksSearchTerm] = useState({})

    const { data:articlesInfo, isLoading, error } = UseLoadingHook(searchArtworks, artworksSearchTerm)

    useEffect(()=>{
        setArtworksSearchTerm({q:searchTerm})
    },[searchTerm])

    return <>
    <h1>Home Page</h1>
    <SearchQueryForm setSearchTerm={setSearchTerm}/>
    {error?<h2>Results Not Found</h2>:
    <>
    {isLoading? <h2>Loading...</h2>:
    <h2>loaded</h2>}
    </>
    }
    </>
}

export default HomePage