import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PanelTile.scss';
import { themedir } from 'js/config';

export default class PanelTile extends React.Component {
	static defaultProps = {
		links: [
			{
				title: 'Venous disease',
				image: themedir + '/img/clipboard.svg',
				link: '#'
			},
			{
				title: 'Arterial disease',
				image: themedir + '/img/heart.svg',
				link: '#'
			},
			{
				title: 'Vascular access',
				image: themedir + '/img/monitor.svg',
				link: '#'
			},
			{
				title: 'Vascular Arterial access',
				image: themedir + '/img/stethoscope.svg',
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
