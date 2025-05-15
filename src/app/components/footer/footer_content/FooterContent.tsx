"use client"
import s from "./FooterContent.module.scss"
import Link from "next/link";


const FooterContent = () => {
    return (
        <section className={s.footer_content}>
            <div>
                <h4></h4>
            <ul className={s.footer_content_list}>
                <li><Link href={"#"}>Telegram</Link></li>
                <li><Link href={"#"}>Viber</Link></li>
                <li><Link href={"#"}>Whatsapp</Link></li>
                <li><Link href={"#"}>Instagram</Link></li>
            </ul></div>
            <div className={s.footer_content_contact}>
                <div>
                    <h4>Контакти Нiмеччина</h4>
                    <div>Нiмеччина</div>
                    <div>Нiмеччина</div>
                    <div>Телефон</div>
                </div>
                <div><h4>Контакти Україна</h4>
                    <div>Україна</div>
                    <div>Україна</div>
                    <div>Телефон</div>
                </div>
            </div>
        </section>
    )
}
export {FooterContent}