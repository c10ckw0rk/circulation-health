import React from 'react';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import Footer from 'js/components/Footer';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './News.scss';
import Date from 'js/components/Date';
import Container from 'js/components/grid/Container';

export default class Page extends React.Component {
	static defaultProps = {
		news: [
			{
				title: 'Event One',
				link: '/',
				date: {
					day: '05',
					month: 'APR'
				}
			},
			{
				title: 'Event Two',
				link: '/',
				date: {
					day: '06',
					month: 'APR'
				}
			},
			{
				title: 'Event One',
				link: '/',
				date: {
					day: '05',
					month: 'APR'
				}
			},
			{
				title: 'Event Two',
				link: '/',
				date: {
					day: '06',
					month: 'APR'
				}
			}
		]
	};

	static propTypes = {
		news: PropTypes.array
	};

	state = {
		page: {
			title: {
				rendered: ''
			}
		}
	};

	render() {
		const { title, news } = this.props;

		return (
			<>
				<Header />
				<Banner overlap titleContent={title.rendered} />
				<Container className={'news'}>
					{news.map(({ title, date: { day, month }, link }, i) => (
						<NavLink key={i} to={link} className={'news-row'}>
							<Date day={day} month={month} />
							<div className={'title'}>{title}</div>
						</NavLink>
					))}
				</Container>

				<Footer />
			</>
		);
	}
}
