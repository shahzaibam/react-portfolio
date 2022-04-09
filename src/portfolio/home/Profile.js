import React from 'react'
import Typical from 'react-typical'
import '../home/Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-detail'>
                    <div className='icon-column'>
                        <div className="all-icons">
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
                                        "Wordpress Expert",
                                        1000,
                                        "React/Bootstrap Dev",
                                        1000,
                                        "Specialist in Networking",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>

                        <span className='shortDesc'>
                            Knack of building websites with frontend operations.
                        </span>
                    </div>



                    <div className='buttons mt-4'>
                        <a className='btn1' href="#">
                            <button>Hire Me!</button>

                        </a>

                        <a className='btn2' href="shebi.pdf" download="Shah Zaib.pdf">
                            <button>Get CV</button>
                        </a>
                    </div>



                    <div className="profile-picture-background">

                    </div>

                    
                </div>
            </div>
        </div>
    )
}
