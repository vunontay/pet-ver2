import { Button } from "../../../components/ui/Button";
import { ProductCard } from "../../../components/ui/ProductCard";
import "./index.scss";

export const NewProduct = () => {
    return (
        <section className="section_new_product section">
            <div className="container">
                <div className="section_new_product_header">
                    <div className="section_new_product_header_left">
                        <p>Whats new?</p>
                        <h2>Take a look at some of our pets</h2>
                    </div>
                    <div className="section_new_product_header_right">
                        <Button
                            icon={"bx:right-arrow-circle"}
                            variant="icon"
                            size="medium"
                            color="white">
                            View More
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};
