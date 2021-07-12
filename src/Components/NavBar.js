import {Link } from 'react-router-dom'
const NavBar = ()=>{
    return(
        <ul className="nav">
            <li className="nav-item">
                <Link to="/"><span style={{fontSize:30}}>&#8962;</span>home </Link>
            </li>
        </ul>
    )
}

export default NavBar;