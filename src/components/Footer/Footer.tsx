import * as React from 'react';

import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FooterStyled from './FooterStyled';

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <div className="coopyright-links">
                <nav>
                    <ul>
                        <li><Link to={'#'}>About</Link></li>
                        <li><Link to={'#'}>Contact</Link></li>
                        <li><Link to={'#'}>Terms Of Use</Link></li>
                        <li><Link to={'#'}>Privacy Politic</Link></li>
                    </ul>
                </nav>
                <small>&copy; Your WebSite 2022. All Rights Reserved.</small>
            </div>

            <div className="social-midias">
                <span className="icons-social-midia"><BsFacebook /></span>
                <span className="icons-social-midia"><BsTwitter /></span>
                <span className="icons-social-midia"><BsLinkedin /></span>
            </div>
        </FooterStyled>
    );
};

export default Footer;