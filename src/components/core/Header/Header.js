import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Logo from '~/assets/images/Prox_logo.svg'
import styles from './Header.module.scss';
import mouseHelper from "~/core/helpers/MouseHelper";

function Header() {
    const cx = classNames.bind(styles);
    return ( <>
        <div className={cx('wrapper')}>
            <div className={cx('logo_wrapper')}>
                <img src={Logo} alt="Prox Logo" className={cx('logo', mouseHelper.addTargetTrigger(true))} />
            </div>
            <div className={cx('action')}>
                <Link to="/my-resume" className={cx('link', mouseHelper.addTargetTrigger(true))}>Resume</Link>
                <Link to="/my-projects" className={cx('link', mouseHelper.addTargetTrigger(true))}>Projects</Link>
                <Link to="/social-media" className={cx('link', mouseHelper.addTargetTrigger(true))}>Social Media</Link>
            </div>
        </div>
    </> );
}

export default Header;