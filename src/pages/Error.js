import { NavLink } from 'react-router-dom';

const Error = () => 
{
    return (
        <div className="error">

            <h2>404</h2>

            <p>Page not found</p>

            <NavLink to="/">Go Home</NavLink>
            
        </div>
    )
}

export default Error;