import React from 'react';
import PropTypes from 'prop-types';
import MagnifyingGlass from 'js/components/icon/MagnifyingGlass';
import TypedInput from 'js/components/inputs/TypedInput';
import { withRouter } from 'react-router-dom';

import './SearchInput.scss';

class SearchInput extends React.Component {
	static defaultProps = {
		searchPlaceholder: 'Search'
	};

	static propTypes = {
		searchPlaceholder: PropTypes.string
	};

	state = {
		value: ''
	};

	onSubmit = e => {
		const { history } = this.props;
		e.preventDefault();
		history.push({
			pathname: '/search/',
			search: `?query=${this.state.value}`
		});
	};

	onChange = e => {
		this.setState({ value: e.target.value });
	};

	render() {
		const { searchPlaceholder } = this.props;
		return (
			<form className={'search'} onSubmit={this.onSubmit}>
				<button type={'submit'} className={'button'}>
					<MagnifyingGlass className={'icon'} />
				</button>
				<TypedInput
					id={'header-search'}
					type={'text'}
					label={'Search'}
					placeholder={searchPlaceholder}
					onChange={this.onChange}
				/>
			</form>
		);
	}
}

export default withRouter(SearchInput);
