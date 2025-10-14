import { useState } from "react"
import type { AddArtworkFormProps } from "../models/ComponentProps"
import ExhibitionDropdown from "./ExhibitionDropdown"
import type { Artwork, Exhibition } from "../models/Exhibitions"

const AddArtworkForm:React.FC<AddArtworkFormProps> = ({reformattedArtwork, exhibitions, setExhibitions})=>{
    const [inputExhibition, setInputExhibition] = useState(exhibitions[0].name)
    const [inputExhibitionIndex, setInputExhibitionIndex] = useState(0)
    const [failedSubmit, setFailedSubmit] = useState(false)

    const addArtworkToExhibition = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if (inputExhibition!==""){
            setFailedSubmit(false)
            setExhibitions(current=>{
                const newExhibitions: Exhibition[] = [...current]
                if (!isArtworkInExhibition(reformattedArtwork,newExhibitions[inputExhibitionIndex])){
                    newExhibitions[inputExhibitionIndex].artworks = newExhibitions[inputExhibitionIndex].artworks.concat(reformattedArtwork)
                }
                return newExhibitions
            })
        } else {setFailedSubmit(true)}
    }
    return <form onSubmit={addArtworkToExhibition}>
        <ExhibitionDropdown exhibitions={exhibitions} inputExhibition={inputExhibition} setInputExhibition={setInputExhibition} setInputExhibitionIndex={setInputExhibitionIndex} />
        {failedSubmit? <p className="font-serif text-red-600 text-center" >Please select an exhibition</p>:null }
        {isArtworkInExhibition(reformattedArtwork,exhibitions[inputExhibitionIndex])?<p>Added to exhibition</p>:
        <button className="font-serif rounded-lg bg-white hover:bg-gray-200" > Add Artwork </button>
        }
    </form>
}

const isArtworkInExhibition = (artworkToCheck:Artwork, exhibition:Exhibition)=>{
    let foundArtworkFlag = false
    exhibition.artworks.forEach((artwork)=>{
        if (artworkToCheck.id===artwork.id){
            foundArtworkFlag = true
        }
    })
    return foundArtworkFlag
}

export default AddArtworkForm