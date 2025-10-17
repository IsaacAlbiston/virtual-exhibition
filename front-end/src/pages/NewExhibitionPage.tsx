import NewExhibitionForm from "../components/NewExhibitionForm"
import type { NewExhibitionPageProps } from "../models/PageProps"

const NewExhibitionPage: React.FC<NewExhibitionPageProps> = ({exhibitions,setExhibitions})=>{
    
    return <>
    <h1 className="p-4 text-3xl text-center font-serif">New Exhibition</h1>
    <NewExhibitionForm setExhibitions={setExhibitions}/>
    </>
}

export default NewExhibitionPage