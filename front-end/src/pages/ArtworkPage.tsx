import { useParams } from "react-router"
import ArtworkPageInfo from "../components/ArtworkPageInfo"
import type { ArtworkPageProps } from "../models/PageProps"
import { useEffect, useState } from "react"
import BackButton from "../components/BackButton"

const ArtworkPage: React.FC<ArtworkPageProps> = ({exhibitions})=>{
    const {exhibitionIndex, artworkId} = useParams()
    const [artworkInfo, setArtworkInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        let tempArtwork = {}
        if (!isNaN(Number(exhibitionIndex)) && exhibitionIndex>=0 && exhibitionIndex<exhibitions.length){
            exhibitions[exhibitionIndex].artworks.forEach((artwork)=>{
                if (artwork.id===artworkId){
                    tempArtwork = artwork
                }
            })
            setArtworkInfo(tempArtwork)
        }
        setIsLoading(false)
    },[])
    return <>
    {isLoading?
    <p>Loading</p>:
    <>
        {!isNaN(Number(exhibitionIndex)) && exhibitionIndex>=0 && exhibitionIndex<exhibitions.length && typeof artworkId==='string' &&  Object.keys(artworkInfo)?
        <ArtworkPageInfo artwork={artworkInfo}/>
        :<p>Artwork Not Found</p>}
        <BackButton previousPage={`/exhibitions/${exhibitionIndex}`}/>
    </>}
    </>
}

export default ArtworkPage