import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";

import { images } from "../../../assets";
import "./index.scss";
import { MobileMenu, Navbar } from "../../shared";
import { LoginForm, Modal } from "../../ui";
import { closeModal, openModal } from "../../../redux/slice/modalSlice";
import { APP_ROUTER } from "../../../utils/constant";

export const Header = () => {
    const [isOpenMenubar, setIsOpenMenubar] = useState(false);

    const dispatch = useDispatch();
    const isOpenModal = useSelector((state) => state.modal.isOpen);
    const user = useSelector((state) => state.user.user);

    const handleCloseMobileMenu = () => {
        setIsOpenMenubar(false);
    };

    const toggleOpenModal = () => {
        dispatch(isOpenModal ? closeModal() : openModal());
    };

    return (
        <header className="header">
            <MobileMenu onClose={handleCloseMobileMenu} open={isOpenMenubar}>
                <Navbar />
            </MobileMenu>
            <nav className="nav">
                <div className="container nav_container">
                    <div className="nav_left">
                        <Link className="nav_logo">
                            <img src={images.logo} alt="" />
                        </Link>
                        <Navbar />
                    </div>
                    <div className="nav_right">
                        <button
                            className="menubar_icon"
                            onClick={() => setIsOpenMenubar(true)}>
                            <Icon icon="fluent:list-bar-16-filled" />
                        </button>
                        <ul className="nav_list_icon">
                            <li className="nav_list_icon_item">
                                <Icon icon="prime:search" />
                            </li>
                            <li className="nav_list_icon_item">
                                <Icon icon="prime:heart" />
                            </li>
                            <li className="nav_list_icon_item">
                                <Icon icon="f7:cart" />
                            </li>
                            {user ? (
                                <li className="nav_list_icon_item">
                                    <Link to={APP_ROUTER.PROFILE}>
                                        <img
                                            src={user?.avatar?.url}
                                            alt="avt"
                                        />
                                    </Link>
                                </li>
                            ) : (
                                <li
                                    onClick={toggleOpenModal}
                                    className="nav_list_icon_item">
                                    <Icon icon="la:user-solid" />
                                </li>
                            )}

                            <Modal
                                isOpen={isOpenModal}
                                toggleOpen={toggleOpenModal}>
                                <LoginForm />
                            </Modal>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
