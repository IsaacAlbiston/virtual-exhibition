import { useEffect, useState } from "react"
import SearchQueryForm from "../components/SearchQueryForm"
import UseLoadingHook from "../hooks/UseLoadingHook"
import { searchArtworks } from "../utils/api"
import SearchResults from "../components/SearchResults"
import type { HomePageProps } from "../models/PageProps"

const HomePage: React.FC<HomePageProps> = ({exhibitions,setExhibitions})=>{
    const [currentFilters, setCurrentFilters] = useState({q:'',museum:'',after:'',before:''})
    const [artworksSearchTerm, setArtworksSearchTerm] = useState({q:'',museum:'',after:'',before:''})
    const [showSearchResults, setShowSearchResults] = useState(false)

    const { data:artworksInfo, isLoading, error } = UseLoadingHook(searchArtworks, artworksSearchTerm)

    useEffect(()=>{
        if (currentFilters.q || currentFilters.museum || currentFilters.after || currentFilters.before){
            setArtworksSearchTerm(currentFilters)
        }
    },[currentFilters])

    return <div>
        <h1 className="p-4 text-3xl text-center font-serif">Home Page</h1>
        <SearchQueryForm setCurrentFilters={setCurrentFilters} setShowSearchResults={setShowSearchResults} />
        {showSearchResults?<>
            {error?<h2>Results Not Found</h2>:<>
                {isLoading? <h2>Loading...</h2>:<>
                    {!(Array.isArray(artworksInfo) && artworksInfo.length>0)? <p>No       Results</p>:
                    <SearchResults artworksInfo={artworksInfo} exhibitions={exhibitions}   setExhibitions={setExhibitions}/>}
                </>}
            </>}
        </>:null}
    </div>
}

export default HomePage