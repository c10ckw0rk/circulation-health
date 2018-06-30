import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';

import './Social.scss';

export default class Social extends React.Component {
	static defaultProps = {
		icons: []
	};

	static propTypes = {
		title: PropTypes.string
	};

	render() {
		const { title, icons } = this.props;
		console.log(icons);
		return (
			<Container className={'social'}>
				<h2>{title}</h2>
				<ul className={'list'}>
					{icons.length > 0 &&
						icons.map(({ link, icon }, i) => {
							return (
								<li key={i} className={'link'}>
									<a href={link}>{icon && <img src={icon.url} />}</a>
								</li>
							);
						})}
				</ul>
			</Container>
		);
	}
}
