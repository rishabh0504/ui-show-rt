import './index.css';
import PropTypes from 'prop-types';

const Avatar = (props) => {
    const { size = 'xs', initial = 'rt', url = '', ...rest } = props;
    const urlStyle = {};
    if (url && url !== '') {
        urlStyle.backgroundImage = `url(${url})`;
        urlStyle.backgroundRepeat = `none`;
        urlStyle.backgroundSize = `cover`;
        console.log(urlStyle);
    }
    return (
        <div className={`ui-rt-avatar ui-rt-avatar-${size}`} style={urlStyle} {...rest}>
            {
                !url && (
                    <h3 className={`ui-rt-avatar-initial-${size}`}>{initial}</h3>
                )
            }
        </div>
    )
}

Avatar.propTypes = {
    initial: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    url: PropTypes.string
};

Avatar.defaultProps = {
    size: 'sm',
    initial: 'rt'
};

export default Avatar;
