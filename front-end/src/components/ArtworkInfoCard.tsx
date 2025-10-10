import type { ArtworkInfoCardProps } from "../models/SearchResults"

const ArtworkInfoCard: React.FC<ArtworkInfoCardProps> = ({artwork})=>{
    return <>
    <h2>{'title' in artwork.attributes.summary ?artwork.attributes.summary.title:'title missing'}</h2>
    {checkObjStructure(artwork, ['attributes','multimedia',0,'@processed','medium','location'])?<img src={'https://coimages.sciencemuseumgroup.org.uk/'+artwork.attributes.multimedia[0]['@processed'].medium.location}/>:<p>No Image Found</p>}
    {checkObjStructure(artwork, ['attributes','description',0,'value'])?<p>{artwork.attributes.description[0].value}</p>:<p>No Description Found</p>}
    </>
}

const checkObjStructure = (object:any, path:(string|number)[]) => {
    let temp = object;
    for (let i = 0; i < path.length; i++) {
        if (typeof path[i] === 'string'){
            try {
                if(!temp.hasOwnProperty(path[i])) { return undefined; } 
                temp = temp[path[i]];
            } catch {
                return undefined;
            }
        } else if (typeof path[i] === 'number'){
            try {
                if(!Array.isArray(temp) && temp.length<=path[i]) { return undefined; } 
                temp = temp[path[i]];
            } catch {
                return undefined;
            }
        }
    }
    return temp;
};

export default ArtworkInfoCard