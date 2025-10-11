import type { ExhibitionInfoCardProps } from "../models/ComponentProps"

const ExhibitionInfoCard: React.FC<ExhibitionInfoCardProps> = ({exhibition})=>{
    return <>
    <h2>{exhibition.name}</h2>
    </>
}

export default ExhibitionInfoCard