import { useEffect, useState } from "react"
import SearchQueryForm from "../components/SearchQueryForm"
import UseLoadingHook from "../hooks/UseLoadingHook"
import { searchArtworks } from "../utils/api"
import SearchResults from "../components/SearchResults"

const HomePage = ()=>{
    const [searchTerm, setSearchTerm] = useState("")
    const [artworksSearchTerm, setArtworksSearchTerm] = useState({})

    const { data:artworksInfo, isLoading, error } = UseLoadingHook(searchArtworks, artworksSearchTerm)

    useEffect(()=>{
        setArtworksSearchTerm({q:searchTerm})
    },[searchTerm])

    return <>
    <h1>Home Page</h1>
    <SearchQueryForm setSearchTerm={setSearchTerm}/>
    {error?<h2>Results Not Found</h2>:
    <>
    {isLoading? <h2>Loading...</h2>:
    <SearchResults artworksInfo={artworksInfo} />}
    </>
    }
    </>
}

export default HomePage