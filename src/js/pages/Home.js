import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'js/components/Banner';
import CenterTile from 'js/components/CenterTile';
import PanelTile from 'js/components/PanelTile';
import ProfileTile from 'js/components/ProfileTile';
import CalendarTile from 'js/components/CalendarTile';
import CaseStudyTile from 'js/components/CaseStudyTile';
import Map from 'js/components/Map';
import ListTile from 'js/components/ListTile';
import HalfContainer from 'js/components/grid/HalfContainer';
import { withConsumer } from 'js/store/Store';
import './Home.scss';

class Home extends React.Component {
	static propTypes = {
		tagLine: PropTypes.string,
		boxLinks: PropTypes.array,
		profileContent: PropTypes.string,
		profileImage: PropTypes.object,
		profileTitle: PropTypes.string,
		informationBoxTitle: PropTypes.string,
		informationBoxLink: PropTypes.array
	};

	render() {
		const {
			tagLine,
			boxLinks,
			profileContent,
			profileImage,
			profileTitle,
			informationBoxTitle,
			informationBoxLink,
			caseStudies,
			caseStudiesTitle
		} = this.props;

		return (
			<>
				<Banner>
					<div className={'list-tile-wrapper'}>
						<ListTile className={'banner-links'} title={informationBoxTitle} items={informationBoxLink} />
					</div>
				</Banner>
				<main className={'home'}>
					<CenterTile content={tagLine} />
					<PanelTile links={boxLinks} />
					{profileImage && (
						<ProfileTile content={profileContent} profileImage={profileImage.url} title={profileTitle} />
					)}
					<HalfContainer>
						<CalendarTile />
						<CaseStudyTile caseStudies={caseStudies} title={caseStudiesTitle} />
					</HalfContainer>
					<Map />
				</main>
			</>
		);
	}
}

export default withConsumer(Home);
