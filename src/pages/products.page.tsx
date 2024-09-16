import { AppLayout } from "../layout/AppLayout.component";
import { AppAction } from "../components/AppAction.component";

function ProductsPreActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4">
            <AppAction
                to="create-product"
                name="Create"
                icon={`ic:baseline-add`}
                navigate={opts.navigate}
            />
        </div>
    );
}
function ProductsPostActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row justify-start items-center wrap gap-4">
            <AppAction
                to="dashboard"
                name="Open Dashboard"
                navigate={opts.navigate}
            />
        </div>
    );
}
function ProductsItemActions(opts: { navigate: (path: string) => void }) {
    return (
        <div className="flex flex-row wrap justify-start items-center gap-2">
            <AppAction
                to="edit-product"
                name="Edit"
                icon={`ic:baseline-edit`}
                navigate={opts.navigate}
                small
            />
            <AppAction
                to="products"
                name="Delete"
                icon={`ic:baseline-delete`}
                navigate={opts.navigate}
                small
            />
        </div>
    );
}
function ProductsTable(opts: { navigate: (path: string) => void }) {
    const values = [
        {
            id: `465191de-2108-4dc0-ac81-d3d53f2176e1`,
            name: `Vacuum Cleaner`,
            description: `This device will suck the dust from the floor to make it cleaner.`,
            buysLastWeek: `57`,
            price: `$99.99`,
        },
    ];

    return (
        <table className="w-full">
            <thead className="border-b border-black">
                <tr>
                    <th className="p-2">Id</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Buys Last Week</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {values.map((value, index) => (
                    <tr key={index} className="border-b border-gray-200 p-2">
                        <td className="p-2 text-center">{value.id}</td>
                        <td className="p-2 text-center">{value.name}</td>
                        <td className="p-2 text-center">{value.description}</td>
                        <td className="p-2 text-center">
                            {value.buysLastWeek}
                        </td>
                        <td className="p-2 text-center">{value.price}</td>
                        <td className="p-2 text-center">
                            <ProductsItemActions navigate={opts.navigate} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function ProductsContent(opts: { navigate: (path: string) => void }) {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-4">
            <ProductsPreActions navigate={opts.navigate} />
            <ProductsTable navigate={opts.navigate} />
            <ProductsPostActions navigate={opts.navigate} />
        </div>
    );
}

export function ProductsPage(opts: { navigate: (path: string) => void }) {
    return (
        <AppLayout
            content={() => (
                <div className="w-full flex flex-col gap-2 p-4 bg-white">
                    <h1 className="text-4xl text-gray-600 font-bold">
                        Products
                    </h1>
                    <h2 className="text-xl text-gray-400 font-serif italic">
                        This is the list of products. You can edit or delete
                        them.
                    </h2>
                    <hr className="border border-b border-gray-200" />
                    <ProductsContent navigate={opts.navigate} />
                </div>
            )}
            icon={`ic:baseline-shopping-cart`}
            navigate={opts.navigate}
        />
    );
}
