export function LoginPage(opts: { navigate: (path: string) => void }) {
    const onLogin = (ev: any) => {
        ev.preventDefault();
        opts.navigate("dashboard");
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-96 p-4 border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-2">
                <h1 className="text-4xl font-bold">Login</h1>
                <form className="flex flex-col gap-4" onSubmit={onLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
