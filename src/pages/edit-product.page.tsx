import { AppLayout } from "../layout/AppLayout.component";
import { AppAction } from "../components/AppAction.component";
import { AppDashboardList } from "../components/AppDashboardList.component";
import { AppDashboardStat } from "../components/AppDashboardStat.component";
import { AppDashboardMessage } from "../components/AppDashboardMessage.component";

function EditProductPreActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4"></div>
    );
}
function EditProductPostActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4">
            <AppAction
                to="products"
                name="Cancel"
                icon={`ic:baseline-cancel`}
                navigate={opts.navigate}
            />
            <AppAction
                to="products"
                name="Save"
                icon={`ic:baseline-save`}
                navigate={opts.navigate}
            />
            <AppAction
                to="products"
                name="Delete"
                icon={`ic:baseline-delete`}
                navigate={opts.navigate}
            />
        </div>
    );
}
function EditProductForm(opts: { navigate: (path: string) => void }) {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-sm text-gray-500">Name</p>
                <input
                    type="text"
                    placeholder={`Vacuum Cleaner`}
                    className="w-full p-2 border border-gray-500 focus:outline-gray-700 rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-sm text-gray-500">Description</p>
                <input
                    type="text"
                    placeholder={`This device will suck the dust from the floor to make it cleaner.`}
                    className="w-full p-2 border border-gray-500 focus:outline-gray-700 rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-sm text-gray-500">Price</p>
                <input
                    type="text"
                    placeholder={`$99.99`}
                    className="w-full p-2 border border-gray-500 focus:outline-gray-700 rounded-lg"
                />
            </div>
        </div>
    );
}

function EditProductContent(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-col justify-start items-start gap-4">
            <EditProductPreActions navigate={opts.navigate} />
            <EditProductForm navigate={opts.navigate} />
            <EditProductPostActions navigate={opts.navigate} />
        </div>
    );
}

export function EditProductPage(opts: { navigate: (path: string) => void }) {
    return (
        <AppLayout
            content={() => (
                <div className="w-full flex flex-col gap-2 p-4 bg-white">
                    <h1 className="text-4xl text-gray-600 font-bold">
                        Edit Vacuum Cleaner
                    </h1>
                    <h2 className="text-xl text-gray-400 font-serif italic">
                        You are editing product
                        465191de-2108-4dc0-ac81-d3d53f2176e1 called Vacuum
                        Cleaner.
                    </h2>
                    <hr className="border border-b border-gray-200" />
                    <EditProductContent navigate={opts.navigate} />
                </div>
            )}
            icon={`ic:baseline-edit`}
            navigate={opts.navigate}
        />
    );
}
