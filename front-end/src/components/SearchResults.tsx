import ArtworkInfoCard from "./ArtworkInfoCard"
import type { artworksData } from "../models/DataModels"
import type { SearchResultsProps } from "../models/ComponentProps"
import PageIndex from "./PageIndex"

const SearchResults: React.FC<SearchResultsProps> = ({artworksInfo, exhibitions, setExhibitions})=>{
    return <>
    {/*<PageIndex itemsInfo={artworksInfo} path="/"/>*/}
    <ol>
        {artworksInfo.map((artwork: artworksData) =>{
            return <li key={artwork.id} className="listItem" >
                <ArtworkInfoCard artwork={artwork} exhibitions={exhibitions} setExhibitions={setExhibitions}/>
            </li>
        })}
    </ol>
    {/*<PageIndex itemsInfo={artworksInfo} path="/"/>*/}
    </>
}

export default SearchResults