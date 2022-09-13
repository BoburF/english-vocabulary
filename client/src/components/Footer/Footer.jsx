import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="row align_items_center justify_content_between">
                <div className="left">
                    <Link to={'/description'}>
                        Docs
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer