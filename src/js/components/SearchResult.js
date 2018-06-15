import React from 'react';
import PropTypes from 'prop-types';
import Link from 'js/components/Link';
import Container from 'js/components/grid/Container';
import stripHtmlTags from 'js/util/stripHtmlTags';

import './SearchResult.scss';

export default class SearchResult extends React.Component {
	static propTypes = {
		page: PropTypes.object,
		searchTerm: PropTypes.string
	};

	state = {
		content: undefined,
		regex: undefined
	};

	static getDerivedStateFromProps({ page, searchTerm }, nextState) {
		if (!page || !searchTerm) {
			return {
				page: undefined
			};
		}

		let content = stripHtmlTags(page.content.rendered);
		const contentLength = content.length;
		const snippets = getIndicesOf(content, searchTerm).map(index => {
			let startIndex = index - 25;
			let endIndex = index + 25;

			if (startIndex < 0) startIndex = 0;
			if (endIndex > contentLength) endIndex = contentLength;

			return content.substr(startIndex, endIndex);
		});

		return {
			snippets,
			regex: new RegExp(`(${searchTerm})`, 'ig')
		};
	}

	render() {
		const { page } = this.props;
		if (!page) return false;
		const { title: resultTitle, link } = page;
		const { snippets, regex } = this.state;

		return (
			<Container className={'search-result'}>
				<Link to={link.replace(location.origin, '')} className={'search-card'}>
					<h3 className={'h5'}>{resultTitle.rendered}</h3>
					{snippets.map((snippet, i) => {
						snippet = snippet.trim().replace(regex, `<b>$1</b>`);
						return (
							<p key={i}>
								...<span dangerouslySetInnerHTML={{ __html: snippet }} />...
							</p>
						);
					})}
				</Link>
			</Container>
		);
	}
}

function getIndicesOf(str, searchStr) {
	const searchStrLen = searchStr.length;
	const indices = [];
	let startIndex = 0;
	let index;

	str = str.toLowerCase();
	searchStr = searchStr.toLowerCase();

	while ((index = str.indexOf(searchStr, startIndex)) > -1) {
		indices.push(index);
		startIndex = index + searchStrLen;
	}
	return indices;
}
