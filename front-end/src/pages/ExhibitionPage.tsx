import { useParams } from "react-router"
import ArtworkList from "../components/ArtworkList"
import type { ExhibitionsPageProps } from "../models/PageProps"

const ExhibitionPage: React.FC<ExhibitionsPageProps> = ({exhibitions})=>{
    const {exhibitionIndex} = useParams()
    return <>
    {!isNaN(Number(exhibitionIndex)) && Number(exhibitionIndex)>=0 && Number(exhibitionIndex)<exhibitions.length?
    <>
    <h1 className="p-4 text-3xl text-center font-serif">{exhibitions[Number(exhibitionIndex)].name}</h1>
    <ArtworkList exhibitionIndex={Number(exhibitionIndex)} artworks={exhibitions[Number(exhibitionIndex)].artworks}/>
    </>
    :<p className="p-4 text-3xl text-center font-serif">Exhibition Not Found</p>}
    </>
}

export default ExhibitionPage