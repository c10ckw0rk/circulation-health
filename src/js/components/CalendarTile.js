import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'js/components/Link';
import './CalendarTile.scss';
import Date from 'js/components/Date';
import withNews from 'js/hoc/withNews';

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
		latest.length = 2;
		return (
			<div className={'calendar-tile'}>
				<h2>{title}</h2>
				<ul className={'calendar'}>
					{latest.map(({ title, date }) => {
						const parsedDate = date.split(',');
						return (
							<li key={(title + date).replace(/ /gi, '-')} className={'entry'}>
								<div>
									<Link to={'/'} className={'link'}>
										<Date day={parsedDate[2]} month={parsedDate[1]} />
										<span className={'title'}>{title}</span>
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
