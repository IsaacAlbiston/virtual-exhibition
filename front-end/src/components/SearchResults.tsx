import ArtworkInfoCard from "./ArtworkInfoCard"
import type { SearchResultsProps } from "../models/ComponentProps"
import PageIndex from "./PageIndex"
import type { Artwork } from "../models/Exhibitions"

const SearchResults: React.FC<SearchResultsProps> = ({totalResults, reformattedArtworks, exhibitions, setExhibitions})=>{
    return <>
    <PageIndex totalResults={totalResults} path="/"/>
    <ol>
        {reformattedArtworks.map((artwork: Artwork) =>{
            return <li key={artwork.id} className="listItem" >
                <ArtworkInfoCard artwork={artwork} exhibitions={exhibitions} setExhibitions={setExhibitions}/>
            </li>
        })}
    </ol>
    <PageIndex totalResults={totalResults} path="/"/>
    </>
}

export default SearchResults