import s from "./Service.module.scss"
import {SectionHeader} from "@/app/components/sectionHeader/SectionHeader";


const serviceData = [
    {
        number: "(01)",
        title: "Адміністративні справи",
        description: "Допомагаємо оскаржити рішення державних органів та захистити ваші права у сфері адміністративного права."
    },
    {
        number: "(02)",
        title: "Кримінальні справи",
        description: "Забезпечимо ефективний захист у кримінальних справах, а також представимо інтереси потерпілих, допомагаючи відстояти їхні права."
    },
    {
        number: "(03)",
        title: "Сімейні справи",
        description: "Супроводжуємо процеси розлучення, поділу майна, оформлення опіки та аліментних спорів. Захищаємо права у справах про домашнє насильство."
    },
    {
        number: "(04)",
        title: "Нотаріальні справи",
        description: "Готуємо та посвідчуємо договори (купівля-продаж, дарування), завіряємо підписи та переклади, оформлюємо спадщину, заповіти та довіреності."
    },
];

export const Service = () => {
    return (
        <section className={s.service}>
<div className={s.service_header}>
            <SectionHeader name={"Сервіси"} title={"Юридичні рішення для вашого захисту та підтримки"} /></div>
            <ul className={s.service_list}>
                {serviceData.map((item, i) => (
                    <li key={i} className={s.service_item}>
                        <span>{item.number}</span>
                        <div className={s.service_item_content}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>


        </section>
    );
};
