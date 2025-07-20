"use client"
import s from "./Form.module.scss";

import {BaseButton} from "@/app/components/button/BaseButton";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(1, "Ім’я обов’язкове"),
    email: z.string().email("Некоректна пошта"),
    message: z.string().min(1, "Повідомлення обов’язкове"),
    agree: z.literal(true, {
        errorMap: () => ({ message: "Необхідно погодитись з умовами" }),
    }),
});

type FormData = z.infer<typeof formSchema>;

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Дані з форми:", data);
    };

    return (
        <section className={s.form_section}>
            <div className={"container"}>
                {/*<SectionHeader classFor={s.form_header} className={s.form_header_text}*/}
                {/*    name={<BaseButton className={s.form_header_btn} variant={"primary"} text={"Безкоштовна консультацiя"}/>}*/}
                {/*    title={"Зв'яжіться з нами"}*/}
                {/*/>*/}
                <div className={s.form_container}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.form_data}>
                        <label htmlFor="name">
                            <input {...register("name")} id="name" type="text" placeholder={"Iм'я"}/>
                            {errors.name && <span>{errors.name.message}</span>}
                        </label>

                        <label htmlFor="email">
                            <input {...register("email")} id="email" type="email" placeholder={"Пошта"}/>
                            {errors.email && <span>{errors.email.message}</span>}
                        </label>

                        <textarea {...register("message")} id="textarea_message" rows={5} placeholder={"Повідомлення"}></textarea>
                        {errors.message && <span>{errors.message.message}</span>}</div>

                        <label htmlFor="checkbox_agree" className={s.checkbox_label}>
                            <input {...register("agree")} id="checkbox_agree" type="checkbox" className={s.checkbox_agree} />
                           Я погоджуюсь з умовами
                            {errors.agree && <span>{errors.agree.message}</span>}
                        </label>

                        <BaseButton  className={s.submit_btn} variant={"primary"} text={"Вiдправити"} type="submit"/>
                    </form>
                </div>
            </div>
        </section>
    );
};
