import { Icon } from "@iconify/react";
import classNames from "classnames";

export function AppDashboardList(opts: { name: string; value: Array<string> }) {
    return (
        <div className="w-full flex flex-col justify-start items-stretch gap-2">
            <p className="text-xl font-bold">{opts.name}</p>
            <div className="flex flex-col justify-start items-stretch gap-2 border border-gray-300 rounded-lg">
                {opts.value.map((v, i) => {
                    const divClassname = classNames(
                        "w-full flex flex-row justify-start items-center gap-2 p-2",
                        {
                            "border-b": i !== opts.value.length - 1,
                        }
                    );
                    return (
                        <div key={i} className={divClassname}>
                            <p>{v}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
