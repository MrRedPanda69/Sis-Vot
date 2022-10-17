import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-prussian-blue px-3">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Logo
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/candidates"
                    >
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-table-list me-2"></i>Candidatos
                        </div>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/vote"
                    >
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-person-booth me-2"></i>Votar
                        </div>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/results"
                    >
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-square-poll-vertical me-2"></i>Resultados
                        </div>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/add-candidate"
                    >
                        <div className='d-flex align-items-center'>
                        <i className="fa-solid fa-user-plus me-2"></i>Agregar
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-white'>
                        <i className="fa-solid fa-user me-2"></i>Jorge Loredo
                    </span>
                    
                    <button
                        className='nav-item nav-link btn'
                    >
                        <i className="fa-solid fa-right-from-bracket me-2 text-danger"></i>Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}