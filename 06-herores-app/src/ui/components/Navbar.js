import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const handleLogout = () => {
        // TODO: Logout
        console.log('Logout');
    }

    const activeClass = ({isActive}) =>  "nav-item nav-link " + (isActive?'active':'');

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className={activeClass} to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink className={activeClass} to="/dc">
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Josemi
                    </span>
                    <button className="nav-item nav-link btn" to="/login" onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}