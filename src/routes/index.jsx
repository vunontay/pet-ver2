import {
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage, NotFound, OrderPage, ProductPage } from "../pages";
import { APP_ROUTER } from "../utils/constant";
import { AuthLayout, MainLayout } from "../layouts";
import { LoginPage, RegisterPage } from "../pages/Auth";
import { Component } from "../pages/Components";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={APP_ROUTER.INDEX} element={<MainLayout />}>
                <Route path={APP_ROUTER.INDEX} element={<HomePage />} index />
                <Route path={APP_ROUTER.PRODUCT} element={<ProductPage />} />
                <Route path={APP_ROUTER.ORDER} element={<OrderPage />} />
            </Route>
            <Route path={APP_ROUTER.AUTH} element={<AuthLayout />}>
                <Route path={APP_ROUTER.LOGIN} element={<LoginPage />} />
                <Route path={APP_ROUTER.REGISTER} element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/component" element={<Component />} />
        </Route>
    )
);

export default router;
