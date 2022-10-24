import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = () => {
	const auth = useSelector((state) => state.auth);

	const renderContent = useCallback(() => {
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href='/auth/google'>Login With Google</a>
					</li>
				);
			default:
				return (
					<>
						<li>
							{/* <Link to='/payments'>Add Credits</Link> */}
							<a href='/api/stripe'>Add Credits</a>
						</li>
						<li>
							<span>Credits : {auth.credits} </span>
						</li>
						<li>
							<a href='/api/logout'>Logout</a>
						</li>
					</>
				);
		}
	}, [auth]);

	return (
		<nav>
			<div className='nav-wrapper'>
				<Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
					Emaily
				</Link>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
};

export default memo(Header);
