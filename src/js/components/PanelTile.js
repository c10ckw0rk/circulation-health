import React from 'react';
import PropTypes from 'prop-types';
import Link from 'js/components/Link';

import './PanelTile.scss';
import { themedir } from 'js/config';
import Container from 'js/components/grid/Container';

export default class PanelTile extends React.Component {
	static defaultProps = {
		links: [
			{
				title: 'Venous disease',
				icon: {
					url: themedir + '/img/clipboard.svg'
				},
				link: '#'
			},
			{
				title: 'Arterial disease',
				icon: {
					url: themedir + '/img/heart.svg'
				},
				link: '#'
			},
			{
				title: 'Vascular access',
				icon: {
					url: themedir + '/img/heart.svg'
				},
				link: '#'
			},
			{
				title: 'Vascular Arterial access',
				icon: {
					url: themedir + '/img/heart.svg'
				},
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
					{links.map(({ title, icon, link }) => (
						<li className={'col-xs-12'} key={link + title}>
							<Link to={link}>
								<span className={'image-wrap'}>
									<span className={'image'}>
										<img src={icon.url} />
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
