import { Blog } from "./Blog";
import { BottomBanner } from "./BottomBanner";
import { Brand } from "./Brand";
import { HeroBanner } from "./HeroBanner";
import { MiddleBanner } from "./MiddleBanner";
import { NewProduct } from "./NewProduct";
import { TopProduct } from "./TopProduct";

export const HomePage = () => {
    return (
        <main>
            <HeroBanner />
            <NewProduct />
            <MiddleBanner />
            <TopProduct />
            <Brand />
            <BottomBanner />
            <Blog />
        </main>
    );
};
