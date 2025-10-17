import { useEffect, useState } from "react"
import type { SearchParams } from "../models/ApiModels"
import { searchArtworks, searchArtworksVandA } from "../utils/api"

const UseLoadingHook = (selectAPI:string, searchTerm:SearchParams, refreshTerm?:string)=>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [totalResults, setTotalResults] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        if (('q' in searchTerm && 'museum' in searchTerm && 'after' in searchTerm && 'before' in searchTerm)&&(searchTerm.q||searchTerm.museum||searchTerm.after||searchTerm.before)){
            if (selectAPI==="SMG"){
                searchArtworks(searchTerm)
                .then((responseData:any)=>{
                    setData(responseData.data)
                    setTotalResults(responseData.meta.count.type.objects)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err:any)=>{
                    setIsLoading(false)
                    setError(err)
                })
            } else if (selectAPI==="VAM"){
                searchArtworksVandA(searchTerm)
                .then((responseData:any)=>{
                    setData(responseData.records)
                    setTotalResults(responseData.info.record_count)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err:any)=>{
                    setIsLoading(false)
                    setError(err)
                })
            }
        }

    },[searchTerm, refreshTerm])

    return { totalResults, data, isLoading, error}
}

export default UseLoadingHook