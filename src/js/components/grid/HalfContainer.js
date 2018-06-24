import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';

import './HalfContainer.scss';

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
		const { children } = this.props;

		return (
			<Container className={'half-container'} outerWrap>
				<div className={'half-container-row'} style={{ display: 'flex' }}>
					<div className={'section'}>{children[0]}</div>
					<div className={'section'}>{children[1]}</div>
				</div>
			</Container>
		);
	}
}
