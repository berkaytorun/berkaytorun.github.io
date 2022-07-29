import React from 'react'
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';
import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>
                    Berkay Torun
                </h2>
                <div className='prompt'>
                    <p>
                        A software developer with a passion for learning and creating
                    </p>
                    <Link href="https://github.com/berkaytorun">
                        <GithubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/berkaytorun/" >
                        <LinkedInIcon />
                    </Link>
                    <Link href="mailto:berkayk3211@gmail.com">
                        <EmailIcon />
                    </Link>
                </div>
            </div>
            <div className='skills'>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, HTML, CSS, Jquery, Ajax
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, ExpressJS, RestAPI, Docker, MySQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home