import {FooterHeader} from "@/app/components/footer/footer_header/FooterHeader";
import {FooterContent} from "@/app/components/footer/footer_content/FooterContent";
import {FooterBasement} from "@/app/components/footer/footer_basement/FooterBasement";
import s from "./Footer.module.scss"
import clsx from "clsx";

export const Footer = () => (

        <div className={clsx("container", s.footer)}>
            <FooterHeader/>
            <FooterContent/>
            <FooterBasement/>
        </div>

)