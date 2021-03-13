import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Radio = (props) => {
    const { name = 'default', size = 'sm', varient = 'info', disabled = false, type = '', options = [], ...rest } = props;
    const displayWrapper = type === 'inline' ? `d-flex` : 'd-block';
    return (
        <div className={`${displayWrapper}`}>
            {
                options && options.map((item, index) => {
                    return (
                        <div className={`ui-rt-radio`} key={index} >
                            <input key={index} type='radio' name={name} value={item.value} className={`ui-rt-radio-${size}`} {...rest} disabled={disabled} />
                            <label className={`ui-rt-radio-lable-${size}`} htmlFor={name}>{item.lable}</label>
                        </div >
                    )
                })
            }
        </div>
    )
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['inline', 'list']).isRequired,
    options: PropTypes.array.isRequired,
    varient: PropTypes.oneOf(['info', 'warning', 'success', 'danger', 'default']),
};

Radio.defaultProps = {
    name: 'radio',
    size: 'sm',
    disabled: false,
    type: 'inline',
    options: [
        { lable: 'Radio-1', value: 'r1' },
        { lable: 'Radio-2', value: 'r2' },
        { lable: 'Radio-3', value: 'r3' }
    ],
    varient: 'danger'
};
export default Radio;
