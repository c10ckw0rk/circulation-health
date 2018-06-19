import React from 'react';
import PropTypes from 'prop-types';
import './ContactUsForm.scss';
import TypedInput from 'js/components/inputs/TypedInput';
import SubmitButton from 'js/components/SubmitButton';
import withContactUs from 'js/hoc/withContactUs';

class EnquiryForm extends React.Component {
	static defaultProps = {
		formTitle: 'Make an enquiry',
		firstNamePlaceholder: 'First Name',
		lastNamePlaceholder: 'Last Name',
		emailPlaceholder: 'Email',
		phonePlaceholder: 'Phone',
		messagePlaceholder: 'Message',
		buttonText: 'Submit Enquiry'
	};

	static propTypes = {
		formTitle: PropTypes.string,
		firstNamePlaceholder: PropTypes.string,
		lastNamePlaceholder: PropTypes.string,
		emailPlaceholder: PropTypes.string,
		phonePlaceholder: PropTypes.string,
		messagePlaceholder: PropTypes.string,
		buttonText: PropTypes.string
	};

	render() {
		const {
			formTitle,
			firstNamePlaceholder,
			lastNamePlaceholder,
			emailPlaceholder,
			phonePlaceholder,
			messagePlaceholder,
			buttonText,
			onChange,
			onSubmit,
			submitted,
			responseMessage
		} = this.props;

		return (
			<form className={'contact-us-form'} onSubmit={onSubmit}>
				<h2 className={'h3'}>{formTitle}</h2>
				{!submitted && (
					<>
						<TypedInput
							placeholder={firstNamePlaceholder}
							autoComplete="given-name"
							onChange={onChange}
							id={'first-name'}
							label={firstNamePlaceholder}
							type={'text'}
							className={'text-input'}
							disabled={submitted}
							required
						/>
						<TypedInput
							placeholder={lastNamePlaceholder}
							autoComplete="family-name"
							onChange={onChange}
							id={'last-name'}
							label={lastNamePlaceholder}
							type={'text'}
							className={'text-input'}
							disabled={submitted}
							required
						/>
						<TypedInput
							placeholder={emailPlaceholder}
							autoComplete="email"
							onChange={onChange}
							id={'email'}
							label={emailPlaceholder}
							type={'email'}
							className={'text-input'}
							disabled={submitted}
							required
						/>
						<TypedInput
							placeholder={phonePlaceholder}
							onChange={onChange}
							autoComplete="tel"
							id={'phone'}
							label={phonePlaceholder}
							type={'number'}
							className={'text-input'}
							disabled={submitted}
							required
						/>
						<TypedInput
							placeholder={messagePlaceholder}
							onChange={onChange}
							id={'message'}
							label={messagePlaceholder}
							big
							className={'text-area'}
							disabled={submitted}
							required
						/>
						<SubmitButton className={'contact-us-submit'}>{buttonText}</SubmitButton>
					</>
				)}
				{submitted && <p className={'h3'}>{responseMessage}</p>}
			</form>
		);
	}
}

export default withContactUs(EnquiryForm);
