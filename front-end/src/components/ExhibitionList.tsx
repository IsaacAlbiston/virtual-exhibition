import type { ExhibitionListProps } from "../models/ComponentProps"
import type { Exhibition } from "../models/Exhibitions"
import ExhibitionInfoCard from "./ExhibitionInfoCard"

const ExhibitionList: React.FC<ExhibitionListProps> = ({exhibitions})=>{
    return <>
    <ol className="rounded-lg m-4 bg-gray-300 sm:columns-2 lg:columns-3">
        {exhibitions.map((exhibition: Exhibition) =>{
            return <li key={exhibition.name} className="break-inside-avoid-column" >
                <ExhibitionInfoCard exhibition={exhibition} exhibitionIndex={exhibitions.indexOf(exhibition)} />
            </li>
        })}
    </ol>
    </>
}

export default ExhibitionList