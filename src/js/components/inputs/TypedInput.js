import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './TypedInput.scss';

export default class TypedInput extends React.Component {
	static defaultProps = {
		big: false,
		label: '',
		id: ''
	};

	static propTypes = {
		className: PropTypes.string,
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		big: PropTypes.bool
	};

	render() {
		const { label, className, id, big, ...rest } = this.props;
		return (
			<div className={cn('typed-input', className)}>
				<label htmlFor={id} className={'label'}>
					{label}
				</label>
				{!big && <input id={id} name={id} className={'input'} {...rest} />}
				{big && <textarea id={id} name={id} className={'input text-area'} {...rest} />}
			</div>
		);
	}
}
