import { images } from "../../../assets";
import { Button } from "../../../components/ui/Button";
import "./index.scss";
export const MiddleBanner = () => {
    return (
        <section className="middle_banner">
            <div className="container middle_banner_container">
                <img src={images.image1} />
                <div className="middle_banner_wrapper">
                    <div className="middle_banner_content">
                        <h1 className="middle_banner_main_title">
                            One more friend
                        </h1>
                        <h2 className="middle_banner_sub_title">
                            Thousands more fun!
                        </h2>
                        <p className="middle_banner_description">
                            Having a pet means you have more joy, a new friend,
                            a happy person who will always be with you to have
                            fun. We have 200+ different pets that can meet your
                            needs!
                        </p>
                        <div className="middle_banner_btn">
                            <Button
                                icon={"bx:right-arrow-circle"}
                                variant="icon"
                                size="large"
                                color="white">
                                View Intro
                            </Button>
                            <Button variant="primary" size="large" color="blue">
                                Explore Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
