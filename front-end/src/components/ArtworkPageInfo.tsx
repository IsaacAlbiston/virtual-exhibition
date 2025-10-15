import type { ArtworkPageInfoProps } from "../models/ComponentProps"

const ArtworkPageInfo: React.FC<ArtworkPageInfoProps> = ({artwork})=>{
    return <>
    <h2 className="p-4 text-3xl text-center font-serif">{artwork.title?artwork.title:'No Title Found'}</h2>
    {artwork.imageURL?<img src={artwork.imageURL}/>:<p>No Image Found</p>}
    {artwork.description?<p>{artwork.description}</p>:<p>No Description Found</p>}
    {artwork.location?<p>{artwork.location}</p>:<p>No Location Found</p>}
    {artwork.websiteURL?<a className="underline text-blue-600 font-serif" href={artwork.websiteURL}>View On Museum Website</a>:<p>No Website URL Found</p>}
    </>
}

export default ArtworkPageInfo