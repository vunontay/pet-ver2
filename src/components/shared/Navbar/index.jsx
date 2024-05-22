import { Link } from "react-router-dom";
import { NavbarItem } from "../../../utils/data";
import "./index.scss";

export const Navbar = () => {
    return (
        <>
            <ul className="nav_list">
                {NavbarItem.map((item) => (
                    <li className="nav_item" key={item._id}>
                        <Link className="nav_link" to={item.path}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
