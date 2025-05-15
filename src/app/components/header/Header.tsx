"use client"
import {Button} from "@/app/components/button";

import {IconButton} from "@/app/components/button/IconButton";
import s from "./Header.module.scss"
import Link from "next/link";
import {IconMenu} from "@/app/ui/icons/IconMenu";
import {IconClose} from "@/app/ui/icons/IconClose";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {useResize} from "@/app/hooks/useResize";
import {Hero} from "@/app/components/hero/Hero";

const Header = () => {
    const [open, setOpen] = useState(false);

    const isDesktop = useResize({breakpoint: 767});


    useEffect(() => {
        if (isDesktop) {
            setOpen(false);
            document.documentElement.style.overflow = "auto"; // Разрешаем скролл на десктопе
        } else {
            document.documentElement.style.overflow = open ? "hidden" : "auto"; // Блокируем / разрешаем скролл
        }

        // Чистим, когда компонент размонтируется
        return () => {
            document.documentElement.style.overflow = "auto";
        };
    }, [isDesktop, open]);

    const onClose = () => {
        setOpen(false);
    }
    const onOpen = () => {
        setOpen(true);
    }
    return (
        <div className="container">
            <header>
            <div className={clsx(s.header, open ? s.header_open : null)}>
                <div className={s.header_title}>*Ястребова</div>
                {/*<Image className={s.header_logo}  src="/logo.png" alt="logo" width={"200"} height={"130"}/>*/}
                <nav className={s.header_nav}>
                    <ul className={s.header_nav_list}>
                        <li className={s.header_nav_item}><Link href={"#"}>Команда</Link></li>
                        <li className={s.header_nav_item}><Link href={"#"}>Блог</Link></li>
                        <li className={s.header_nav_item}><Link href={"#"}>Практика</Link></li>
                    </ul>
                    <ul className={s.header_social_list}>
                        <li className={s.header_social_item}><Link href={"#"}>Telegram</Link></li>
                        <li className={s.header_social_item}><Link href={"#"}>Whatsapp</Link></li>
                    </ul>

                </nav>
                <Button variant={"primary"} className={s.header_btn}>Зв&apos; язатись зараз<IconButton/></Button>
                <Button variant={"icon"} className={s.header_btn_close} onClick={onClose}><IconClose/></Button>
                <Button variant={"icon"} className={s.header_btn_menu} onClick={onOpen}><IconMenu/></Button>
            </div>
                <><Hero/></>

            </header>
            </div>
    )
}
export {Header}