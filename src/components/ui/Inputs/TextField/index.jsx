import PropTypes from "prop-types";
import "./index.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

export const TextField = ({
    label,
    id,
    required,
    className,
    helperText,
    error,
    success,
    value,
    onChange,
    children,
    showIcon,
    icon,
    onClickIcon,
    type = "text",
    ...rest
}) => {
    let textfieldClassName = `textfield${error ? " error" : ""}${
        success ? " success" : ""
    }${className ? ` ${className}` : ""}`;

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <fieldset className={textfieldClassName}>
            {label && (
                <label className="textfield_label" htmlFor={id}>
                    {label} {required && <small>*</small>}
                </label>
            )}
            <label htmlFor={id} className="textfield_content">
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    {...rest}
                />
                {error === false && helperText === ""}
                {children}
                {showIcon && (
                    <Icon
                        className="textfield_content_icon show-password"
                        onClick={onClickIcon}
                        icon={icon}
                    />
                )}
            </label>
            {error && <small className="textfield_error">{helperText}</small>}
        </fieldset>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    helperText: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node,
    showIcon: PropTypes.bool,
    icon: PropTypes.string,
    onClickIcon: PropTypes.func,
    type: PropTypes.string,
};

export default TextField;
