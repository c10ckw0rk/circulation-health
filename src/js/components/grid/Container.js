import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Container extends React.Component {
	static defaultProps = {
		sizes: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		}
	};

	static propTypes = {
		sizes: PropTypes.object
	};

	render() {
		const { className, children, sizes, ...rest } = this.props;
		const colClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size]}`);

		return (
			<div className={cn('container-fluid', className)}>
				<div className={'row'}>
					<div className={cn(colClasses)} {...rest}>
						{children}
					</div>
				</div>
			</div>
		);
	}
}
