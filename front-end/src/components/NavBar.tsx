import { Link } from "react-router";

const NavBar = ()=>{
    return <div className="p-3 flex justify-evenly border-b-2 border-solid border-slate-300">
        <div className="w-36 text-center">
        <Link className="p-3  text-1xl text-center font-serif rounded-lg hover:bg-gray-400" to="/1">Home</Link>
        </div>
        <div className="w-36 text-center">
        <Link className="p-3 text-1xl text-center font-serif rounded-lg hover:bg-gray-400" to="/new-exhibition">New Exhibition</Link>
        </div>
        <div className="w-36 text-center">
        <Link className="p-3 text-1xl font-serif rounded-lg hover:bg-gray-400" to="/exhibitions">Exhibitions</Link>
        </div>
    </div>
}

export default NavBar