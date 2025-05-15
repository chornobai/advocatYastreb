import s from "./SectionHeader.module.scss"
import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";

type SectionHeaderProps = {
    title?: string;
    name?: string | React.ReactNode;
    className?: string;
    classFor?:string
    classContainer?:string;
} & ComponentPropsWithoutRef<"div">

export const SectionHeader = ({ classContainer, classFor,className, name, title}: SectionHeaderProps) => {
    return (
        <div className={clsx(s.section_header, classContainer)}>
            <p className={clsx(s.section_name, classFor)}> {name}</p><h2
            className={clsx(s.section_title, className)}>{title}</h2>
        </div>
    )
}