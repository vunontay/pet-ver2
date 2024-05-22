import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import "./index.scss";
export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            if (typeof window == "undefined") {
                return;
            }
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scrollToTop ${!isVisible ? "hide" : ""}`}
            onClick={scrollToTop}>
            <Icon icon="tabler:arrow-top-tail" />
        </button>
    );
};
