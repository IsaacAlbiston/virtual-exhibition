import type { ArtworkPageInfoProps } from "../models/ComponentProps"

const ArtworkPageInfo: React.FC<ArtworkPageInfoProps> = ({artwork})=>{
    return <>
    <h2 className="p-4 text-3xl text-center font-serif">{artwork.title?artwork.title:'No Title Found'}</h2>
    <div className='p-4 h-max-80 flex justify-center'>
        {artwork&&artwork.imageURL?<img className='object-contain' alt="Picture of Artwork" src={artwork.imageURL}/>:<p className='px-4 text-2xl text-center font-serif'>No Image Found</p>}
    </div>
    <p className='p-4 text-center font-serif'>{artwork.description?artwork.description:'No Description Found'}</p>
    <p className='p-4 text-center font-serif'>Location: {artwork.location?artwork.location:'No Location Found'}</p>
    <div className="p-4 flex justify-center">
        {artwork.websiteURL?<a className="underline text-blue-700 font-serif" href={artwork.websiteURL}>View On Museum Website</a>:<p className='p-4 text-center font-serif' >No Website URL Found</p>}
    </div>
    </>
}

export default ArtworkPageInfo