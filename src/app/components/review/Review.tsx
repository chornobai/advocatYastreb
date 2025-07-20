"use client"
import s from "./Review.module.scss"
import {SectionHeader} from "@/app/components/SectionNote/SectionNote";
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {BaseButton} from "@/app/components/button/BaseButton";
import {IconComa} from "@/app/ui/icons/IconComa";
import {ArrowRight} from "@/app/ui/icons/ArrowRight";
import {ArrowLeft} from "@/app/ui/icons/ArrowLeft";
import clsx from "clsx";
import {NoAvatar} from "@/app/ui/noAvatar/NoAvatar";


export const Review = () => {
    return (
        <section className={s.review}>
            <div className={"container"}>
                {/*<SectionHeader*/}
                {/*    className={s.review_header}*/}
                {/*    classFor={s.review_header_name}*/}
                {/*    name={<BaseButton className={s.review_btn} variant={"primary"} text={"Безкоштовна консультацiя"}/>}*/}
                {/*    title={"Наші клієнти кажуть"}*/}
                {/*/>*/}

                <div className={s.review_slide}>
                    <IconComa className={s.slider_icon}/>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".arrow_right",
                            prevEl: ".arrow_left"
                        }}
                        autoHeight={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className={s.slider}>
                            <div className={s.slider_container}>
                            <div className={s.slider_content}>
                                Хочу щиро подякувати адвокату Євгенії Ястребовій за високопрофесійну допомогу та людське
                                ставлення. З першої консультації відчувається досвід, впевненість і глибоке знання
                                справи. Пані Євгенія не лише детально пояснила всі юридичні нюанси, але й підтримувала
                                мене на кожному етапі процесу. Завдяки її професіоналізму моя справа була вирішена
                                успішно і в найкоротші строки.
                                Рекомендую "Ястребова і партнери" всім, хто шукає надійного, чесного і компетентного
                                юриста. Ви в надійних руках!ене на кожному етапі процесу. Завдяки її професіоналізму моя справа була вирішена
                                успішно і в найкоротші строки.
                                Рекомендую "Ястребова і партнери" всім, хто шукає надійного, чесного і компетентного
                                юриста. Ви в надійних руках!ене на кожному етапі процесу. Завдяки її професіоналізму моя справа була вирішена
                                успішно і в найкоротші строки.
                                Рекомендую "Ястребова і партнери" всім, хто шукає надійного, чесного і компетентного
                                юриста. Ви в надійних руках!
                            </div></div>
                            <div className={s.slider_author}>
                                <div><NoAvatar className={s.noAvatar}/></div>
                                <div className={s.slider_author_name}>Елена Курц<span
                                    className={s.slider_author_date}>24.04.22</span></div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={s.slider}>
                            <div className={s.slider_container}>
                                <div className={s.slider_content}>
                                    Хочу щиро подякувати адвокату Євгенії Ястребовій за високопрофесійну допомогу та
                                    людське
                                    ставлення. З першої консультації відчувається досвід, впевненість і глибоке знання
                                    справи. Пані Євгенія не лише детально пояснила всі юридичні нюанси, але й
                                    підтримувала
                                    мене на кожному етапі процесу.

                                </div></div>
                                <div className={s.slider_author}>
                                    <div><NoAvatar className={s.noAvatar}/></div>
                                    <div className={s.slider_author_name}>Елена Курц<span
                                        className={s.slider_author_date}>24.04.22</span></div>

                                </div>
                        </SwiperSlide>
                        <SwiperSlide className={s.slider}>
                            <div className={s.slider_container}>
                                <div className={s.slider_content}>
                                    Хочу щиро подякувати адвокату Євгенії Ястребовій за високопрофесійну допомогу та
                                    людське
                                    ставлення.

                                </div></div>
                                <div className={s.slider_author}>
                                    <div><NoAvatar className={s.noAvatar}/></div>
                                    <div className={s.slider_author_name}>Елена Курц<span
                                        className={s.slider_author_date}>24.04.22</span></div>

                                </div>
                        </SwiperSlide>

                        <button className={clsx("arrow_left", s.arrow, s.left)}><ArrowLeft/></button>
                        <button className={clsx("arrow_right", s.arrow,s.right)}><ArrowRight/></button>
                    </Swiper>


                </div>
            </div>
        </section>
    );
};
