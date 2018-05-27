import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';
import './Social.scss';
import { themedir } from 'js/config';

export default class Social extends React.Component {
	static defaultProps = {
		title: 'Follow Us',
		icons: [
			{
				link: '#',
				image: themedir + '/img/facebook.png'
			},
			{
				link: '#',
				image: themedir + '/img/instagram.png'
			},
			{
				link: '#',
				image: themedir + '/img/linked-in.png'
			}
		]
	};

	static propTypes = {
		title: PropTypes.string
	};

	render() {
		const { title, icons } = this.props;
		return (
			<Container className={'social'}>
				<h2>{title}</h2>
				<ul className={'list'}>
					{icons.map(({ link, icon }, i) => {
						return (
							<li key={i} className={'link'}>
								<a href={link}>
									<img src={icon.url} />
								</a>
							</li>
						);
					})}
				</ul>
			</Container>
		);
	}
}
