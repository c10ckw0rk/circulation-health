import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CalendarTile.scss';
import Container from 'js/components/grid/Container';

export default class CalendarTile extends React.Component {
	static defaultProps = {
		title: 'Latest News',
		footerLink: 'See all upcoming events',
		eventList: [
			{
				title: 'Event One',
				date: {
					day: 5,
					month: 'APR'
				}
			},
			{
				title: 'Event Two',
				date: {
					day: 6,
					month: 'APR'
				}
			}
		]
	};

	static propTypes = {
		profileImage: PropTypes.string,
		content: PropTypes.string
	};

	render() {
		const { title, eventList, footerLink } = this.props;

		return (
			<div className={'calendar-tile'}>
				<Container>
					<h2>{title}</h2>
				</Container>
				<ul className={'calendar'}>
					{eventList.map(({ title, date: { day, month } }) => (
						<li key={(title + day).replace(/ /gi, '-')} className={'entry'}>
							<Container>
								<div>
									<Link to={'/'} className={'link'}>
										<span className={'date'}>
											<span className={'day'}>{day}</span>
											<span className={'month'}>{month}</span>
										</span>
										<span className={'title'}>{title}</span>
									</Link>
								</div>
							</Container>
						</li>
					))}
				</ul>
				<Container>
					<p>
						<Link to={'/'}>{footerLink}</Link>
					</p>
				</Container>
			</div>
		);
	}
}
