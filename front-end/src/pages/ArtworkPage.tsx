import { useParams } from "react-router"
import ArtworkPageInfo from "../components/ArtworkPageInfo"
import type { ArtworkPageProps } from "../models/PageProps"
import { useEffect, useState } from "react"
import BackButton from "../components/BackButton"
import type { Artwork } from "../models/Exhibitions"

const ArtworkPage: React.FC<ArtworkPageProps> = ({exhibitions})=>{
    const {exhibitionIndex, artworkId} = useParams()
    const [artworkInfo, setArtworkInfo] = useState<Artwork>({id:'',title:'',imageURL:'',description:'',location:'',websiteURL:''})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        if (!isNaN(Number(exhibitionIndex)) && Number(exhibitionIndex)>=0 && Number(exhibitionIndex)<exhibitions.length){
            exhibitions[Number(exhibitionIndex)].artworks.forEach((artwork)=>{
                if (artwork.id===artworkId){
                    setArtworkInfo(artwork)
                }
            })
        }
        setIsLoading(false)
    },[])
    return <div className="p-4">
        <div className="rounded-lg bg-gray-200">
            <div className="divide-y-2 divide-solid divide-slate-500">
                {isLoading?<p className="p-4 text-3xl text-center font-serif">Loading</p>:<>
                    {!isNaN(Number(exhibitionIndex)) && Number(exhibitionIndex)>=0 && Number(exhibitionIndex)<exhibitions.length && typeof artworkId==='string' &&  Object.keys (artworkInfo)?
                    <ArtworkPageInfo artwork={artworkInfo}/>
                    :<p className="p-4 text-3xl text-center font-serif">Artwork Not Found</p>}
                    <BackButton previousPage={`/exhibitions/${exhibitionIndex}`}/>
                </>}
            </div>
        </div>
    </div>
}

export default ArtworkPage