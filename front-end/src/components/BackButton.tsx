import { useNavigate } from "react-router"
import type { BackButtonProps } from "../models/ComponentProps"

const BackButton: React.FC<BackButtonProps> = ({previousPage})=>{
    const navigate = useNavigate()

    const navigateBack = ()=>{
        navigate(previousPage)
    }

    return <>
        <button onClick={navigateBack} className="m-4 font-serif rounded-lg bg-white hover:bg-gray-400" > Back </button>
    </>
}

export default BackButton