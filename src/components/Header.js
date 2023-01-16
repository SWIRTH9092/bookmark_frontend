//----------------------
//  Header Component
//----------------------


//----------------------
//  import Dependencies
//----------------------
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <div>
            <div className="header">
                <h1>Bookmarks</h1>
            </div>
            <nav className="nav">
                <Link to="/">
                    <div>??????</div>
                </Link>
            </nav>

        </div>
    )
}

//----------------------
//  Export Header Component
//----------------------
export default Header;