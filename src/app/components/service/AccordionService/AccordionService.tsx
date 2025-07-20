"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./AccordionService.module.scss";
import {
    AccordionRoot,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/app/ui/accordion/Accordion";
import { clsx } from "clsx";


const services = [
    {
        id: "individual",
        title: "Фізичні особи",
        description: "Ви заслуговуєте на правовий захист, який працює на результат.",
        items: [
            "Представництво в судах: сімейні, спадкові, трудові, житлові, цивільні спори",
            "Оскарження звільнень і поновлення на роботі",
            "Стягнення боргів, компенсацій, захист майна",
            "Оскарження дій держорганів і повернення контролю над ситуацією",
            "Підготовку та аналіз договорів — для вашої впевненості",
            "Захист у кримінальних провадженнях: обшук, допит, затримання — ми поряд",
            "Підготовку та супровід звернень до ЄСПЛ",
        ],
    },
    {
        id: "fop",
        title: "ФОП",
        description: "Ми допомагаємо зосередитись на головному — бізнесі.",
        items: [
            "Юридичний супровід підприємницької діяльності",
            "Розробка договорів з контрагентами, співробітниками, орендодавцями",
            "Представництво в податкових спорах, перевірках, конфліктах із контролюючими органами",
            "Захист у господарських та адміністративних справах",
            "Захист у кримінальних провадженнях, пов’язаних з підприємницькою діяльністю",
            "Супровід звернень до ЄСПЛ у разі порушення прав підприємця",
        ],
    },
    {
        id: "company",
        title: "Юридичні особи",
        description: "Наші юристи — ваша стратегічна перевага.",
        items: [
            "Комплексне абонентське обслуговування",
            "Супровід угод, перевірок, переговорів",
            "Судовий захист у господарських, цивільних, адміністративних справах",
            "Врегулювання корпоративних конфліктів",
            "Захист у кримінальних справах щодо керівників та працівників",
            "Підготовка документів для ЄСПЛ, якщо порушено права компанії",
        ],
    },
    {
        id: "industry",
        title: "Специфічна галузь",
        description: "Ми не працюємо шаблонно — ми адаптуємося під вас.",
        items: [
            "Знання специфіки галузі",
            "Вивчення внутрішніх процесів вашого бізнесу",
            "Побудова правової моделі, яка реально працює",
            "Партнерство, а не просто юридичний супровід",
        ],
    },
    {
        id: "abroad",
        title: "Життя в Європі",
        description: "Ми — ваш юридичний тил у Європі.",
        items: [
            "Визнанням і легалізацією українських документів",
            "Питаннями розлучення, поділу майна, визначення місця проживання дітей",
            "Отриманням дозволів на проживання, роботу, возз’єднання сім’ї",
            "Юридичним супроводом при працевлаштуванні та відкритті ФОП",
            "Захистом інтересів у конфліктах за участі державних або місцевих органів",
            "Супроводом звернень до ЄСПЛ у випадках порушення ваших прав",
        ],
    },
];

const listVariants = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3, // дождаться завершения height-анимации
        },
    },
    hidden: {
        opacity: 0,
        transition: { duration: 0.2 },
    },
};


const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
};
const AnimatedAccordionContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
        >
            <AccordionContent forceMount>
                {children}
            </AccordionContent>
        </motion.div>
    );
};
export const AccordionService = () => {
    const [openValue, setOpenValue] = useState<string |  undefined>( undefined);

    return (
        <div className={s.service_accordion}>
            <AccordionRoot
                type="single"
                collapsible
                className={s.Root}
                value={openValue ?? undefined}
                onValueChange={setOpenValue}
            >
                {services.map((service) => {
                    const isOpen = openValue === service.id;

                    return (
                        <AccordionItem key={service.id} value={service.id} className={s.service_item}>
                            <AccordionTrigger className={s.service_trigger}>
                                <div className={clsx(s.accordion_service_header_item, "header_secondary")}>
                                    {service.title}
                                </div>
                                <p className={clsx(s.Description, "describe_text")}>
                                    {service.description}
                                </p>
                            </AccordionTrigger>

                            <AnimatePresence initial={false} mode="wait">
                                {isOpen && (
                                    <AnimatedAccordionContent>
                                        <motion.ul
                                            className={s.list}
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                        >
                                            {service.items.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className={clsx(s.list_item, "common_text")}
                                                    variants={itemVariants}
                                                >
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </AnimatedAccordionContent>
                                )}
                            </AnimatePresence>
                        </AccordionItem>
                    );
                })}
            </AccordionRoot>
        </div>
    );
};