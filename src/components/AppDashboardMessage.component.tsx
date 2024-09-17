import { Icon } from "@iconify/react";
import classNames from "classnames";

export function AppDashboardMessage(opts: { name: string; value: string }) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 grow">
            <h1 className="text-lg font-bold">{opts.name}</h1>
            <p className="text-sm text-gray-500">{opts.value}</p>
        </div>
    );
}
