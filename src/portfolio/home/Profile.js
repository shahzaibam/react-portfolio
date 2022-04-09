import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-detail'>
                <div className='icon-column'>
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>

                    <a href="#">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                    
                        Hello, I'M <span className='highlighted-text'>Shah Zaib</span>
                    </span>
                </div>

                <div className='profile-details-profesion'>
                    <span>
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Frontend Developer",
                                1000,
                                "Wordpress Designer",
                                1000,
                                "React/Bootstrap Developer",
                                1000,
                                "Specialist in Networking",
                                1000,
                            ]}
                            />
                        </h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
