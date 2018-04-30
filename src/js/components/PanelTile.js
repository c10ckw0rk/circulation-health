import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PanelTile.scss';
import { themedir } from 'js/config';
import Container from 'js/components/grid/Container';

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
			<Container className={'panel-tile'} col={false}>
				<ul>
					{links.map(({ title, image, link }) => (
						<li className={'col-xs-12'} key={link + title}>
							<Link to={link}>
								<span className={'image-wrap'}>
									<span className={'image'}>
										<img src={image} />
									</span>
								</span>
								<span className={'title'}>{title}</span>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		);
	}
}
