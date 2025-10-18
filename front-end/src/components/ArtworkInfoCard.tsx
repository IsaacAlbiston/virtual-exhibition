import type { ArtworkInfoCardProps } from "../models/ComponentProps"
import AddArtworkForm from "./AddArtworkForm"

const ArtworkInfoCard: React.FC<ArtworkInfoCardProps> = ({artwork, exhibitions, setExhibitions})=>{
    return <div className="p-4">
        <div className="rounded-lg bg-white">
            <div className="flex flex-col">
                <h2 className="p-4 text-2xl text-center font-serif">{artwork&&artwork.title?artwork.title:'title missing'}</h2>
                <div className='max-h-80 flex justify-center'>
                    {artwork&&artwork.imageURL?<img alt="Picture of Artwork" className='px-4 max-w-3/4 max-h-80' src={artwork.imageURL}/>:<p className='px-4 text-2xl text-center font-serif'>No Image Found</p>}
                </div>
                <p className='px-4 text-1xl text-center font-serif'>{artwork&&artwork.description?artwork.description:'No Description Found'}</p>
                {artwork&&Array.isArray(exhibitions)&&exhibitions.length?<AddArtworkForm artwork={artwork} exhibitions={exhibitions} setExhibitions={setExhibitions} />:null}
            </div>
        </div>
    </div>
}

export default ArtworkInfoCard