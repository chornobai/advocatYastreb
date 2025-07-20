import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import styles from "./Accordion.module.scss";


// Accordion Root
type AccordionRootProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;
export const AccordionRoot = ({ children, ...props }: AccordionRootProps) => (
    <AccordionPrimitive.Root {...props}>
        {children}
    </AccordionPrimitive.Root>
);

// Accordion Item
type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    className?: string;
};

export const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    AccordionItemProps
>(({ children, className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={clsx(styles.Item, className)}
        {...props}
    >
        {children}
    </AccordionPrimitive.Item>
));
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger.
type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    classHeader?: string;
};

export const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    AccordionTriggerProps
>(({ children, className, classHeader, ...props }, forwardedRef) => {
    return (
        <AccordionPrimitive.Header className={clsx(styles.Header, classHeader)}>
            <AccordionPrimitive.Trigger
                className={clsx(styles.Trigger, className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon className={styles.Chevron} aria-hidden />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    classContent?: string;
};

export const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    AccordionContentProps
>(({ children, className, classContent, ...props }, forwardedRef) => {
    return (
        <AccordionPrimitive.Content
            className={clsx(styles.Content, className, classContent)}
            {...props}
            ref={forwardedRef}
        >
            <div className={styles.ContentText}>{children}</div>
        </AccordionPrimitive.Content>
    );
});
AccordionContent.displayName = "AccordionContent";
export const Accordion = {
    Root: AccordionRoot,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
};
