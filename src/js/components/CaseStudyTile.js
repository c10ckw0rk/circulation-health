import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';
import { withConsumer } from 'js/store/Store';
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

		return (
			<div className={'case-study-tile'}>
				<Container>
					<h2 className={'title'}>{title}</h2>
				</Container>
				<div className={'case-studies'}>
					{caseStudyPages.length > 0 &&
						caseStudyPages.map(({ img, excerpt, title }, i) => (
							<article className={'case-study'} key={i}>
								<img src={img} />
								<Container>
									<h3>{title.rendered}</h3>
								</Container>
								<Container dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
							</article>
						))}
				</div>
			</div>
		);
	}
}

export default withConsumer(CaseStudyTile);
