import { useNavigate } from "react-router"
import type { BackButtonProps } from "../models/ComponentProps"

const BackButton: React.FC<BackButtonProps> = ({previousPage})=>{
    const navigate = useNavigate()

    const navigateBack = ()=>{
        navigate(previousPage)
    }

    return <div className="p-4">
        <button onClick={navigateBack} className="w-full font-serif rounded-lg bg-white hover:bg-gray-400" > Back </button>
    </div>
}

export default BackButton