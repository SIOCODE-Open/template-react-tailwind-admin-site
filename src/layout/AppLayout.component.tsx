import { ReactNode } from "react";
import { Icon } from "@iconify/react";

function AppHeader(opts: { navigate: (path: string) => void }) {
    return (
        <header className="w-full flex flex-row justify-between items-center gap-2 px-6 py-4 bg-slate-800 text-white shadow-xl border-b border-slate-800">
            <div className="text-2xl font-bold tracking-tight">Admin Site</div>
            <div className="flex flex-row justify-start items-center">
                <a
                    href="#"
                    onClick={(ev) => {
                        ev.preventDefault();
                        opts.navigate("login");
                    }}
                    className="text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                    Logout
                </a>
            </div>
        </header>
    );
}

function AppFooter(opts: { navigate: (path: string) => void }) {
    return (
        <footer className="w-full flex flex-row justify-center items-center gap-2 px-6 py-4 bg-slate-950 text-slate-400 border-t border-slate-900">
            <div className="text-sm">
                Admin Site - Version: 0.0.1 | Generated using{" "}
                <a
                    href="https://projor.io"
                    className="underline text-indigo-400 hover:text-indigo-300"
                >
                    Projor
                </a>
                .
            </div>
        </footer>
    );
}

function AppSidebar(opts: { navigate: (path: string) => void }) {
    return (
        <aside className="w-64 bg-slate-900 text-slate-100 grow shadow-2xl border-r border-slate-800">
            <div className="flex flex-col justify-start items-stretch gap-1 p-4">
                <h1 className="text-sm font-bold uppercase tracking-wider text-slate-100 opacity-60 mt-8 mb-4 px-3">
                    Navigation
                </h1>
                <a
                    href="#"
                    onClick={(ev) => {
                        ev.preventDefault();
                        opts.navigate("dashboard");
                    }}
                    className="text-sm font-medium flex flex-row justify-start items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 hover:bg-slate-800 hover:text-white hover:pl-4"
                >
                    <Icon icon={`ic:baseline-dashboard`} className="text-lg" />
                    <span>Dashboard</span>
                </a>
                <a
                    href="#"
                    onClick={(ev) => {
                        ev.preventDefault();
                        opts.navigate("products");
                    }}
                    className="text-sm font-medium flex flex-row justify-start items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 hover:bg-slate-800 hover:text-white hover:pl-4"
                >
                    <Icon
                        icon={`ic:baseline-shopping-cart`}
                        className="text-lg"
                    />
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
