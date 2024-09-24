import { AppLayout } from "../layout/AppLayout.component";
import { AppAction } from "../components/AppAction.component";
import { AppDashboardList } from "../components/AppDashboardList.component";
import { AppDashboardStat } from "../components/AppDashboardStat.component";
import { AppDashboardMessage } from "../components/AppDashboardMessage.component";

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
                icon={`ic:baseline-shopping-cart`}
                navigate={opts.navigate}
            />
        </div>
    );
}

function DashboardWidgets(opts: { navigate: (path: string) => void }) {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="w-full p-8 shadow-lg rounded-lg text-center text-gray-500">
                <AppDashboardMessage
                    value={`This dashboard should be extended with the widgets that are needed.`}
                    name={`Dashboard Note`}
                />
            </div>

            <div className="w-full p-8 shadow-lg rounded-lg text-center text-gray-500">
                {/* No description */}
                <AppDashboardStat
                    name={`24 H Revenue`}
                    value={`$1,000,000`}
                    icon={``}
                />
            </div>

            <div className="w-full p-8 shadow-lg rounded-lg text-center text-gray-500">
                {/* No description */}
                <AppDashboardList
                    name={`Todos`}
                    value={[
                        `Do the laundry`, // No description
                        `Buy groceries`, // No description
                        `Call mom`, // No description
                    ]}
                />
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
                        This is the admin dashboard.
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
