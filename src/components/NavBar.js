import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function NavBar() {
	const [expandNavbar, setExpandNavbar] = useState(false);
	const [sticky, setSticky] = React.useState(false);

	const location = useLocation();
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 50) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	useEffect(() => {
		setExpandNavbar(false);
	}, [location]);

	return (
		<div className={sticky ? 'navbar sticky' : 'navbar'} id={expandNavbar ? 'open' : 'close'}>
			<div className='toggleButton'>
				<button
					onClick={() => {
						setExpandNavbar((prev) => !prev);
					}}>
					<ReorderIcon />
				</button>
			</div>
			<div className='links'>
				<Link to='/'> Home </Link>
				<Link to='/projects'> Projects </Link>
				<Link to='/experience'> Experience </Link>
			</div>
		</div>
	);
}

export default NavBar;
