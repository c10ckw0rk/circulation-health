import React from 'react';
import PropTypes from 'prop-types';

import './ListTile.scss';

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
		const { items, title } = this.props;
		return (
			<div className={'container-fluid information-tile'}>
				<div className={'row'}>
					<div className={'col-xs-12'}>
						<h2>{title}</h2>
						<ul>
							{items.map((item, i) => (
								<li key={i}>
									<a href={item.link}>{item.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
