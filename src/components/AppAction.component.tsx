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
        "px-4 py-2.5",
        {
            "text-sm": opts.small,
            "font-medium": true,
        },
        {
            "bg-white": true,
        },
        {
            border: true,
            "border-slate-300": true,
        },
        {
            "text-slate-700": true,
        },
        {
            "shadow-sm": true,
        },
        {
            "rounded-md": true,
        },
        {
            "hover:bg-slate-50": true,
        },
        {
            "hover:border-slate-400": true,
        },
        {
            "hover:shadow-md": true,
        },
        {
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
