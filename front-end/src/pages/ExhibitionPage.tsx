import { useParams } from "react-router"
import ArtworkList from "../components/ArtworkList"
import type { ExhibitionsPageProps } from "../models/PageProps"
import type { Exhibition } from "../models/Exhibitions"

const ExhibitionPage: React.FC<ExhibitionsPageProps> = ({exhibitions})=>{
    const {exhibitionIndex} = useParams()
    return <>
    <h1>{exhibitions[exhibitionIndex].name}</h1>
    {exhibitionIndex>=0?<ArtworkList artworks={exhibitions[exhibitionIndex].artworks}/>:null}
    </>
}
//{findExhibitionIndex(exhibitions,exhibitionName)<0?<ArtworkList artworks={exhibitions[findExhibitionIndex(exhibitions,exhibitionName)].artworks}/>:null}

const findExhibitionIndex = (exhibitions: Exhibition[], exhibitionName:string)=>{
    let index = 0
    exhibitions.forEach((exhibition)=>{
        if (exhibition.hasOwnProperty(exhibitionName)) {
            return index
        }
        index++
    })
    return -1
}

export default ExhibitionPage