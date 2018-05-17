import React from 'react';
import PropTypes from 'prop-types';
import './ContactUsForm.scss';
import TypedInput from 'js/components/inputs/TypedInput';
import SubmitButton from 'js/components/SubmitButton';

export default class ContactUsForm extends React.Component {
	static defaultProps = {
		formTitle: 'Make an enquiry',
		firstNamePlaceholder: 'First Name',
		lastNamePlaceholder: 'Last Name',
		emailPlaceholder: 'Email',
		phonePlaceholder: 'Phone',
		buttonText: 'Submit Enquiry'
	};

	static propTypes = {
		formTitle: PropTypes.string
	};

	render() {
		const {
			formTitle,
			firstNamePlaceholder,
			lastNamePlaceholder,
			emailPlaceholder,
			phonePlaceholder,
			buttonText
		} = this.props;
		return (
			<form className={'contact-us-form'}>
				<h2 className={'h3'}>{formTitle}</h2>
				<TypedInput
					placeholder={firstNamePlaceholder}
					autoFocus
					id={'email'}
					label={'email-address'}
					type={'text'}
					className={'text-input'}
				/>
				<TypedInput
					placeholder={lastNamePlaceholder}
					id={'last-name'}
					label={'last-name-address'}
					type={'text'}
					className={'text-input'}
				/>
				<TypedInput
					placeholder={emailPlaceholder}
					id={'email'}
					label={'email-address'}
					type={'text'}
					className={'text-input'}
				/>
				<TypedInput
					placeholder={phonePlaceholder}
					id={'phone'}
					label={'phone-address'}
					type={'text'}
					className={'text-input'}
				/>
				<SubmitButton className={'contact-us-submit'}>{buttonText}</SubmitButton>
			</form>
		);
	}
}
