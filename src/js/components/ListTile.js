import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './ListTile.scss';
import Container from 'js/components/grid/Container';

export default class ListTile extends React.Component {
	static defaultProps = {
		title: 'Information for patients',
		items: [
			{
				title: 'Download referral',
				link: '#'
			},
			{
				title: 'Your first appointment',
				link: '#'
			},
			{
				title: 'Post operative care',
				link: '#'
			},
			{
				title: 'FAQs',
				link: '#'
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
								<a href={item.link}>{item.title}</a>
							</li>
						))}
					</ul>
				</Container>
			</div>
		);
	}
}
