import { AppLayout } from "../layout/AppLayout.component";
import { AppAction } from "../components/AppAction.component";
import { AppDashboardList } from "../components/AppDashboardList.component";
import { AppDashboardStat } from "../components/AppDashboardStat.component";
import { AppDashboardMessage } from "../components/AppDashboardMessage.component";

function CreateProductPreActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4"></div>
    );
}
function CreateProductPostActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4">
            <AppAction
                to="products"
                name="Cancel"
                icon={`ic:baseline-cancel`}
                navigate={opts.navigate}
            />
            <AppAction to="products" name="Save" navigate={opts.navigate} />
        </div>
    );
}
function CreateProductForm(opts: { navigate: (path: string) => void }) {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-sm text-gray-500">Name Of New Product</p>
                <input
                    type="text"
                    placeholder={`Vacuum Cleaner`}
                    className="w-full p-2 border border-gray-500 focus:outline-gray-700 rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-sm text-gray-500">
                    Description Of New Product
                </p>
                <input
                    type="text"
                    placeholder={`This device will suck the dust from the floor to make it cleaner.`}
                    className="w-full p-2 border border-gray-500 focus:outline-gray-700 rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-sm text-gray-500">Price Of New Product</p>
                <input
                    type="text"
                    placeholder={`$99.99`}
                    className="w-full p-2 border border-gray-500 focus:outline-gray-700 rounded-lg"
                />
            </div>
        </div>
    );
}

function CreateProductContent(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-col justify-start items-start gap-4">
            <CreateProductPreActions navigate={opts.navigate} />
            <CreateProductForm navigate={opts.navigate} />
            <CreateProductPostActions navigate={opts.navigate} />
        </div>
    );
}

export function CreateProductPage(opts: { navigate: (path: string) => void }) {
    return (
        <AppLayout
            content={() => (
                <div className="w-full flex flex-col gap-2 p-4 bg-white">
                    <h1 className="text-4xl text-gray-600 font-bold">
                        Create Product
                    </h1>
                    <h2 className="text-xl text-gray-400 font-serif italic">
                        You are creating a new product.
                    </h2>
                    <hr className="border border-b border-gray-200" />
                    <CreateProductContent navigate={opts.navigate} />
                </div>
            )}
            icon={`ic:baseline-add`}
            navigate={opts.navigate}
        />
    );
}
