import { Button } from "../../../components/ui/Button";
import { DataBlogs } from "../../../utils/data";
import "./index.scss";

export const Blog = () => {
    return (
        <section className="section_blog section">
            <div className="container">
                <div className="section_blog_header">
                    <div className="section_blog_header_left">
                        <p>You already know ?</p>
                        <h2>Useful pet knowledge</h2>
                    </div>
                    <div className="section_blog_header_right">
                        <Button
                            icon={"bx:right-arrow-circle"}
                            variant="icon"
                            size="medium"
                            color="white">
                            View all our sellers
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        {DataBlogs &&
                            DataBlogs.map((item) => (
                                <div
                                    className="section_blog_card"
                                    key={item._id}>
                                    <img src={item.img} />
                                    <div className="section_blog_card_body">
                                        <span>Pet knowledge</span>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
