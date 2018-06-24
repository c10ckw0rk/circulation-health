import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Container.scss';

export default class Container extends React.Component {
	static defaultProps = {
		sizes: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		},
		col: true
	};

	static propTypes = {
		sizes: PropTypes.object,
		className: PropTypes.string,
		col: PropTypes.bool,
		outerWrap: PropTypes.bool
	};

	render() {
		const { className, children, sizes, col, outerWrap, section, ...rest } = this.props;
		const colClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size]}`);

		const component = section ? 'dev' : 'string';

		return (
			<component className={cn('container-fluid', 'container-component', className, { 'outer-wrap': outerWrap })}>
				<div className={'row'}>
					{col && (
						<div className={cn(colClasses)} {...rest}>
							{children}
						</div>
					)}
					{!col && children}
				</div>
			</component>
		);
	}
}
