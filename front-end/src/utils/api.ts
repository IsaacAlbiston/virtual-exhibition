import axios from "axios"
import type { searchParams } from "../models/ApiModels";

const scienceMuseumGroupApi = axios.create({
    baseURL: "https://collection.sciencemuseumgroup.org.uk",
  });
scienceMuseumGroupApi.defaults.headers.common['Accept'] = 'application/json'

export const searchArtworks: React.FC<searchParams> = (givenParams)=>{
    return scienceMuseumGroupApi.get("/search/objects", {params:{...givenParams}})
    .then(res=>{
        return res.data.data
    })
}