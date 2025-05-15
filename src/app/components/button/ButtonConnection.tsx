import {Button} from "@/app/components/button/Button";
import {IconButton} from "@/app/components/button/IconButton";

type ButtonConnectionProps = {
    variant?: "primary" | "secondary" | "icon"
}
export const ButtonConnection = ({ variant="primary"}:ButtonConnectionProps) => {
    return (
        <Button variant={variant}>Зв&apos; язатись зараз<IconButton/></Button>
    )
}