import type { ArtworkListProps } from "../models/ComponentProps"
import type { Artwork } from "../models/Exhibitions"
import ExhibitionArtworkCard from "./ExhibitionArtworkCard"

const ArtworkList: React.FC<ArtworkListProps> = ({artworks, exhibitionIndex})=>{
    return <>
    <ol>
        {artworks.map((artwork: Artwork) =>{
            return <li key={artwork.imageURL} className="listItem" >
                <ExhibitionArtworkCard exhibitionIndex={exhibitionIndex} artwork={artwork} />
            </li>
        })}
    </ol>
    </>
}

export default ArtworkList