// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

let SurveyNew = () => {
	const [showFormReview, setShowFormReview] = useState(false);
	const renderContent = () => {
		if (showFormReview) {
			return <SurveyFormReview onCancel={setShowFormReview.bind(this, false)} />;
		}

		return <SurveyForm onSurveySubmit={setShowFormReview.bind(this, true)} />;
	};

	return <div style={{ paddingBlock: '2rem' }}>{renderContent()}</div>;
};

SurveyNew = reduxForm({
	// a unique name for the form
	form: 'surveyForm',
})(SurveyNew);

export default SurveyNew;
