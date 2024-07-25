import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/438255654_1678682075870156_810213145808807830_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ojqfzOUYcHEQ7kNvgFEsekH&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYAl3qTwPKTernBkuu79MIt9-3ZjOIwk2qu7znEdVIpEZQ&oe=66A66913"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Đoàn Phương Uyên
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Uyenunicorn</span>
            </div>
        </div>
    );
}

export default AccountItem;
