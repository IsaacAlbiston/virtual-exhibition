import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import type { pageIndexParams } from "../models/PageIndex"

const PageIndex: React.FC<pageIndexParams> = ({itemsInfo, path})=>{
    const [pageArr, setPageArr] = useState([])
    const {topic, pageNumber} = useParams()

    useEffect(()=>{
        setPageArr(()=>{
            const newPageArr = []
            const totalPageCount = Math.ceil(itemsInfo.total_count/10)
            for (let i=1; i<=totalPageCount; i++){
                newPageArr.push(i)
            }
            return newPageArr
        })
    },[itemsInfo])

    return <div className="PageIndex">
    {pageArr.map(page=>{
            return <>
            {Number(page)!==Number(pageNumber)?<Link to={`${path}/${page}${topic?`/${topic}`:""}`}>{page}</Link>:
            <p className="unclickableLink">{page}</p>}
            </>
        })}
    </div>
}

export default PageIndex