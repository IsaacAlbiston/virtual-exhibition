import { useParams } from "react-router"
import ArtworkList from "../components/ArtworkList"
import type { ExhibitionsPageProps } from "../models/PageProps"

const ExhibitionPage: React.FC<ExhibitionsPageProps> = ({exhibitions})=>{
    const {exhibitionIndex} = useParams()
    return <>
    <h1>{exhibitions[exhibitionIndex].name}</h1>
    {Number(exhibitionIndex)>=0?<ArtworkList artworks={exhibitions[exhibitionIndex].artworks}/>:null}
    </>
}

export default ExhibitionPage