import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Container from 'js/components/grid/Container';
import SearchResult from 'js/components/SearchResult';
import TypedInput from 'js/components/inputs/TypedInput';
import Button from 'js/components/inputs/Button';

import './Search.scss';

const searchPath = `${location.origin}/wp-json/wp/v2/pages?search=`;

class Search extends React.Component {
	static propTypes = {
		title: PropTypes.object,
		searchPlaceholder: PropTypes.string,
		buttonText: PropTypes.string
	};

	static defaultProps = {
		title: {
			rendered: 'Search Results'
		},
		searchPlaceholder: 'Search',
		buttonText: 'Search'
	};

	locationListener = undefined;

	constructor(props, ...rest) {
		super(props, ...rest);

		const searchTerm = this.props.location.search.replace('?query=', '');

		this.state = {
			result: [],
			searchTerm,
			inputVal: searchTerm
		};
	}

	onSubmit = e => {
		e.preventDefault();
		const { location: { pathname }, history } = this.props;
		const { inputVal } = this.state;
		history.push({
			pathname,
			search: `?query=${inputVal}`
		});
	};

	onChange = e => {
		this.setState({ inputVal: e.target.value });
	};

	onLocationChange = () => {
		const searchTerm = location.search.replace('?query=', '');
		this.performSearch(searchTerm);
	};

	performSearch(searchTerm) {
		if (searchTerm) {
			axios.get(`${searchPath}${searchTerm}`).then(result => this.setState({ searchTerm, result: result.data }));
		}
	}

	componentDidMount() {
		const { searchTerm } = this.state;

		const { history } = this.props;
		this.locationListener = history.listen(this.onLocationChange);
		this.onLocationChange();
		this.performSearch(searchTerm);
	}

	componentWillUnmount() {
		this.locationListener();
	}

	render() {
		const { result, searchTerm, inputVal } = this.state;
		const { title, searchPlaceholder, buttonText } = this.props;

		return (
			<Container className={'search-page'} outerWrap>
				<h2 className={'h1'}>{title.rendered}</h2>
				<form onSubmit={this.onSubmit} className={'form'}>
					<TypedInput
						onChange={this.onChange}
						placeholder={searchPlaceholder}
						id={'email'}
						label={'email-address'}
						type={'search'}
						required
						value={inputVal}
						className={'text-input'}
					/>
					<Button type={'submit'} className={'button'}>
						{buttonText}
					</Button>
				</form>
				{result.map(page => <SearchResult key={page.id} page={page} searchTerm={searchTerm} />)}
				{result.length === 0 && <h3 className={'no-results'}>No results found</h3>}
			</Container>
		);
	}
}

export default withRouter(Search);
