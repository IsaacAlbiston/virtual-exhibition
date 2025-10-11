import { useEffect } from "react"
import NewExhibitionForm from "../components/NewExhibitionForm"
import type { NewExhibitionPageProps } from "../models/PageProps"

const NewExhibitionPage: React.FC<NewExhibitionPageProps> = ({exhibitions,setExhibitions})=>{
    
    useEffect(()=>{
        console.log(exhibitions)
    },[exhibitions])
    
    return <>
    <h1>New Exhibition</h1>
    <NewExhibitionForm setExhibitions={setExhibitions}/>
    </>
}

export default NewExhibitionPage