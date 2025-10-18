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

    return <div className="px-4">
        <form onSubmit={searchQueryFormSubmit}>
            <div className="rounded-lg p-4 bg-gray-300">
                <div className="flex flex-col">
                    <NameInput inputName={inputName} setInputName={setInputName}/>
                    {failedSubmit? <p className="font-serif text-red-600 text-center" >Please Enter A Name</p>:null }
                    <>
                    <div className="py-4 flex justify-evenly">
                        <button className="w-2/6 font-serif rounded-lg bg-white hover:bg-slate-400" > Submit </button>
                        <button onClick={cancelFormEntry} className="w-2/6 font-serif rounded-lg bg-white hover:bg-slate-400" > Cancel </button>
                    </div>
                    </>
                </div>
            </div>
        </form>
    </div>
}

export default NewExhibitionForm