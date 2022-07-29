import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';
import '../styles/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className='socialMedia'>
				<Link href='https://github.com/berkaytorun'>
					<GithubIcon />
				</Link>
				<Link href='https://www.linkedin.com/in/berkaytorun/'>
					<LinkedInIcon />
				</Link>
				<Link href='mailto:berkayk3211@gmail.com'>
					<EmailIcon />
				</Link>
			</div>
			<p>&copy; 2022 Berkay Torun</p>
		</div>
	);
}

export default Footer;
