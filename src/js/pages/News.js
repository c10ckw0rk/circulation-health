import React from 'react';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import Footer from 'js/components/Footer';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './News.scss';
import Date from 'js/components/Date';
import Container from 'js/components/grid/Container';
import { withConsumer } from 'js/store/Store';

class Page extends React.Component {
	static defaultProps = {
		news: [
			{
				title: 'Event One',
				link: '/',
				date: '2018,May,17'
			},
			{
				title: 'Event Two',
				link: '/',
				date: '2018,May,17'
			},
			{
				title: 'Event One',
				link: '/',
				date: '2018,May,17'
			},
			{
				title: 'Event Two',
				link: '/',
				date: '2018,May,17'
			}
		]
	};

	static propTypes = {
		news: PropTypes.array
	};

	state = {
		news: []
	};

	componentDidMount() {
		const news = [];
		this.props.pages.forEach(page => {
			if (page.template === 'news-item.php') {
				console.log(page);
				news.push({
					title: page.title.rendered,
					link: page.link,
					date: page.acf.date
				});
			}
		});
		this.setState({ news });
	}

	render() {
		const { title } = this.props;
		const { news } = this.state;
		return (
			<>
				<Header />
				<Banner overlap titleContent={title.rendered} />
				<Container className={'news'}>
					{news.map(({ title, date, link }, i) => {
						const parsedDate = date.split(',');
						console.log(title);
						return (
							<NavLink key={i} to={link} className={'news-row'}>
								<Date day={parsedDate[2]} month={parsedDate[1]} />
								<div className={'title'}>{title}</div>
							</NavLink>
						);
					})}
				</Container>

				<Footer />
			</>
		);
	}
}

export default withConsumer()(Page);
