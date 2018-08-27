import React from 'react';
import PropTypes from 'prop-types';
import Subscribe from 'js/components/Subscribe';
import Social from 'js/components/Social';
import ContactUs from 'js/components/ContactUs';
import ThirdsContainer from 'js/components/grid/ThirdsContainer';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    static propTypes = {
        contactDetails: PropTypes.array,
        subscribeTitle: PropTypes.string,
        subscribePlaceholder: PropTypes.string,
        subscribeButton: PropTypes.string,
        socialLinks: PropTypes.array,
        socialTitle: PropTypes.string,
        contactTitle: PropTypes.string,
        privacyLink: PropTypes.string,
        privacyLinkText: PropTypes.string
    };

    render() {
        const {
            contactDetails,
            subscribeTitle,
            subscribePlaceholder,
            subscribeButton,
            socialLinks,
            socialTitle,
            contactTitle,
            smallFooterLink
        } = this.props;

        return (
            <footer className={'footer'}>
                <ThirdsContainer>
                    <div className={'footer-cols'}>
                        <ContactUs title={contactTitle} types={contactDetails || undefined} />
                    </div>
                    {(socialTitle || '').trim() && (
                        <div className={'footer-cols'}>
                            <Social title={socialTitle} icons={socialLinks} />
                        </div>
                    )}
                    {(subscribeTitle || '').trim() && (
                        <div className={'footer-cols'}>
                            <Subscribe
                                buttonText={subscribeButton}
                                subscribePlaceholder={subscribePlaceholder}
                                title={subscribeTitle}
                            />
                        </div>
                    )}
                </ThirdsContainer>
                <div className={'privacy-container'}>
                    <ThirdsContainer>
                        <div className={'privacy'}>
                            {smallFooterLink && (
                                <Link to={smallFooterLink.url.replace(location.origin, '') || '/'}>
                                    {smallFooterLink.title || 'Disclaimer and Privacy Policy'}
                                </Link>
                            )}
                        </div>
                        <div />
                        <div />
                    </ThirdsContainer>
                </div>
            </footer>
        );
    }
}
