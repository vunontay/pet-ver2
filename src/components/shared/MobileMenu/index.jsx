import PropTypes from "prop-types";

import "./index.scss";
import { Button } from "../../ui";
export const MobileMenu = ({ onClose, open, children, ...rest }) => {
    const handleInnerClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div
            {...rest}
            onClick={onClose}
            className={`menubar ${open ? "open" : ""}`}>
            <div
                className={`menubar__inner ${open ? "active" : ""}`}
                onClick={handleInnerClick}>
                <div className="menubar__close" onClick={onClose}>
                    <Button
                        icon={"mingcute:close-fill"}
                        variant="icon"
                        size="circle"
                        color="white"
                    />
                </div>
                <div className="menubar__body">{children}</div>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func,
};
