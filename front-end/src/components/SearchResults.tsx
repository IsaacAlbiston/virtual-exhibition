import ArtworkInfoCard from "./ArtworkInfoCard"
import type { SearchResultsProps } from "../models/ComponentProps"
import PageIndex from "./PageIndex"
import type { Artwork } from "../models/Exhibitions"

const SearchResults: React.FC<SearchResultsProps> = ({totalResults, reformattedArtworks, exhibitions, setExhibitions})=>{
    return <div>
    <PageIndex totalResults={totalResults} path="/"/>
    <ol className="rounded-lg m-4 bg-gray-200 sm:columns-2 lg:columns-3">
        {reformattedArtworks.map((artwork: Artwork) =>{
            return <li key={artwork.id} className="break-inside-avoid-column" >
                <ArtworkInfoCard artwork={artwork} exhibitions={exhibitions} setExhibitions={setExhibitions}/>
            </li>
        })}
    </ol>
    <PageIndex totalResults={totalResults} path="/"/>
    </div>
}

export default SearchResults