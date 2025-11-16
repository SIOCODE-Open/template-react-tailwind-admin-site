export function LoginPage(opts: { navigate: (path: string) => void }) {
    const onLogin = (ev: any) => {
        ev.preventDefault();
        opts.navigate("dashboard");
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-100">
            <div className="w-full max-w-md mx-4 p-8 bg-white border border-slate-200 rounded-xl shadow-lg flex flex-col justify-center items-center gap-6">
                <h1 className="text-3xl font-bold text-slate-800">Login</h1>
                <form className="w-full flex flex-col gap-4" onSubmit={onLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
