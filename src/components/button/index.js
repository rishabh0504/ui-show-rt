import './index.css'
const Button = ({ varient = 'default', size = 'md', disabled = false, lable = '', ...rest }) => {
    const disabledClass = disabled ? 'ui-rt-button-disabled' : ''
    return (
        <button className={`ui-rt-button ui-rt-button-${varient} ui-rt-button-${size} ${disabledClass}`} {...rest} disabled={disabled}>{lable}</button>
    )
}

export default Button;