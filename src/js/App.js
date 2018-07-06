import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import Home from 'js/pages/Home';
import Page from 'js/pages/Page';
import Faq from 'js/pages/Faq';
import News from 'js/pages/News';
import ContactUs from 'js/pages/ContactUs';
import NewsPost from 'js/pages/NewsPost';
import Base from 'js/templates/Base';
import Search from 'js/pages/Search';
import Container from 'js/components/grid/Container';
import Banner from 'js/components/Banner';
import Link from 'js/components/Link';
import cn from 'classnames';

const templates = {
	'home.php': Home,
	'faq.php': Faq,
	'news.php': News,
	'contact-us.php': ContactUs,
	'news-post.php': NewsPost,
	'case-study.php': Page
};

class App extends React.Component {
	static propTypes = {
		getPages: PropTypes.func,
		getPrimaryNavigation: PropTypes.func,
		getGlobalOptions: PropTypes.func,
		getInit: PropTypes.func
	};

	static defaultProps = {
		pages: [],
		posts: [],
		primaryNavigation: [],
		globalOptions: []
	};

	state = {
		mounted: false,
		navOpen: false
	};

	static getDerivedStateFromProps(nextProps) {
		if (nextProps.pages.length) {
			return { mounted: true };
		}
		return {};
	}

	pageRoutes = pages => {
		return pages.map((page, i) => {
			let { acf, template, link, ...rest } = page;
			return (
				<Route
					key={i}
					component={() => {
						const Template = templates[template] || Page;
						return <Template {...rest} {...acf} />;
					}}
					exact
					path={`${link.replace(location.origin, '')}`}
				/>
			);
		});
	};

	mobileNavOpen = val => this.setState({ navOpen: val });

	componentDidMount() {
		this.props.getInit();
	}

	render() {
		const { globalOptions, primaryNavigation } = this.props;
		const { mounted, navOpen } = this.state;

		return (
			<Router>
				<div
					className={cn('root', { 'nav-open': navOpen })}
					style={{
						opacity: mounted ? '1' : '0'
					}}>
					<Base {...globalOptions} primaryNavigation={primaryNavigation} mobileNavOpen={this.mobileNavOpen}>
						<Switch>
							{this.pageRoutes(this.props.pages)}
							<Route
								component={() => {
									return <Search {...globalOptions} />;
								}}
								exact
								path={'/search'}
							/>
							<Route
								path="*"
								component={() => (
									<>
										<Banner titleContent={'<h2>Page Not Found...</h2>'} />
										<Container>
											<h3>
												<br />
												Sorry this page is not available. Click <Link to={'/'}>here</Link> to go back to the homepage.
											</h3>
										</Container>
									</>
								)}
							/>
						</Switch>
					</Base>
				</div>
			</Router>
		);
	}
}

export default withConsumer(App);
