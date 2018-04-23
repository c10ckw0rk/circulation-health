import React from 'react';
import * as PropTypes from 'prop-types';
import './Banner.scss';

export default class Banner extends React.Component {
	static defaultProps = {
		backgroundImage: '/wp-content/themes/circulation-health/img/banner.jpg',
		titleContent: 'Comprehensive diagnosis and treatment of all arterial and venous disorders'
	};

	static propTypes = {
		backgroundImage: PropTypes.string,
		titleContent: PropTypes.string
	};

	render() {
		const { backgroundImage, titleContent } = this.props;
		return (
			<div className={'banner'} style={{ backgroundImage: `url(${backgroundImage})` }}>
				<div className={'container-fluid'}>
					<div className={'row'}>
						<div className={'col-xs-12'}>
							<h2>
								<span className={'inner-content'}>{titleContent}</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
