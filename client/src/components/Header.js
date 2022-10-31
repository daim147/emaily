import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
				<Link to='/' className='left brand-logo'>
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
