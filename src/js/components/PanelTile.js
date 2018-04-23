import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PanelTile.scss';

export default class PanelTile extends React.Component {
	static defaultProps = {
		links: [
			{
				title: 'Venous disease',
				image: '/wp-content/themes/circulation-health/img/clipboard.svg',
				link: '#'
			},
			{
				title: 'Arterial disease',
				image: '/wp-content/themes/circulation-health/img/heart.svg',
				link: '#'
			},
			{
				title: 'Vascular access',
				image: '/wp-content/themes/circulation-health/img/monitor.svg',
				link: '#'
			},
			{
				title: 'Vascular Arterial access',
				image: '/wp-content/themes/circulation-health/img/stethoscope.svg',
				link: '#'
			}
		]
	};

	static propTypes = {
		links: PropTypes.arrayOf(PropTypes.object)
	};

	render() {
		const { links } = this.props;
		return (
			<div className={'container-fluid panel-tile'}>
				<div className={'row'}>
					<ul className={'col-xs-12'}>
						{links.map(({ title, image, link }) => (
							<li key={link + title}>
								<Link to={link}>
									<span>
										<img src={image} />
									</span>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
