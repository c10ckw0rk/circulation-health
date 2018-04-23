import React from 'react';
import PropTypes from 'prop-types';
import './TypedInput.scss';
import cn from 'classnames';

export default class TypedInput extends React.Component {
	static defaultProps = {
		className: PropTypes.string,
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired
	};

	render() {
		const { label, className, id, ...rest } = this.props;
		return (
			<div className={cn('typed-input', className)}>
				<label htmlFor={id} className={'label'}>
					{label}
				</label>
				<input id={id} name={id} className={'input'} {...rest} />
			</div>
		);
	}
}
