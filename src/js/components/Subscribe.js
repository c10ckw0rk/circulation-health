import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from 'js/components/grid/Container';
import TypedInput from 'js/components/inputs/TypedInput';
import Button from 'js/components/inputs/Button';
import './Subscribe.scss';

export default class Subscribe extends React.Component {
	static defaultProps = {
		title: 'Subscribe to our newsletter',
		buttonText: 'Submit'
	};

	static propTypes = {
		title: PropTypes.string,
		buttonText: PropTypes.string
	};

	onSubmit = e => {
		e.preventDefault();
	};

	render() {
		const { title, buttonText } = this.props;
		return (
			<Container className={'subscribe'}>
				<h2>{title}</h2>
				<form onSubmit={this.onSubmit} className={'form'}>
					<TypedInput
						placeholder={'Your email'}
						id={'email'}
						label={'email-address'}
						type={'text'}
						className={'text-input'}
					/>
					<Button type={'submit'} className={'button'}>
						{buttonText}
					</Button>
				</form>
			</Container>
		);
	}
}
