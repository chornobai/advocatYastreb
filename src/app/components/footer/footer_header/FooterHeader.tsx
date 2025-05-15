"use client"
import s from "./FooterHeader.module.scss"
import {z} from "zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/app/components/button";
import {ArrowRight} from "@/app/ui/icons/ArrowRight";

const schema = z.object({
    email: z.string().email("Введіть коректну адресу електронної пошти"),
})

type FormData = z.infer<typeof schema>

const FooterHeader = () => {
    const [success, setSuccess] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log("Підписка:", data)
        setSuccess(true)
        reset()
    }

    return (
        <section className={s.footer_header}>
            <div className={s.footer_header_logo}>*Ястребова</div>
            <div className={s.footer_header_subscribe}>
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <h3 className={s.title}>Слідкуй за новинами</h3>

                  <label> <input
                        type="email"
                        placeholder="Ваша пошта"
                        {...register("email")}
                        className={s.input}
                  />  <Button  className={s.form_btn} type="submit" variant={"icon"}><ArrowRight/></Button> </label>
                    {errors.email && <p className={s.error}>{errors.email.message}</p>}



                    {success && <p className={s.success}>Дякуємо за підписку!</p>}
                </form>


            </div>
        </section>
    )
}
export {FooterHeader}