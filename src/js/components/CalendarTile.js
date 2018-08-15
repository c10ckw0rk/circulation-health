import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'js/components/Link';
import DateComponent from 'js/components/Date';
import withNews from 'js/hoc/withNews';

import './CalendarTile.scss';

class CalendarTile extends React.Component {
	static defaultProps = {
		title: 'Latest News',
		footerLink: 'See all upcoming events',
		news: [
			{
				title: 'Event One',
				link: '/',
				date: '2018,May,17'
			},
			{
				title: 'Event Two',
				link: '/',
				date: '2018,May,12'
			}
		]
	};

	static propTypes = {
		profileImage: PropTypes.string,
		content: PropTypes.string
	};

	render() {
		const { title, news, footerLink } = this.props;
		const latest = [...news];
		latest.sort((a, b) => new Date(b.date) - new Date(a.date));
		latest.length = 2;
		console.log(latest);
		return (
			<div className={'calendar-tile'}>
				<h2>{title}</h2>
				<ul className={'calendar'}>
					{latest.map(({ title, date, link, excerpt }) => {
						const parsedDate = date.split(',');
						return (
							<li key={(title + date).replace(/ /gi, '-')} className={'entry'}>
								<div>
									<Link to={link.replace(location.origin, '')} className={'link'}>
										<DateComponent day={parsedDate[2]} month={parsedDate[1]} />
										<div>
											<p className={'title'}>{title}</p>
											<p className={'excerpt'}>{excerpt.trim()}...</p>
										</div>
									</Link>
								</div>
							</li>
						);
					})}
				</ul>
				<p>
					<Link to={'/'}>{footerLink}</Link>
				</p>
			</div>
		);
	}
}

export default withNews(CalendarTile);
