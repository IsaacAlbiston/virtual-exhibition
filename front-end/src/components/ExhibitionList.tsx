import type { ExhibitionListProps } from "../models/ComponentProps"
import type { Exhibition } from "../models/Exhibitions"
import ExhibitionInfoCard from "./ExhibitionInfoCard"

const ExhibitionList: React.FC<ExhibitionListProps> = ({exhibitions})=>{
    return <>
    <ol>
        {exhibitions.map((exhibition: Exhibition) =>{
            return <li key={exhibition.name} className="listItem" >
                <ExhibitionInfoCard exhibition={exhibition} exhibitionIndex={exhibitions.indexOf(exhibition)} />
            </li>
        })}
    </ol>
    </>
}

export default ExhibitionList