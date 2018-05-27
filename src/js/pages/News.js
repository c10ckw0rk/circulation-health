import React from 'react';
import Banner from 'js/components/Banner';
import { NavLink } from 'react-router-dom';
import './News.scss';
import Date from 'js/components/Date';
import Container from 'js/components/grid/Container';
import withNews from 'js/hoc/withNews';

class News extends React.Component {
	render() {
		const { title, news } = this.props;
		return (
			<>
				<Banner overlap titleContent={title.rendered} />
				<Container className={'news'}>
					{news.map(({ title, date, link }, i) => {
						const parsedDate = date.split(',');
						return (
							<NavLink key={i} to={link} className={'news-row'}>
								<Date day={parsedDate[2]} month={parsedDate[1]} />
								<div className={'title'}>{title}</div>
							</NavLink>
						);
					})}
				</Container>
			</>
		);
	}
}

export default withNews(News);
