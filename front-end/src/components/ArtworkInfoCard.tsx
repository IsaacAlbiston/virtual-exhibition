import { useEffect, useState } from "react"
import type { ArtworkInfoCardProps } from "../models/ComponentProps"
import CheckObjStructure from "../utils/DataUtils"
import AddArtworkForm from "./AddArtworkForm"
import type { Artwork } from "../models/Exhibitions"

const ArtworkInfoCard: React.FC<ArtworkInfoCardProps> = ({artwork, exhibitions, setExhibitions})=>{
    const [reformattedArtwork, setReformattedArtwork] = useState<Artwork>()

    useEffect(()=>{
        const locationLookupObj = {
            'SCM': 'Science Museum, London',
            'NSMM': 'National Media Museum, Bradford',
            'NRM': 'National Railway Museum, York',
            'SIM': 'Science and Industry Museum, Manchester'
        }
        setReformattedArtwork({
            id: artwork.id,
            title: CheckObjStructure(artwork, ['attributes','summary','title'])?artwork.attributes.summary.title:'',
            imageURL: CheckObjStructure(artwork, ['attributes','multimedia',0,'@processed','medium','location'])?'https://coimages.sciencemuseumgroup.org.uk/'+artwork.attributes.multimedia[0]['@processed'].medium.location:'',
            description: CheckObjStructure(artwork, ['attributes','description',0,'value'])?artwork.attributes.description[0].value:'',
            location: CheckObjStructure(artwork, ['attributes','category',0,'museum'])&&artwork.attributes.category[0].museum in locationLookupObj?locationLookupObj[artwork.attributes.category[0].museum]:'',
            websiteURL: CheckObjStructure(artwork, ['links','self'])?artwork.links.self:''
        })
    },[])
    return <>
    <h2>{reformattedArtwork&&reformattedArtwork.title?reformattedArtwork.title:'title missing'}</h2>
    {reformattedArtwork&&reformattedArtwork.imageURL?<img src={reformattedArtwork.imageURL}/>:<p>No Image Found</p>}
    {reformattedArtwork&&reformattedArtwork.description?<p>{reformattedArtwork.description}</p>:<p>No Description Found</p>}
    {reformattedArtwork&&Array.isArray(exhibitions)&&exhibitions.length?<AddArtworkForm reformattedArtwork={reformattedArtwork} exhibitions={exhibitions} setExhibitions={setExhibitions} />:null}
    </>
}

export default ArtworkInfoCard