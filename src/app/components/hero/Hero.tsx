import s from "./Hero.module.scss"
import {ButtonConnection} from "@/app/components/button/ButtonConnection";
import {BaseButton} from "@/app/components/button/BaseButton";
import MainBg from "@/app/ui/img/hero_bg.jpg"
import Image from "next/image"
import {useEffect, useState} from "react";

export const Hero = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <section className={s.hero}>
            <Image
                src={MainBg}
                alt="main_bg"
                fill
                className={s.hero_bg}
                priority
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            />
            <div className={s.hero_content}>
                <p className={s.hero_text}>Ми — сила вашої правди.</p>
                <h1 className={s.hero_title}>Ястребова та партнери</h1>
<div className={s.hero_controls}>
                <ButtonConnection variant={"primary"}/>

                <BaseButton variant={"secondary"} text={"Судові справи"}/>
            </div>
            </div>
        </section>

    )
}