import { AppLayout } from "../layout/AppLayout.component";
import { AppAction } from "../components/AppAction.component";

function DashboardPreActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4"></div>
    );
}
function DashboardPostActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4">
            <AppAction
                to="products"
                name="Open Products"
                navigate={opts.navigate}
            />
        </div>
    );
}

function DashboardWidgets(opts: { navigate: (path: string) => void }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-2 border border-gray-500 rounded-lg text-center text-gray-500">
                <h1 className="text-xl">Example widget</h1>
                <p className="text-sm italic text-gray-500">
                    This is an example widget, dashboard needs some more work.
                </p>
            </div>
        </div>
    );
}

function DashboardContent(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-col justify-start items-start gap-4">
            <DashboardPreActions navigate={opts.navigate} />
            <DashboardWidgets navigate={opts.navigate} />
            <DashboardPostActions navigate={opts.navigate} />
        </div>
    );
}
export function DashboardPage(opts: { navigate: (path: string) => void }) {
    return (
        <AppLayout
            content={() => (
                <div className="w-full flex flex-col gap-2 p-4 bg-white">
                    <h1 className="text-4xl text-gray-600 font-bold">
                        Admin Dashboard
                    </h1>
                    <h2 className="text-xl text-gray-400 font-serif italic">
                        This is the admin dashboard. It is left empty for this
                        example.
                    </h2>
                    <hr className="border border-b border-gray-200" />
                    <DashboardContent navigate={opts.navigate} />
                </div>
            )}
            icon={`ic:baseline-dashboard`}
            navigate={opts.navigate}
        />
    );
}
