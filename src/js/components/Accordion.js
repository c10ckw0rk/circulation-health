import React from 'react';
import Container from 'js/components/grid/Container';
import PropTypes from 'prop-types';
import './Accordion.scss';
import cn from 'classnames';

export default class Accordion extends React.Component {
	static defaultProps = {
		title: 'Frequently Asked Question',
		open: false,
		content: `<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tincidunt dui, eu venenatis urna placerat 
            sed. Etiam iaculis nisl vel sapien consectetur lobortis. Quisque eget libero erat. Cras eu nibh mollis augue finibus
             efficitur. Aliquam efficitur non leo eu mattis. Pellentesque malesuada turpis hendrerit turpis porta, id congue ex 
             finibus.
            </p>
            <p>
            Cras ut bibendum augue, sit amet scelerisque diam. Aliquam eget arcu orci. Morbi ut urna posuere, gravida nulla eget
            , faucibus justo. Duis vitae viverra nulla. Suspendisse porta massa velit, ac ornare ex suscipit in. Donec lacinia 
            nisl et maximus mattis. Praesent dapibus leo diam, vel faucibus nunc maximus et. Duis placerat
            </p>`
	};

	static propTypes = {
		title: PropTypes.string,
		content: PropTypes.string,
		open: PropTypes.bool
	};

	state = {
		open: false
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		const newState = {};

		if (nextProps.open !== prevState.open) newState.open = nextProps.open;

		if (!Object.keys(newState).length) return null;

		return newState;
	}

	onClick = () => this.setState(prevState => ({ open: !prevState.open }));

	render() {
		const { content, title } = this.props;
		const { open } = this.state;
		return (
			<div className={cn('accordion', { open })}>
				<Container>
					<button className={'title'} onClick={this.onClick}>
						{title}
					</button>
					<div className={'content'} dangerouslySetInnerHTML={{ __html: content }} />
				</Container>
			</div>
		);
	}
}
