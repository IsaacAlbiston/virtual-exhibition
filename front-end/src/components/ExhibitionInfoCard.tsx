import { useNavigate } from "react-router"
import type { ExhibitionInfoCardProps } from "../models/ComponentProps"

const ExhibitionInfoCard: React.FC<ExhibitionInfoCardProps> = ({exhibition, exhibitionIndex})=>{
    const navigate = useNavigate()
    const viewExhibition = ()=>{
        navigate('/exhibitions/'+exhibitionIndex)
    }
    return <>
    <h2>{exhibition.name}</h2>
    <button onClick={viewExhibition} className="font-serif rounded-lg bg-white hover:bg-gray-200" > View Exhibition </button>
    </>
}

export default ExhibitionInfoCard