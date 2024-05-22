import { Button } from "../../../components/ui/Button";
import { ProductCard } from "../../../components/ui/ProductCard";
import "./index.scss";

export const TopProduct = () => {
    return (
        <section className="section_top_product section">
            <div className="container">
                <div className="section_top_product_header">
                    <div className="section_top_product_header_left">
                        <p>Hard to choose right products for your pets?</p>
                        <h2>Top Products</h2>
                    </div>
                    <div className="section_top_product_header_right">
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
