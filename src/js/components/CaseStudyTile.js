import React from 'react';
import PropTypes from 'prop-types';
import { withConsumer } from 'js/store/Store';
import stripHtmlTags from 'js/util/stripHtmlTags';
import Link from 'js/components/Link';

import './CaseStudyTile.scss';

class CaseStudyTile extends React.Component {
	static defaultProps = {
		title: 'Case Studies',
		caseStudies: []
	};

	static propTypes = {
		title: PropTypes.string,
		caseStudies: PropTypes.array
	};

	state = {
		caseStudyPages: []
	};

	componentDidMount() {
		const { pages, caseStudies } = this.props;

		let caseStudyPages = [];

		caseStudies.forEach(caseStudy => {
			caseStudy = pages.filter(page => page.link === caseStudy)[0];
			if (caseStudy) {
				caseStudyPages.push(caseStudy);
			}
		});

		this.setState({ caseStudyPages });
	}

	render() {
		const { title } = this.props;
		const { caseStudyPages } = this.state;
		const max = [...caseStudyPages];
		max.length = 2;

		return (
			<div className={'case-study-tile'}>
				<h2 className={'title'}>{title}</h2>
				<div className={'case-studies'}>
					{caseStudyPages.length > 0 &&
						max.map(({ content, title, acf, link }, i) => (
							<article className={'case-study'} key={i}>
								<Link to={link.replace(location.origin, '')}>
									{acf.pageImage && <img className={'img'} src={acf.pageImage.url} />}
									<h3>{title.rendered}</h3>
									<p
										dangerouslySetInnerHTML={{
											__html: stripHtmlTags(content.rendered.substring(0, 100).trim() + '...')
										}}
									/>
								</Link>
							</article>
						))}
				</div>
			</div>
		);
	}
}

export default withConsumer(CaseStudyTile);
