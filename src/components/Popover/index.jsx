import React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import classNames from "classnames";

import styles from "./index.module.scss";

const Popover = ({ children, className }) => {
    return (
        <RadixPopover.Root>
            <RadixPopover.Trigger>open</RadixPopover.Trigger>
            <RadixPopover.Portal>
                <RadixPopover.Content
                    className={classNames(styles.popoverContent, className)}
                >
                    {children}
                </RadixPopover.Content>
            </RadixPopover.Portal>
        </RadixPopover.Root>
    );
};

const Close = ({ className, props, children }) => {
    return <RadixPopover.Close {...props} className={classNames(styles.popoverClose, className)} >
        {children}
    </RadixPopover.Close>;
};

Popover.Close = Close;

export default Popover;
