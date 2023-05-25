import classNames from 'classnames/bind';
import Logo from '~/assets/images/Prox_logo.svg'

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
    const cx = classNames.bind(styles);
    return ( <>
        <div className={cx('wrapper')}>
            <div className={cx('logo_wrapper')}>
                <img src={Logo} alt="Prox Logo" className={cx('logo')} />
            </div>
            <div className={cx('action')}>
                <Link to="/my-resume" className={cx('link')}>Resume</Link>
                <Link to="/my-projects" className={cx('link')}>Projects</Link>
                <Link to="/social-media" className={cx('link')}>Social Media</Link>
            </div>
        </div>
    </> );
}

export default Header;