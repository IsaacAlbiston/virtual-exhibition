import { useEffect, useState } from "react"
import type { searchParams } from "../models/ApiModels"

const UseLoadingHook = (dataFetchFunction:React.FC<searchParams>, searchTerm:searchParams, refreshTerm?:string)=>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        console.log(searchTerm)
        if (('q' in searchTerm && 'museum' in searchTerm && 'after' in searchTerm && 'before' in searchTerm)&&(searchTerm.q||searchTerm.museum||searchTerm.after||searchTerm.before)){
            dataFetchFunction(searchTerm)
            .then((responseData)=>{
                setData(responseData)
                setIsLoading(false)
                setError(null)
                console.log(responseData)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            })
        }

    },[searchTerm, refreshTerm])

    return { data, isLoading, error}
}

export default UseLoadingHook