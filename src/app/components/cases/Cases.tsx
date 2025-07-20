import s from "./Cases.module.scss"


const casesData = [
    {
        title: "Трудовий спір",
        description: " Клієнта поновлено на роботі та виплачено компенсацію.",
        year: "2023"
    },
    {
        title: "Трудовий спір",
        description: " Клієнта поновлено на роботі та виплачено компенсацію.",
        year: "2023"
    },
    {
        title: "Трудовий спір",
        description: " Клієнта поновлено на роботі та виплачено компенсацію.",
        year: "2023"
    },
    {
        title: "Трудовий спір",
        description: " Клієнта поновлено на роботі та виплачено компенсацію.",
        year: "2023"
    },
]
export const Cases = () => {
    return (

        <section className={s.cases}>
            <div className={"container"}>
                {/*<SectionHeader name={"Справи"}*/}
                {/*               title={"Чудові результати для наших клієнтів"}/>*/}
                <div className={s.cases_content}>
                <ul className={s.cases_list}>
                    {casesData.map((item, i) => (<li key={i} className={s.cases_item}>
                        <h3>{item.title}</h3><p className={s.cases_item_desc}>{item.description}<span>{item.year}</span></p>
                    </li>))}
                </ul></div>
            </div>
        </section>

    )
}