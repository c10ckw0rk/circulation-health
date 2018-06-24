import React from 'react';
import cn from 'classnames';

import './SubmitButton.scss';

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
