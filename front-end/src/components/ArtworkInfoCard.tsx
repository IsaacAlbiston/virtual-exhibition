import type { ArtworkInfoCardProps } from "../models/ComponentProps"
import AddArtworkForm from "./AddArtworkForm"

const ArtworkInfoCard: React.FC<ArtworkInfoCardProps> = ({artwork, exhibitions, setExhibitions})=>{
    return <>
    <h2>{artwork&&artwork.title?artwork.title:'title missing'}</h2>
    {artwork&&artwork.imageURL?<img src={artwork.imageURL}/>:<p>No Image Found</p>}
    {artwork&&artwork.description?<p>{artwork.description}</p>:<p>No Description Found</p>}
    {artwork&&Array.isArray(exhibitions)&&exhibitions.length?<AddArtworkForm artwork={artwork} exhibitions={exhibitions} setExhibitions={setExhibitions} />:null}
    </>
}

export default ArtworkInfoCard