import { createRoot } from "react-dom/client";
import { useState, useEffect, useRef } from "react";
import { DashboardPage } from "./pages/dashboard.page";
import { ProductsPage } from "./pages/products.page";
import { EditProductPage } from "./pages/edit-product.page";
import { CreateProductPage } from "./pages/create-product.page";
import { LoginPage } from "./pages/login.page";

function App() {
    const [path, setPath] = useState(window.location.pathname);
    const currentComponentRef = useRef<any>(LoginPage);
    const [navigationCounter, setNavigationCounter] = useState(0);

    const navigate = (path: string) => {
        if (path === "dashboard" || path === "dashboard-page") {
            currentComponentRef.current = DashboardPage;
            setNavigationCounter(navigationCounter + 1);
            setPath(path);
        }
        if (path === "products" || path === "products-page") {
            currentComponentRef.current = ProductsPage;
            setNavigationCounter(navigationCounter + 1);
            setPath(path);
        }
        if (path === "edit-product" || path === "edit-product-page") {
            currentComponentRef.current = EditProductPage;
            setNavigationCounter(navigationCounter + 1);
            setPath(path);
        }
        if (path === "create-product" || path === "create-product-page") {
            currentComponentRef.current = CreateProductPage;
            setNavigationCounter(navigationCounter + 1);
            setPath(path);
        }
        if (path === "login") {
            currentComponentRef.current = LoginPage;
            setNavigationCounter(navigationCounter + 1);
            setPath(path);
        }
    };

    return <currentComponentRef.current navigate={navigate} />;
}

const appEl = document.getElementById("app");
const root = createRoot(appEl!);
root.render(<App />);
