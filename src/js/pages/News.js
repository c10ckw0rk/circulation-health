import React from 'react';
import Banner from 'js/components/Banner';
import { NavLink } from 'react-router-dom';
import './News.scss';
import Date from 'js/components/Date';
import Container from 'js/components/grid/Container';
import withNews from 'js/hoc/withNews';

class News extends React.Component {
	render() {
		const { title, news, mobileBanner = {}, desktopBanner = {}, noNewsContent } = this.props;
		const hasNews = news.length === 0;

		return (
			<>
				<Banner
					xs={mobileBanner.url}
					sm={mobileBanner.url}
					md={desktopBanner.url}
					lg={desktopBanner.url}
					xl={desktopBanner.url}
					overlap={!hasNews}
					titleContent={title.rendered}
				/>
				<Container className={'news'}>
					{news.map(({ title, date, link }, i) => {
						const parsedDate = date.split(',');
						return (
							<NavLink key={i} to={link.replace(location.origin, '')} className={'news-row'}>
								<Date day={parsedDate[2]} month={parsedDate[1]} />
								<div className={'title'}>{title}</div>
							</NavLink>
						);
					})}
					{hasNews && (
						<div
							style={{ textAlign: 'center', width: '100%', padding: '32px' }}
							dangerouslySetInnerHTML={{ __html: noNewsContent }}
						/>
					)}
				</Container>
			</>
		);
	}
}

export default withNews(News);
