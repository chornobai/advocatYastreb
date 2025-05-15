"use client";
import s from "./About.module.scss";
import { SectionHeader } from "@/app/components/sectionHeader/SectionHeader";
import AboutImg from "@/app/ui/img/about.jpg";
import AvatarImg from "@/app/ui/img/avatar.jpg";
import Image from "next/image";
import { AboutStatistics } from "@/app/components/about/aboutStatistic/AboutStatistics";
import { useEffect, useRef, useState } from "react";

export const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = useState(0);
    const targetOffset = useRef(0);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            targetOffset.current = Math.abs(rect.top); // смещение блока
        };

        const animate = () => {
            setOffsetY(prev => {
                const diff = targetOffset.current - prev;
                const velocity = diff * 0.1; // коэффициент инерции
                return prev + velocity;
            });
            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("scroll", handleScroll);
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationRef.current!);
        };
    }, []);

    return (
        <section className={s.about} ref={sectionRef}>
            <div className="container">
                <SectionHeader name="Про компанію" title='Юридична фірма "Ястребова і партнери"' />
                <div className={s.about_container}>
                    <div className={s.about_main_img}>
                        <Image
                            className={s.about_img}
                            src={AboutImg}
                            alt="about image"
                            width={200}
                            height={200}
                            sizes="(max-width: 768px) 100vw, 1200px"
                            style={{
                                transform: `translateY(${offsetY * 0.1}px)`,
                            }}
                        />
                    </div>

                    <div className={s.about_content}>
                        <div className={s.about_content_block}>
                            <h3>Досконалість в юридичному представництві</h3>
                            <div className={s.about_text}>
                                Ми — не просто юристи, ми ваші партнери, а часом і справжні друзі...
                            </div>
                            <div className={s.about_author}>Євгенія Ястребова</div>
                            <span>засновник та лідер компанії</span>
                        </div>


                    <Image className={s.about_avatar_img} src={AvatarImg} alt="avatar" width={400} height={400} /></div>
                    <AboutStatistics />
                </div>
            </div>
        </section>
    );
};
