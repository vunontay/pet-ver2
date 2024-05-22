import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./index.scss";

export const Button = (props) => {
    const {
        children,
        variant = "default",
        size = "medium",
        color = "main",
        className = "",
        icon = "",
        loading = false,
        ...rest
    } = props;

    let buttonClassNames = `btn`;
    if (variant !== "") {
        buttonClassNames += ` btn--${variant}`;
    }
    if (size !== "") {
        buttonClassNames += ` btn--${size}`;
    }
    if (color !== "") {
        buttonClassNames += ` btn--${color}`;
    }
    if (className) {
        buttonClassNames += ` ${className}`;
    }

    return (
        <button className={buttonClassNames} {...rest}>
            {children}
            {variant === "icon" ? <Icon icon={icon} /> : null}
            {loading && <Icon icon="eos-icons:loading" />}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        "default",
        "primary",
        "secondary",
        "icon",
        "submit",
    ]),
    size: PropTypes.oneOf(["small", "medium", "large", "circle"]),
    color: PropTypes.oneOf(["main", "blue", "white"]),
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
};
