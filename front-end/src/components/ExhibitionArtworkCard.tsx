import { useNavigate } from "react-router"
import type { ExhibitionArtworkCardProps } from "../models/ComponentProps"

const ExhibitionArtworkCard: React.FC<ExhibitionArtworkCardProps> = ({artwork, exhibitionIndex})=>{
    const navigate = useNavigate()
    const viewArtwork = ()=>{
        navigate(`/exhibitions/${exhibitionIndex}/${artwork.id}`)
    }
    return <>
    {artwork.title?<h2>{artwork.title}</h2>:<h2>No Title Found</h2>}
    {artwork.imageURL?<img src={artwork.imageURL}/>:<p>No Image Found</p>}
    <button onClick={viewArtwork} className="font-serif rounded-lg bg-white hover:bg-gray-200" > View Artwork </button>
    </>
}

export default ExhibitionArtworkCard

