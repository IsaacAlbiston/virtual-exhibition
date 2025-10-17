import { Link, useLocation } from "react-router";

const NavBar = ()=>{
    const currentPath = useLocation().pathname
    return <div className="p-3 flex justify-evenly border-b-2 border-solid border-slate-300">
        <div className="w-36 text-center">
            {!isNaN(Number(currentPath[1]))?<p className="text-center text-gray-500 font-serif rounded-lg">Home</p>:<Link className="p-3 text-center font-bold font-serif rounded-lg hover:bg-gray-400" to="/1">Home</Link>}
        </div>
        <div className="w-36 text-center">
            {currentPath==='/new-exhibition'?<p className="text-center text-gray-500 font-serif rounded-lg">New Exhibition</p>:<Link className="p-3 text-center font-bold font-serif rounded-lg hover:bg-gray-400" to="/new-exhibition">New Exhibition</Link>}
        </div>
        <div className="w-36 text-center">
            {currentPath==='/exhibitions'?<p className="text-center text-gray-500 font-serif rounded-lg">Exhibitions</p>:<Link className="p-3 font-bold font-serif rounded-lg hover:bg-gray-400" to="/exhibitions">Exhibitions</Link>}
        </div>
    </div>
}

export default NavBar