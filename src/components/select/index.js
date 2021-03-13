import { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Select = (props) => {

    const { defaultValue = '', size = 'xs', varient = 'info', disabled = false, options = [], ...rest } = props;
    let selectedElement;

    if (defaultValue && defaultValue !== '') {
        selectedElement = options.find(item => item.value === defaultValue)
    }

    const [selectedOption, setSelectedOption] = useState(selectedElement ? selectedElement.label : 'Select Item');
    const [activationClass, setActivationClass] = useState('');
    const disabledClass = disabled ? 'ui-rt-disabled' : '';

    const clickedItem = async (option) => {
        const selectedElement = options.find(item => item.value === option.value);
        if (selectedElement) {
            setSelectedOption(selectedElement.label);
            props?.onSelect(selectedElement);
        }
    }

    const enableHover = () => {
        setActivationClass('ui-rt-options-display');
    }

    const disableHover = () => {
        setActivationClass('ui-rt-options-hide');
    }

    return (
        (
            <>
                <div className={`ui-rt-select ui-rt-select-${varient} ${disabledClass}`} disabled={disabled} {...rest} onMouseEnter={enableHover} onMouseLeave={disableHover}>
                    <div className={`ui-rt-selected ui-rt-selected-${varient} ui-rt-selected-${size}`}>
                        <span className='selected-item'>{selectedOption}</span>
                        <span className='ui-rt-down-arrow'></span>
                    </div>
                    <ul className={`ui-rt-options ui-rt-options-${varient} ${activationClass}`}>
                        {
                            options && options.map((option, index) => {
                                const activeClass = option.label === selectedOption ? `active-${varient}` : '';
                                return (
                                    <li key={index} className={`option ${activeClass} option-${size}`} onClick={() => clickedItem(option)}>
                                        <input type="radio" name="radio" value={option.value} className="radio" />
                                        <label htmlFor={option.label}>{option.label}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        )
    )
}


Select.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    varient: PropTypes.oneOf(['info', 'warning', 'danger', 'success', 'default']),
};

Select.defaultProps = {
    defaultValue: 'radio',
    size: 'sm',
    disabled: false,
    options: [
        { lable: 'Option-1', value: 'r1' },
        { lable: 'Option-2', value: 'r2' },
        { lable: 'Option-3', value: 'r3' }
    ],
    varient: 'info'
};

export default Select;