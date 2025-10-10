import type { ArtworkInfoCardProps } from "../models/SearchResults"

const ArtworkInfoCard: React.FC<ArtworkInfoCardProps> = ({artwork})=>{
    return <>
    <h2>{'title' in artwork.attributes.summary ?artwork.attributes.summary.title:'title missing'}</h2>
    </>
}

export default ArtworkInfoCard