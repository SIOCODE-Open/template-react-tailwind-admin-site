import { ReactNode } from "react";
import { Icon } from "@iconify/react";

function AppHeader(opts: { navigate: (path: string) => void }) {
    return (
        <header className="w-full flex flex-row justify-between items-center gap-2 p-2 bg-blue-600 text-white shadow-lg">
            <div className="text-2xl font-bold">Admin Site</div>
            <div className="flex flex-row justify-start items-center">
                <a
                    href="#"
                    onClick={(ev) => {
                        ev.preventDefault();
                        opts.navigate("login");
                    }}
                    className="text-sm font-bold"
                >
                    Logout
                </a>
            </div>
        </header>
    );
}

function AppFooter(opts: { navigate: (path: string) => void }) {
    return (
        <footer className="w-full flex flex-row justify-center items-center gap-2 p-2 bg-blue-600 text-gray-200">
            <div className="text-sm">
                Admin Site - Version: 0.0.1 | Generated using{" "}
                <a href="https://projor.io" className="underline">
                    Projor
                </a>
                .
            </div>
        </footer>
    );
}

function AppSidebar(opts: { navigate: (path: string) => void }) {
    return (
        <aside className="w-64 bg-blue-800 text-white grow shadow-lg">
            <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h1 className="text-lg font-bold mt-8">Navigation</h1>
                <a
                    href="#"
                    onClick={(ev) => {
                        ev.preventDefault();
                        opts.navigate("dashboard");
                    }}
                    className="text-sm font-bold flex flex-row justify-start items-center"
                >
                    <Icon icon={`ic:baseline-dashboard`} />
                    <span>Dashboard</span>
                </a>
                <a
                    href="#"
                    onClick={(ev) => {
                        ev.preventDefault();
                        opts.navigate("products");
                    }}
                    className="text-sm font-bold flex flex-row justify-start items-center"
                >
                    <Icon icon={`ic:baseline-shopping-cart`} />
                    <span>Products</span>
                </a>
            </div>
        </aside>
    );
}

export function AppLayout(opts: {
    navigate: (path: string) => void;
    content: (contentOpts: { navigate: (path: string) => void }) => ReactNode;
}) {
    return (
        <div className="w-screen min-h-screen flex flex-col justify-stretch items-center">
            <AppHeader navigate={opts.navigate} />
            <div className="w-full grow flex flex-row justify-stretch items-stretch">
                <AppSidebar navigate={opts.navigate} />
                <main className="w-full flex flex-col justify-start items-start grow">
                    {opts.content({
                        navigate: opts.navigate,
                    })}
                </main>
            </div>
            <AppFooter navigate={opts.navigate} />
        </div>
    );
}
