import React from 'react'
import './style.css'
import AppleStore from '../../assets/imgs/apple.png'
import GooglePlayedit from '../../assets/imgs/playstor.png'
import src from '../../assets/imgs/landing.png'
const LandingPage = () => {
  return (
    <div className='TKiKK'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={src} alt='HomeImg' />
                </div>
                <div className='col-lg-6 align-items-center right-column'>
                <h1 className="responsive-heading">Welcome to our Waamclub</h1>
                    <p className='sub-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1</p>
                    <div className='row'>
                        <div className='col-lg-6 m-auto'>
                        <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={AppleStore} alt="YourImage" className="responsive-image" /></button>
                        </div>
                        <div className='col-lg-6 m-auto'>
                        <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={GooglePlayedit} alt="YourImage" className="responsive-image" /></button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 text-center'>
                    <a href='' className='btn btn-primary mx-3'>Login</a>
                    <a href='' className='btn btn-primary'>Deshboard</a>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default LandingPage