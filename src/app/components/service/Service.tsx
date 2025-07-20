import s from "./Service.module.scss"
import {AccordionService} from "@/app/components/service/AccordionService/AccordionService";
import {SectionNote} from "@/app/components/SectionNote/SectionNote";

export const Service = () => {
    return (
        <section className={s.service}>
            <div className={"container_grid"}>
                <SectionNote title={"Послуги"} className={s.service_note}/>
                <h2 className={"header_section"}>Юридичні рішення для вашого захисту та підтримки</h2>
                <AccordionService />
            </div>

        </section>
    );
};
