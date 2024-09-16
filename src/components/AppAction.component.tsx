import { Icon } from "@iconify/react";
import classNames from "classnames";

export function AppAction(opts: {
    to: string;
    name: string;
    icon?: string;
    small?: boolean;
    navigate: (path: string) => void;
}) {
    let aClassName = classNames(
        "p-2",
        {
            "text-sm": opts.small,
        },
        {
            "bg-blue-500": true,
        },
        {
            border: true,
            "border-blue-400": true,
        },
        {
            "text-white": true,
        },
        {
            "shadow-lg": true,
        },
        {
            "hover:bg-blue-600": true,
        },
        {
            "rounded-lg": true,
            "text-center": !opts.small,
            flex: true,
            "flex-row": true,
            "justify-start": true,
            "items-center": true,
            "gap-2": true,
        }
    );
    return (
        <a
            href="#"
            className={aClassName}
            onClick={(ev: any) => {
                ev.preventDefault();
                opts.navigate(opts.to);
            }}
        >
            {opts.icon && <Icon icon={opts.icon} />}
            <span>{opts.name}</span>
        </a>
    );
}
