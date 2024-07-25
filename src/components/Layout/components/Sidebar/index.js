import classNames from 'classnames/bind';
import styles from '~/components/Layout/components/Sidebar/Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Side bar</h2>
        </aside>
    );
}

export default Sidebar;
