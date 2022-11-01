import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Surveys = () => {
	console.log('Surevys');
	return (
		<div>
			<SurveyList />
			<div className='fixed-action-btn'>
				<Link to='new' className='btn-floating btn-large red'>
					<i className='material-icons'>add</i>
				</Link>
			</div>
		</div>
	);
};

export default memo(Surveys);
