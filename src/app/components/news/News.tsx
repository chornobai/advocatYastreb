"use client"
import s from "./News.module.scss"
import {SectionHeader} from "@/app/components/SectionNote/SectionNote";
import NewsBg from "@/app/ui/img/news_bg.jpg"
import Image from "next/image";

const blogData = [{
    image: NewsBg,
    title: "Зміни в податковому законодавстві",
    description: "Уряд ухвалив новий закон, який спрощує оподаткування малого бізнесу.",
    data: "2023"
},
    {
        image: NewsBg,
        title: "Зміни в податковому законодавстві",
        description: "Уряд ухвалив новий закон, який спрощує оподаткування малого бізнесу.",
        data: "2023"
    },
    {
        image: NewsBg,
        title: "Зміни в податковому законодавстві",
        description: "Уряд ухвалив новий закон, який спрощує оподаткування малого бізнесу.",
        data: "2023"
    },
    {
        image: NewsBg,
        title: "Зміни в податковому законодавстві",
        description: "Уряд ухвалив новий закон, який спрощує оподаткування малого бізнесу.",
        data: "2023"
    }
]

export const News = () => {
    return (

        <section className={s.news}>

                {/*<SectionHeader classContainer={s.news_header} name={"Блог"}*/}
                {/*               title={"Новини та статтi"}/>*/}
                <ul className={s.news_list}>
                    {blogData.map((item, i) => (<li className={s.news_item} key={i}>
                        <Image className={s.news_img} src={item.image} alt={"news_pic"} width={200} height={200}/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span>{item.data}</span>
                    </li>))}
                </ul>

        </section>

)
    ;
};
