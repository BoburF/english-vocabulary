import { Link } from 'react-router-dom'
import './User.scss'

const User = () => {
  return (
    <div className='User'>
        <Link to={'/user/vocabulary'} className="start_btn" title='Get started vocabulary'>
          Get Started
        </Link>
    </div>
  )
}

export default User