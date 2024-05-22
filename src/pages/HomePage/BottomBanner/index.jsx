import { Button } from "../../../components/ui/Button";
import "./index.scss";
export const BottomBanner = () => {
    return (
        <section className="bottom_banner">
            <div className="container bottom_banner_container">
                <div className="bottom_banner_wrapper">
                    <div className="bottom_banner_content">
                        <h1 className="bottom_banner_main_title">Adoption</h1>
                        <h2 className="bottom_banner_sub_title">
                            We need help. so do they.
                        </h2>
                        <p className="bottom_banner_description">
                            Adopt a pet and give it a home, it will be love you
                            back unconditionally.
                        </p>
                        <div className="bottom_banner_btn">
                            <Button variant="primary" size="large" color="blue">
                                Explore Now
                            </Button>
                            <Button
                                icon={"bx:right-arrow-circle"}
                                variant="icon"
                                size="large"
                                color="white">
                                View Intro
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
