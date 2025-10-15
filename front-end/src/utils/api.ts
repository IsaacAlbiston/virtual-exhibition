import axios from "axios"
import type { searchParams } from "../models/ApiModels";

const scienceMuseumGroupApi = axios.create({
    baseURL: "https://collection.sciencemuseumgroup.org.uk",
  });
scienceMuseumGroupApi.defaults.headers.common['Accept'] = 'application/json'

export const searchArtworks: React.FC<searchParams> = (searchFilters)=>{
    let searchString = '/search/objects'
    if (searchFilters.museum){
        searchString = searchString+`/museum/${searchFilters.museum}`
    }
    if (searchFilters.after){
        searchString = searchString+`/date[from]/${searchFilters.after}`
    }
    if (searchFilters.before){
        searchString = searchString+`/date[to]/${searchFilters.before}`
    }
    return scienceMuseumGroupApi.get(searchString, {params:{q:searchFilters.q}})
    .then(res=>{
        return res.data.data
    })
}