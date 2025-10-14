import { useParams } from "react-router"
import ArtworkList from "../components/ArtworkList"
import type { ExhibitionsPageProps } from "../models/PageProps"

const ExhibitionPage: React.FC<ExhibitionsPageProps> = ({exhibitions})=>{
    const {exhibitionIndex} = useParams()
    return <>
    {!isNaN(Number(exhibitionIndex)) && exhibitionIndex>=0 && exhibitionIndex<exhibitions.length?
    <>
    <h1>{exhibitions[exhibitionIndex].name}</h1>
    <ArtworkList exhibitionIndex={exhibitionIndex} artworks={exhibitions[exhibitionIndex].artworks}/>
    </>
    :<p>Exhibition Not Found</p>}
    </>
}

export default ExhibitionPage