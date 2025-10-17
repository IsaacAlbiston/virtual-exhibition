import ExhibitionList from "../components/ExhibitionList"
import type { ExhibitionsPageProps } from "../models/PageProps"

const ExhibitionsPage: React.FC<ExhibitionsPageProps> = ({exhibitions})=>{
    return <>
    <h1 className="p-4 text-3xl text-center font-serif" >Exhibitions</h1>
    <ExhibitionList exhibitions={exhibitions}/>
    </>
}

export default ExhibitionsPage