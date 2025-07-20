import s from "./SectionNote.module.scss"
import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";

type SectionHeaderProps = {
    title?: string;
    className?: string;

} & ComponentPropsWithoutRef<"div">

export const SectionNote = ({ className, title}: SectionHeaderProps) => {
    return (
        <div className={clsx(s.section_header,className)}>
            <p className={clsx(s.section_name)}> {title}</p>
        </div>
    )
}