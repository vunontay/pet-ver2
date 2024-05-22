import "./index.scss";
import { Button, TextField } from "../../ui";
import { Navbar } from "../Navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { images } from "../../../assets";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer_container">
                <div className="footer_top">
                    <h2 className="footer_top_heading">
                        Register now so you {"Don't"} miss our programs
                    </h2>
                    <form action="#" className="footer_top_form">
                        <TextField
                            placeholder="Enter your Email"
                            className="input"
                        />
                        <Button
                            className="button"
                            variant="submit"
                            size="large"
                            color="main">
                            Subcribe Now
                        </Button>
                    </form>
                </div>
                <div className="footer_middle">
                    <div className="footer_middle_menu">
                        <Navbar />
                    </div>
                    <div className="footer_middle_social">
                        <Icon icon="bi:facebook" />
                        <Icon icon="ri:twitter-x-fill" />
                        <Icon icon="bi:instagram" />
                        <Icon icon="bi:youtube" />
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer_bottom_copyright">
                        © 2022 Monito. All rights reserved
                    </div>
                    <img src={images.logo} alt="" loading="lazy" />
                    <ul className="footer_bottom_list">
                        <li className="footer_bottom_item">Terms of Service</li>
                        <li className="footer_bottom_item">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
