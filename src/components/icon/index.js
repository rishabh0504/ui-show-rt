import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
const Icon = (props) => {
    const { classes, size = '', ...rest } = props;
    const sizes = size ? `fa-${size}` : '';
    console.log(sizes);
    return (
        <i className={`fa ${classes} ${sizes}`} {...rest}></i>
    )
}

Icon.propTypes = {
    classes: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['', '2x', '3x', '4x', '5x']),
};

Icon.defaultProps = {
    size: '',
    classes: "fa-spinner fa-spin"
};
export default Icon;
