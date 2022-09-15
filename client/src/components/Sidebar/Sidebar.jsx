import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <ul className='ul'>
            <li className='user_data'>
                <NavLink to={'/user'}>
                    <div className="user_img">
                        <img src="/img/avatar.webp" alt="" />
                    </div>
                    <p>Username</p>
                </NavLink>
            </li>
            <li className="user_vocab">
                <NavLink to={'/user/vocabulary'}>
                    Vocabulary
                </NavLink>
            </li>
            <li className="user_vocab">
                <NavLink to={'/user/random'}>
                    Random word from vocabulary
                </NavLink>
            </li>
            <li className="user_vocab">
                <NavLink to={'/user/settings'}>
                    Settings
                </NavLink>
            </li>
            <li className="user_vocab">
                <NavLink to={'/user/logout'}>
                    Log out
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar