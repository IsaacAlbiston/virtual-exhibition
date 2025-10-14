import type { ArtworkPageInfoProps } from "../models/ComponentProps"

const ArtworkPageInfo: React.FC<ArtworkPageInfoProps> = ({artwork})=>{
    return <>
    {artwork.title?<h2>{artwork.title}</h2>:<h2>No Title Found</h2>}
    {artwork.imageURL?<img src={artwork.imageURL}/>:<p>No Image Found</p>}
    {artwork.description?<p>{artwork.description}</p>:<p>No Description Found</p>}
    {artwork.location?<p>{artwork.location}</p>:<p>No Location Found</p>}
    {artwork.websiteURL?<a href={artwork.websiteURL}>View On Museum Website</a>:<p>No Website URL Found</p>}
    </>
}

export default ArtworkPageInfo