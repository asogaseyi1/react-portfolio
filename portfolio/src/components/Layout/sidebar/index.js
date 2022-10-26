import './index.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to= "./index.js">
            <h1>"Oluwaseyi Asoga"</h1>
        </Link>

    </div>
)

export default Sidebar;