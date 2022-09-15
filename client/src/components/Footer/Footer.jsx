import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

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
                <div className="right">
                    <a href="https://real-movie-frontend.vercel.app">
                        Movies
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer