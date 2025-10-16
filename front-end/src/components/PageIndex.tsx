import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import type { PageIndexParams } from "../models/ComponentProps"

const PageIndex: React.FC<PageIndexParams> = ({totalResults, path})=>{
    const [pageArr, setPageArr] = useState<string[]>([])
    const {pageNumber} = useParams()

    useEffect(()=>{
        setPageArr(()=>{
            let newPageArr:string[] = []
            const totalPageCount = Math.ceil(totalResults/20)
            if (totalPageCount>7){
                if (Number(pageNumber)<=3){
                    newPageArr = newPageArr.concat(['1','2','3','4','5','...',String(totalPageCount)])
                } else if(Number(pageNumber)>=totalPageCount-3){
                    newPageArr = newPageArr.concat(['1','...',String(totalPageCount-4),String(totalPageCount-3),String(totalPageCount-2),String(totalPageCount-1),String(totalPageCount)])
                } else{
                    newPageArr = newPageArr.concat(['1','...',String(Number(pageNumber)-1),String(pageNumber),String(Number(pageNumber)+1),'...',String(totalPageCount)])
                }
            }
            else{
                for (let i=1; i<=totalPageCount; i++){
                    newPageArr.push(String(i))
                }
            }
            console.log(newPageArr)
            return newPageArr
        })
    },[totalResults, pageNumber])

    return <div className="PageIndex">
        {pageArr.map(page=>{
            return <>
                {Number(page)!==Number(pageNumber)&&!isNaN(Number(page))?<Link to={`/${page}`}>{page}</Link>:
                <p>{page}</p>}
            </>
        })}
    </div>
}

export default PageIndex