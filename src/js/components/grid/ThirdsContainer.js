import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class ThirdsContainer extends React.Component {
	static defaultProps = {
		sizes: {
			xs: 12,
			sm: 4,
			md: 4,
			lg: 4,
			xl: 4
		}
	};

	static propTypes = {
		sizes: PropTypes.object,
		className: PropTypes.string,
		colClass: PropTypes.string
	};

	render() {
		const { className, children, sizes, colClass } = this.props;
		const colClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size]}`);

		return (
			<div className={cn('container-fluid', 'container-component', className)}>
				<div className={'row'}>
					<div className={cn(colClasses, colClass)}>{children[0]}</div>
					<div className={cn(colClasses, colClass)}>{children[1]}</div>
					<div className={cn(colClasses, colClass)}>{children[2]}</div>
				</div>
			</div>
		);
	}
}
