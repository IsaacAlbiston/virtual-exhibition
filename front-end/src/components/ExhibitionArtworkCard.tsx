import { useNavigate } from "react-router"
import type { ExhibitionArtworkCardProps } from "../models/ComponentProps"

const ExhibitionArtworkCard: React.FC<ExhibitionArtworkCardProps> = ({artwork, exhibitionIndex})=>{
    const navigate = useNavigate()
    const viewArtwork = ()=>{
        navigate(`/exhibitions/${exhibitionIndex}/${artwork.id}`)
    }
    return <div className="p-4">
        <div className="rounded-lg bg-white">
            <div className="flex flex-col">
                <h2 className="p-4 text-2xl text-center font-serif">{artwork&&artwork.title?artwork.title:'No Title Found'}</h2>
                <div className='max-h-80 flex justify-center'>
                    {artwork&&artwork.imageURL?<img className='px-4 max-w-3/4 max-h-80' src={artwork.imageURL}/>:<p className='px-4 text-2xl text-center font-serif'>No Image Found</p>}
                </div>
                <button onClick={viewArtwork} className="m-4 font-serif rounded-lg bg-gray-200 hover:bg-slate-400" > View Artwork </button>
            </div>
        </div>
    </div>
}

export default ExhibitionArtworkCard

