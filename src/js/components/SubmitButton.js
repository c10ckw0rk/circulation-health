import React from 'react';
import './SubmitButton.scss';
import cn from 'classnames';

export default class SubmitButton extends React.Component {
	render() {
		const { className, ...rest } = this.props;
		return (
			<button type={'submit'} className={cn('submit-button', className)} {...rest}>
				{this.props.children || 'Submit Enquiry'}
			</button>
		);
	}
}
