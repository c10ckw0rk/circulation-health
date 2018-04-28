import React from 'react';
import * as PropTypes from 'prop-types';
import './Banner.scss';
import { themedir } from 'js/config';

export default class Banner extends React.Component {
	static defaultProps = {
		backgroundImage: themedir + '/img/banner.jpg',
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
