import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { placeholder = '', size = 'md', type = 'text', disabled = false, required = true, err = 'hello', ...rest } = props;
    const disabledClass = disabled === true ? 'ui-rt-input-disabled' : ''
    const [error, setError] = useState(err);
    const errorClass = error ? 'ui-rt-input-err' : '';
    const resetError = () => {
        setError('');
    }
    return (
        <React.Fragment>
            <input type={type} className={`ui-rt-input ${disabledClass} ${errorClass} ui-rt-input-${size}`} {...rest} placeholder={placeholder} disabled={disabled} onFocus={resetError} />
            {
                error && (<p className='ui-rt-input-err-span d-flex'>{error}</p>)
            }
        </React.Fragment>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    err: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'password']),
    required: PropTypes.oneOf([true, false])
};

Input.defaultProps = {
    placeholder: 'Custom Placeholder',
    size: 'sm',
    disabled: false,
    type: 'password',
    required: true
};
export default Input;
