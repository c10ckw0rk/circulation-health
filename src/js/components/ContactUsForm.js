import React from 'react';
import PropTypes from 'prop-types';
import './ContactUsForm.scss';
import TypedInput from 'js/components/inputs/TypedInput';
import SubmitButton from 'js/components/SubmitButton';

export default class ContactUsForm extends React.Component {
	static defaultProps = {};

	static propTypes = {};

	render() {
		const {} = this.props;
		return (
			<form className={'contact-us-form'}>
				<h2 className={'h3'}>Make an enquiry</h2>
				<TypedInput
					placeholder={'First name'}
					autoFocus
					id={'email'}
					label={'email-address'}
					type={'text'}
					className={'text-input'}
				/>
				<TypedInput placeholder={'Email'} id={'email'} label={'email-address'} type={'text'} className={'text-input'} />
				<TypedInput
					placeholder={'Last name'}
					id={'email'}
					label={'email-address'}
					type={'text'}
					className={'text-input'}
				/>
				<TypedInput placeholder={'Phone'} id={'email'} label={'email-address'} type={'text'} className={'text-input'} />
				<SubmitButton className={'contact-us-submit'} />
			</form>
		);
	}
}
