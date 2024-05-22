import { images } from "../../../assets";
import { Button } from "../../../components/ui/Button";
import "./index.scss";
export const HeroBanner = () => {
    return (
        <section className="hero_banner">
            <div className="container hero_banner_wrapper_container">
                <img src={images.mobileBanner} />
                <div className="hero_banner_wrapper">
                    <h1 className="hero_banner_main_title">One more friend</h1>
                    <h2 className="hero_banner_sub_title">
                        Thousands more fun!
                    </h2>
                    <p className="hero_banner_description">
                        Having a pet means you have more joy, a new friend, a
                        happy person who will always be with you to have fun. We
                        have 200+ different pets that can meet your needs!
                    </p>
                    <div className="hero_banner_btn">
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
        </section>
    );
};
