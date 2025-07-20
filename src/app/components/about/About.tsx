"use client";
import s from "./About.module.scss";
// import { SectionHeader } from "@/app/components/SectionNote/SectionNote";
import AboutImg from "@/app/ui/img/about.jpg";
import AvatarImg from "@/app/ui/img/avatar.jpg";
import Image from "next/image";
import {AboutStatistics} from "@/app/components/about/aboutStatistic/AboutStatistics";
import {useEffect, useRef, useState} from "react";
import {SectionNote} from "@/app/components/SectionNote/SectionNote";
import {clsx} from "clsx";
import { motion } from "framer-motion";
// initial={{ opacity: 0, y: 30 }}
// whileInView={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.8, ease: "easeOut" }}
// viewport={{  once:true, amount: 0.3 }}
export const advantages = [
    {
        id: crypto.randomUUID(),
        title: "Експертність та досвід",
        text: "Наші адвокати мають багаторічний досвід у сфері захисту прав людини, включаючи складні та резонансні справи. Ми постійно підвищуємо свою кваліфікацію, щоб бути в курсі останніх змін у законодавстві та судовій практиці.",
    },
    {
        id: crypto.randomUUID(),
        title: "Індивідуальний підхід",
        text: "Ми розуміємо, що кожна справа є унікальною. Ми ретельно вивчаємо обставини кожного клієнта, розробляємо стратегію захисту, яка найкраще відповідає його потребам та інтересам.",
    },

    {
        id: crypto.randomUUID(),
        title: "Конфіденційність",
        text: "Ми гарантуємо повну конфіденційність інформації, отриманої від наших клієнтів. Ваші дані та обставини справи залишаться в безпеці.",
    },
    {
        id: crypto.randomUUID(),
        title: "Широкий спектр послуг",
        text: "Ми надаємо юридичну допомогу з різних питань, пов'язаних із захистом прав людини, включаючи кримінальне, цивільне, адміністративне та міжнародне право.",
    },
];
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

            <div className={"container_grid"}>
                <SectionNote title={"Про компанію"} className={s.service_note}/>
                <h2 className={"header_section"}>Юридична фірма "Ястребова і партнери"</h2>


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

                    <h3 className={"header_common"}>Вітаємо вас від імені Адвокатського Об'єднання
                        "Ястребова і Партнери"!</h3>
                    <div className={clsx(s.about_text, "common_text_small")}>
                        <p>Адвокатське об'єднання "Ястребова і Партнери" — це команда досвідчених правників,
                            які
                            працюють із відданістю та фокусом на результат. Ми спеціалізуємось на захисті
                            прав
                            людини й ведемо справи різної складності, включаючи резонансні та міжнародні
                            кейси.</p>

                        <p> Кожен клієнт отримує індивідуальний
                            підхід —
                            ми глибоко вивчаємо обставини, щоб вибудувати ефективну стратегію правового
                            захисту.</p>

                        <p>Повна конфіденційність: усі отримані дані залишаються під надійним
                            захистом.</p>

                        <p>Наша юридична допомога охоплює ключові сфери: кримінальне, цивільне,
                            адміністративне
                            та міжнародне право. Супроводжуємо звернення до ЄСПЛ, коли йдеться про
                            порушення основоположних прав.</p>

                        <p>Ми допомогли багатьом людям відстояти свої права — і продовжуємо боротися за
                            справедливість кожного дня.</p>


                    </div>
                </div>

                <motion.div className={s.about_blockquote}   >
                    <motion.blockquote  initial={{ opacity: 0, y: 0, x:-30 }}
                        whileInView={{ opacity: 1, y: 0, x:0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}
                         viewport={{  once:false, amount: 0.3 }} className={"special_text"}>"Юрист — це не тільки про закони. Це про
                        людяність,
                        сміливість і здатність стояти
                        на стороні правди."
                        <div className={s.about_author}>Євгенія Ястребова,
                            <span>засновниця та керівниця об'єднання</span>
                        </div>
                    </motion.blockquote>
<motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{  once:false, amount: 0.3 }} className={s.about_avatar}>
                    <Image  className={s.about_avatar_img} src={AvatarImg} alt="avatar" width={200}
                           height={180}/></motion.div>
                </motion.div>

                <AboutStatistics/>

            </div>

        </section>
    );
};
