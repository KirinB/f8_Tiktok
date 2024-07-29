import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';

const cx = classNames.bind(styles);

function Image({ src, className, fallback: customFallback = images.noImage, alt = '', ...porps }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            {...porps}
            src={fallback || src}
            onError={handleError}
            alt={alt}
        />
    );
}

export default forwardRef(Image);
