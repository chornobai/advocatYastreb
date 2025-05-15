import {Button} from "@/app/components/button/Button";
import {IconButton} from "@/app/components/button/IconButton";
import {ComponentProps} from "react";

type BaseButton = {
    text: string;
    variant?: "primary" | "secondary";
}& ComponentProps<'button'>
export const BaseButton = ({text, variant="primary", ...props}:BaseButton) => {
    return (
        <Button variant={variant} {...props}>{text}<IconButton/></Button>
    )
}