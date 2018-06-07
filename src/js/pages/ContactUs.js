import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';
import Map from 'js/components/Map';
import TypedInput from 'js/components/inputs/TypedInput';
import SubmitButton from 'js/components/SubmitButton';
import withContactUs from 'js/hoc/withContactUs';

import './ContactUs.scss';

class ContactUs extends React.Component {
	static defaultProps = {
		title: {
			rendered: 'Contact us'
		},
		buttonLabel: 'Submit enquiry',
		types: [
			{
				type: 'tel',
				label: 'Phone',
				detail: '(02) 42 268 930'
			},
			{
				type: 'tel',
				label: 'Fax',
				detail: '(02) 42 268 930'
			},
			{
				type: 'mailto',
				label: 'Email',
				detail: 'info@circulationhealth.com.au'
			}
		],
		firstNamePlaceholder: 'First Name',
		lastNamePlaceholder: 'Last Name',
		emailPlaceholder: 'Email',
		phonePlaceholder: 'Phone',
		messagePlaceholder: 'Message',
		introduction: `<p>
                    We want to hear from you. Please send us an enquiry with the following form and we will get back to
                    you as soon as we can. Alternatively, you can contact us
                </p>`
	};

	static propTypes = {
		title: PropTypes.object,
		buttonLabel: PropTypes.string,
		types: PropTypes.array,
		firstNamePlaceholder: PropTypes.string,
		lastNamePlaceholder: PropTypes.string,
		emailPlaceholder: PropTypes.string,
		phonePlaceholder: PropTypes.string,
		messagePlaceholder: PropTypes.string,
		content: PropTypes.object
	};

	render() {
		const {
			title,
			types,
			buttonLabel,
			firstNamePlaceholder,
			lastNamePlaceholder,
			emailPlaceholder,
			phonePlaceholder,
			messagePlaceholder,
			onChange,
			onSubmit,
			introduction,
			submitted,
			responseMessage
		} = this.props;

		return (
			<>
				<Map className={'contact-us-map'} />
				<main className={'contact-us-page-wrapper'}>
					<Container col={false} className={'contact-us-page'}>
						<div className={'contact-us-inner-wrapper'}>
							<h2 className={'col-xs-12 title'}>{title.rendered}</h2>
							<div className={'col-xs-12 col-sm-12 col-md-4'}>
								<div dangerouslySetInnerHTML={{ __html: introduction }} />
								<ul className={'list'}>
									{types.map(({ type, label, detail }, i) => {
										return (
											<li key={i} className={'item'}>
												{label}:
												<a className={'link'} href={`${type}:${detail}`}>
													{detail}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
							<form className={'col-xs-12 col-sm-12 col-md-8 form'} onSubmit={onSubmit}>
								<Container col={false}>
									<div className={'col-xs-12 col-sm-12 col-md-6'}>
										<TypedInput
											placeholder={firstNamePlaceholder}
											autoComplete="given-name"
											autoFocus
											onChange={onChange}
											id={'first-name'}
											label={firstNamePlaceholder}
											type={'text'}
											className={'text-input'}
											disabled={submitted}
											required
										/>
										<TypedInput
											placeholder={emailPlaceholder}
											autoComplete="email"
											id={'email'}
											onChange={onChange}
											label={emailPlaceholder}
											type={'text'}
											className={'text-input'}
											disabled={submitted}
											required
										/>
									</div>
									<div className={'col-xs-12 col-sm-12 col-md-6'}>
										<TypedInput
											placeholder={lastNamePlaceholder}
											autoComplete="family-name"
											id={'last-name'}
											onChange={onChange}
											label={lastNamePlaceholder}
											type={'text'}
											className={'text-input'}
											disabled={submitted}
											required
										/>
										<TypedInput
											placeholder={phonePlaceholder}
											autoComplete="tel"
											id={'phone'}
											onChange={onChange}
											label={phonePlaceholder}
											type={'text'}
											className={'text-input'}
											disabled={submitted}
											required
										/>
									</div>
									<div className={'col-xs-12 col-sm-12 col-md-12'}>
										<TypedInput
											big
											placeholder={messagePlaceholder}
											id={'message'}
											onChange={onChange}
											label={messagePlaceholder}
											className={'text-area'}
											disabled={submitted}
											required
										/>
										<div className={'submit-wrapper'}>
											<SubmitButton disabled={submitted}>{buttonLabel}</SubmitButton>
										</div>
									</div>
								</Container>
							</form>
							<div className={'col-xs-12'}>
								<p className={'h2'}>{responseMessage}</p>
							</div>
						</div>
					</Container>
				</main>
			</>
		);
	}
}

export default withContactUs(ContactUs);
