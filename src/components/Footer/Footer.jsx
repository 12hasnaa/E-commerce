import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer className=' bg-secondary-subtle py-3 fixed-bottom shadow-lg'>
      <div className="container text-center text-capitalize ">
        <span>created by <h4 className='d-inline '><Link className='text-main mx-1' to={'https://www.linkedin.com/in/hasnaa-newagy-413728292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='_blank'> Hasnaa Latif Newagy </Link></h4> &copy;2024 </span>
        
      </div>
    </footer>
    </>
  )
}
