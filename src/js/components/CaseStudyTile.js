import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';
import './CaseStudyTile.scss';

export default class CaseStudyTile extends React.Component {
	static defaultProps = {
		title: 'Case Studies',
		caseStudies: [
			{
				img: '',
				content: `
                <h3>Case study title goes here</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales, quam vel porta volutpat, elit.
                    Phasellus sodales, quam vel porta volutpat, elit.
                </p>
                <p>
                    <a href="#">More about this case study</a>
                </p>
            `
			},
			{
				img: '',
				content: `
                <h3>Case study title goes here</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales, quam vel porta volutpat, elit.
                    Phasellus sodales, quam vel porta volutpat, elit. 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales, quam vel porta volutpat, elit.
                    Phasellus sodales, quam vel porta volutpat, elit. 
                </p>
                <p>
                    <a href="#">More about this case study</a>
                </p>
            `
			}
		]
	};

	static propTypes = {
		title: PropTypes.string,
		caseStudies: PropTypes.array
	};

	render() {
		const { caseStudies, title } = this.props;
		return (
			<div className={'case-study-tile'}>
				<Container>
					<h2 className={'title'}>{title}</h2>
				</Container>
				<div className={'case-studies'}>
					{caseStudies.map(({ img, content }, i) => (
						<article className={'case-study'} key={i}>
							<img src={img} />
							<Container dangerouslySetInnerHTML={{ __html: content }} />
						</article>
					))}
				</div>
			</div>
		);
	}
}
