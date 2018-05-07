import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class HalfContainer extends React.Component {
	static defaultProps = {
		sizes: {
			xs: 12,
			sm: 6,
			md: 6,
			lg: 6,
			xl: 6
		}
	};

	static propTypes = {
		sizes: PropTypes.object,
		className: PropTypes.string
	};

	render() {
		const { className, children, sizes } = this.props;
		const colClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size]}`);

		return (
			<div className={cn('container-fluid', 'container-component', className)}>
				<div className={'row'}>
					<div className={cn(colClasses)}>{children[0]}</div>
					<div className={cn(colClasses)}>{children[1]}</div>
				</div>
			</div>
		);
	}
}
