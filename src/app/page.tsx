import {Header} from "@/app/components/header/Header";
import {Service} from "@/app/components/service/Service";
import {About} from "@/app/components/about/About";
import {Review} from "@/app/components/review/Review";
import {Cases} from "@/app/components/cases/Cases";
import {Form} from "@/app/components/form/Form";
import {News} from "@/app/components/news/News";
import {Footer} from "@/app/components/footer/Footer";


export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Service/>
                <About/>
                <Review/>
                <Cases/>
                <Form/>
                <News/>
            </main>
            <footer >
                <Footer/>
            </footer>
        </>
    )

}
