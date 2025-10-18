import { useNavigate } from "react-router"
import type { ExhibitionInfoCardProps } from "../models/ComponentProps"

const ExhibitionInfoCard: React.FC<ExhibitionInfoCardProps> = ({exhibition, exhibitionIndex})=>{
    const navigate = useNavigate()
    const viewExhibition = ()=>{navigate('/exhibitions/'+exhibitionIndex)}
    const addArtworks = ()=>{navigate('/1')}
    return <div className="p-4">
        <div className="rounded-lg bg-white">
            <div className="flex flex-col">
                <h2 className="pt-2 text-2xl text-center font-serif" >{exhibition.name}</h2>
                <div className="py-4 flex justify-evenly">
                    <button onClick={viewExhibition} className="w-2/5 font-serif rounded-lg bg-gray-300 hover:bg-slate-400" > View Exhibition </button>
                    <button onClick={addArtworks} className="w-2/5 font-serif rounded-lg bg-gray-300 hover:bg-slate-400" > Add Artworks </button>
                </div>
            </div>
        </div>
    </div>
}

export default ExhibitionInfoCard