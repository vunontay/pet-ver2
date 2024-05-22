import "./index.scss";
import { Button } from "../../../components/ui/Button";
import { ListImageBrand } from "../../../utils/data";

export const Brand = () => {
    return (
        <section className="section_brand section">
            <div className="container">
                <div className="section_brand_header">
                    <div className="section_brand_header_left">
                        <p>Proud to be part of</p>
                        <h2>Pet Sellers</h2>
                    </div>
                    <div className="section_brand_header_right">
                        <Button
                            icon={"bx:right-arrow-circle"}
                            variant="icon"
                            size="medium"
                            color="white">
                            View all our sellers
                        </Button>
                    </div>
                </div>
                <div className="section_brand_logos_container">
                    <div className="section_brand_logos_wrapper">
                        {ListImageBrand &&
                            ListImageBrand.map((img, index) => (
                                <img key={index} src={img.path} alt="" />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
