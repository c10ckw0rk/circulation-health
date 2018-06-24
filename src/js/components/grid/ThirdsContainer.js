import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Container from 'js/components/grid/Container';

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
		const { children, sizes, colClass } = this.props;
		const colClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size]}`);

		return (
			<Container outerWrap col={false}>
				<div className={cn(colClasses, colClass)}>{children[0]}</div>
				<div className={cn(colClasses, colClass)}>{children[1]}</div>
				<div className={cn(colClasses, colClass)}>{children[2]}</div>
			</Container>
		);
	}
}
