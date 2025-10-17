import { useState } from "react"
import type { AddArtworkFormProps } from "../models/ComponentProps"
import ExhibitionDropdown from "./ExhibitionDropdown"
import type { Artwork, Exhibition } from "../models/Exhibitions"

const AddArtworkForm:React.FC<AddArtworkFormProps> = ({artwork, exhibitions, setExhibitions})=>{
    const [inputExhibition, setInputExhibition] = useState(exhibitions[0].name)
    const [inputExhibitionIndex, setInputExhibitionIndex] = useState(0)
    const [failedSubmit, setFailedSubmit] = useState(false)

    const addArtworkToExhibition = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if (inputExhibition!==""){
            setFailedSubmit(false)
            setExhibitions(current=>{
                const newExhibitions: Exhibition[] = [...current]
                if (!isArtworkInExhibition(artwork,newExhibitions[inputExhibitionIndex])){
                    newExhibitions[inputExhibitionIndex].artworks = newExhibitions[inputExhibitionIndex].artworks.concat(artwork)
                }
                return newExhibitions
            })
        } else {setFailedSubmit(true)}
    }

    const removeArtwork = ()=>{
        if (inputExhibition!==""){
            setExhibitions(current=>{
                const newExhibitions: Exhibition[] = current.map((exhibition)=>{
                    if (exhibition.name!==inputExhibition) return exhibition
                    if (exhibition.artworks.length===1) return {name:exhibition.name,artworks:[]}
                    const exhibitionWithoutArtwork:Artwork[] = []
                    exhibition.artworks.forEach((currentArtwork)=>{
                        if (currentArtwork.id!==artwork.id) exhibitionWithoutArtwork.push(currentArtwork) 
                    })
                    return {
                        name:exhibition.name,
                        artworks: exhibitionWithoutArtwork
                    }
                })
                
                return newExhibitions
            })
        }
    }

    return <form onSubmit={addArtworkToExhibition}>
        <ExhibitionDropdown exhibitions={exhibitions} inputExhibition={inputExhibition} setInputExhibition={setInputExhibition} setInputExhibitionIndex={setInputExhibitionIndex} />
            <div className="pb-4 px-4 flex flex-col">
        {failedSubmit? <p className="font-serif text-red-600 text-center" >Please select an exhibition</p>:null }
        {isArtworkInExhibition(artwork,exhibitions[inputExhibitionIndex])?<>
            <p className="pb-4 font-serif text-center">Added to exhibition</p>
            <button onClick={removeArtwork} className="font-serif rounded-lg bg-gray-200 hover:bg-slate-400" > Remove Artwork </button>
        </>:
            <button className="font-serif rounded-lg bg-gray-200 hover:bg-slate-400" > Add Artwork </button>
        }
        </div>
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