import './index.css';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
    const { lable = 'Default lable', size = 'lg', disabled = false, ...rest } = props;
    const disabledClass = disabled === true ? 'ui-rt-checkbox-disabled' : ''
    return (
        <div className='d-flex'>
            <input type='checkbox' className={`ui-rt-checkbox ui-rt-checkbox-${size} ${disabledClass} d-flex`} {...rest} disabled={disabled} />
            <label htmlFor={lable} className={`ui-rt-checkbox-lable ui-rt-checkbox-${size} d-flex`}>{lable}</label>
        </div>
    )
}

CheckBox.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    lable: PropTypes.string.isRequired,
};

CheckBox.defaultProps = {
    lable: 'Default Label',
    disabled: false,
    size: 'sm'
};
export default CheckBox;
