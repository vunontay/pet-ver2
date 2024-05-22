import PropTypes from "prop-types";
import "./index.scss";
import { Button } from "../../ui";

export const Modal = (props) => {
    const { toggleOpen, children, isOpen, ...rest } = props;
    const handleOverlayClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div
            {...rest}
            onClick={toggleOpen}
            className={`overlay ${isOpen ? "open" : ""}`}>
            <div className="modal" onClick={handleOverlayClick}>
                {children}
            </div>
            <Button
                onClick={toggleOpen}
                className="modal__button"
                icon={"mingcute:close-fill"}
                variant="icon"
                size="circle"
                color="white"
            />
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool,
};
