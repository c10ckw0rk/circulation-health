import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Container from 'js/components/grid/Container';

import './ListTile.scss';

export default class ListTile extends React.Component {
	static defaultProps = {
		title: 'Information for patients',
		items: [
			{
				link: {
					title: '',
					url: ''
				}
			},
			{
				link: {
					title: '',
					url: ''
				}
			},
			{
				link: {
					title: '',
					url: ''
				}
			},
			{
				link: {
					title: '',
					url: ''
				}
			}
		]
	};

	static propTypes = {
		title: PropTypes.string,
		items: PropTypes.array
	};

	render() {
		const { items, title, className } = this.props;
		return (
			<div className={cn('list-tile', className)}>
				<Container>
					<h2>{title}</h2>
					<ul>
						{items.map((item, i) => (
							<li key={i}>
								<a href={item.link.url} target={item.link.target}>
									{item.link.title}
								</a>
							</li>
						))}
					</ul>
				</Container>
			</div>
		);
	}
}
