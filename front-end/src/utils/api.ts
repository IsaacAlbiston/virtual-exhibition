import axios from "axios"
import type { ParamsVandA, SearchParams } from "../models/ApiModels";

const scienceMuseumGroupApi = axios.create({
    baseURL: "https://collection.sciencemuseumgroup.org.uk",
  });
scienceMuseumGroupApi.defaults.headers.common['Accept'] = 'application/json'

export const searchArtworks: React.FC<SearchParams> = (searchFilters)=>{
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

const vAndAApi = axios.create({
    baseURL: 'https://api.vam.ac.uk/v2'
})

export const searchArtworksVandA: React.FC<SearchParams> = ({q,after,before})=>{
    let currentSearchParams:ParamsVandA = {}
    if (q) currentSearchParams.q = q
    if (after) currentSearchParams.year_made_from = after
    if (before) currentSearchParams.year_made_to = before
    return vAndAApi.get('/objects/search',{params:currentSearchParams})
    .then(res=>{
        return res.data.records
    })
}