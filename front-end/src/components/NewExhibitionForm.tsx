import { useState } from "react"
import type { NewExhibitionFormProps } from "../models/ComponentProps"
import NameInput from "./NameInput"
import type { Exhibition } from "../models/Exhibitions"
import { useNavigate } from "react-router"

const NewExhibitionForm: React.FC<NewExhibitionFormProps> = ({setExhibitions})=>{
    const [inputName, setInputName] = useState("")
    const [failedSubmit, setFailedSubmit] = useState(false)
    const navigate = useNavigate()

    const searchQueryFormSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if (inputName!==""){
            setFailedSubmit(false)
            setExhibitions(current=>{
                const newExhibitions: Exhibition[] = current.concat([{
                    name:inputName,
                    artworks: []
                }])
                return newExhibitions
            })
            navigate('/exhibitions')
        } else {setFailedSubmit(true)}
    }

    const cancelFormEntry = ()=>{
        navigate('/')
    }

    return <form onSubmit={searchQueryFormSubmit}>
        <NameInput inputName={inputName} setInputName={setInputName}/>
        {failedSubmit? <p className="font-serif text-red-600 text-center" >Please Enter A Name</p>:null }
        <>
        <button className="font-serif rounded-lg bg-white hover:bg-gray-200" > Submit </button>
        <button onClick={cancelFormEntry} className="font-serif rounded-lg bg-white hover:bg-gray-200" > Cancel </button>
        </>
    </form>
}

export default NewExhibitionForm