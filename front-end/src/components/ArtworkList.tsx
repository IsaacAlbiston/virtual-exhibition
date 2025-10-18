import type { ArtworkListProps } from "../models/ComponentProps"
import type { Artwork } from "../models/Exhibitions"
import ExhibitionArtworkCard from "./ExhibitionArtworkCard"

const ArtworkList: React.FC<ArtworkListProps> = ({artworks, exhibitionIndex})=>{
    return <>
    <ol className="rounded-lg m-4 bg-gray-300 sm:columns-2 lg:columns-3">
        {artworks.map((artwork: Artwork) =>{
            return <li key={artwork.imageURL} className="break-inside-avoid-column" >
                <ExhibitionArtworkCard exhibitionIndex={exhibitionIndex} artwork={artwork} />
            </li>
        })}
    </ol>
    </>
}

export default ArtworkList