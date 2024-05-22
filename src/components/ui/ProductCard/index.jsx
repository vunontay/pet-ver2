import { images } from "../../../assets";
import "./index.scss";

export const ProductCard = () => {
    return (
        <div className="card_product">
            <img src={images.imageProduct} alt="" />
            <div className="card_product_body">
                <h3 className="card_product_body_title">
                    MO231 - Pomeranian White
                </h3>
                <div className="card_product_body_details">
                    <div className="card_product_body_details_product">
                        product: <strong>Dog Food</strong>
                    </div>
                    <div className="card_product_body_details_variants">
                        size: <strong>385gm</strong>
                    </div>
                </div>
                <p className="card_product_body_price">140.000 VND</p>
            </div>
        </div>
    );
};
