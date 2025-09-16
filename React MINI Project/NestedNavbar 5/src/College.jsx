import { NavLink , Outlet, Link} from "react-router"
export default function College(){

    return <div style={{textAlign:'center'}} className="college">

            <h1>College Page </h1>

            <h3><Link to="/" className="link">Go Back to Homepage...</Link></h3>

            <NavLink className="link" to="">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="detail">College Detail</NavLink>
            <Outlet/>

       
        </div>

}