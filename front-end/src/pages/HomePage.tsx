import { useEffect, useState } from "react"
import SearchQueryForm from "../components/SearchQueryForm"
import UseLoadingHook from "../hooks/UseLoadingHook"
import SearchResults from "../components/SearchResults"
import type { HomePageProps } from "../models/PageProps"
import type { Artwork } from "../models/Exhibitions"
import type { ArtworksDataScienceMuseums, ArtworksDataVandA } from "../models/DataModels"
import CheckObjStructure from "../utils/DataUtils"
import { useNavigate, useParams } from "react-router"

const HomePage: React.FC<HomePageProps> = ({exhibitions,setExhibitions})=>{
    const {pageNumber} = useParams()
    const navigate = useNavigate()
    const [currentFilters, setCurrentFilters] = useState({q:'',museum:'',after:'',before:''})
    const [artworksSearchTerm, setArtworksSearchTerm] = useState({pSize: '20', p:'',q:'',museum:'',after:'',before:''})
    const [showSearchResults, setShowSearchResults] = useState(false)
    const [formattingData, setFormattingData] = useState(true)
    const [reformattedArtworks, setReformattedArtworks] = useState<Artwork>()
    const [selectAPI, setSelectAPI] = useState("SMG")

    const { totalResults, data:artworksInfo, isLoading, error } = UseLoadingHook(selectAPI, artworksSearchTerm)

    useEffect(()=>{
        if (currentFilters.q || currentFilters.museum || currentFilters.after || currentFilters.before){
            if (currentFilters.museum==='v-and-a') setSelectAPI("VAM")
            else setSelectAPI("SMG")
            setFormattingData(true)
            setArtworksSearchTerm({pSize:'20', p:'1', ...currentFilters})
            navigate('/1')
        }
    },[currentFilters])

    useEffect(()=>{
        if (currentFilters.q || currentFilters.museum || currentFilters.after || currentFilters.before){
            if (currentFilters.museum==='v-and-a') setSelectAPI("VAM")
            else setSelectAPI("SMG")
            setFormattingData(true)
            setArtworksSearchTerm({pSize:'20', p:String(pageNumber), ...currentFilters})
        }
    },[pageNumber])

    useEffect(()=>{
        const locationLookupObj = {
            'SCM': 'Science Museum, London',
            'NSMM': 'National Media Museum, Bradford',
            'NRM': 'National Railway Museum, York',
            'SIM': 'Science and Industry Museum, Manchester'
        }
        if (Array.isArray(artworksInfo) && artworksInfo.length>0){
            const newArtworks = artworksInfo.map((artwork: ArtworksDataScienceMuseums|ArtworksDataVandA) =>{
                if ('id' in artwork){
                    return {
                        id: artwork.id,
                        title: CheckObjStructure(artwork, ['attributes','summary','title'])?artwork.attributes.summary.title:'',
                        imageURL: CheckObjStructure(artwork, ['attributes','multimedia',0,'@processed','medium','location'])?'https://coimages.sciencemuseumgroup.org.uk/'+artwork.attributes.multimedia[0]['@processed'].medium.location:'',
                        description: CheckObjStructure(artwork, ['attributes','description',0,'value'])?artwork.attributes.description[0].value:'',
                        location: CheckObjStructure(artwork, ['attributes','category',0,'museum'])&&artwork.attributes.category[0].museum in locationLookupObj?locationLookupObj[artwork.attributes.category[0].museum]:'',
                        websiteURL: CheckObjStructure(artwork, ['links','self'])?artwork.links.self:''
                    }
                } else if ('systemNumber' in artwork){
                    return {
                        id: artwork.systemNumber,
                        title: '_primaryTitle' in artwork?artwork._primaryTitle:'',
                        imageURL: '_primaryImageId' in artwork && artwork._primaryImageId?`https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/full/0/default.jpg`:'',
                        description: 'objectType' in artwork && '_primaryPlace' in artwork?`${artwork.objectType} from ${artwork._primaryPlace}`:'',
                        location: artwork._currentLocation.onDisplay?artwork._currentLocation.displayName:'Not currently on display.',
                        websiteURL: `https://collections.vam.ac.uk/item/${artwork.systemNumber}`
                    }
                }
            })
            setReformattedArtworks(newArtworks)
            setFormattingData(false)
        }
    },[artworksInfo])

    return <div>
        <h1 className="p-4 text-3xl text-center font-serif">Home Page</h1>
        <SearchQueryForm setCurrentFilters={setCurrentFilters} setShowSearchResults={setShowSearchResults} />
        {showSearchResults?<>
            {error?<h2>Results Not Found</h2>:<>
                {isLoading||formattingData? <h2>Loading...</h2>:<>
                    {!(Array.isArray(reformattedArtworks) && reformattedArtworks.length>0 && totalResults)? <p>No Results</p>:
                    <SearchResults totalResults={totalResults} reformattedArtworks={reformattedArtworks} exhibitions={exhibitions}   setExhibitions={setExhibitions}/>}
                </>}
            </>}
        </>:null}
    </div>
}

export default HomePage