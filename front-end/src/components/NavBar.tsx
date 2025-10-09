import { Link } from "react-router";

const NavBar = ()=>{
    return <div className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/new-exhibition">New Exhibition</Link>
        <Link to="/exhibitions">Exhibitions</Link>
    </div>
}

export default NavBar