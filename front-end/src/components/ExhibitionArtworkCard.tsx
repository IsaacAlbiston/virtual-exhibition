import type { ExhibitionArtworkCardProps } from "../models/ComponentProps"

const ExhibitionArtworkCard: React.FC<ExhibitionArtworkCardProps> = ({artwork})=>{
    return <>
    {artwork.title?<h2>{artwork.title}</h2>:<h2>No Title Found</h2>}
    {artwork.imageURL?<img src={artwork.imageURL}/>:<p>No Image Found</p>}
    {artwork.description?<p>{artwork.description}</p>:<p>No Description Found</p>}
    {artwork.location?<p>{artwork.location}</p>:<p>No Location Found</p>}
    {artwork.websiteURL?<p>{artwork.websiteURL}</p>:<p>No Website URL Found</p>}
    </>
}

export default ExhibitionArtworkCard

