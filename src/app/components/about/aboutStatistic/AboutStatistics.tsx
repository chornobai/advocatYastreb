import s from "./AboutStatistics.module.scss"

 export const aboutStatisticsData = [
     {
         number:20,
         metric:"Something",
         icon:"+"
     },
     {
         number:90,
         metric:"Something",
         icon:"%"
     },
     {
         number:500,
         metric:"Something",
         icon:"+"
     },
     {
         number:40,
         metric:"Something",
         icon:"+"
     },
 ]
export const AboutStatistics = () => {
    return (
        <ul className={s.about_statistics}>

            {aboutStatisticsData.map((item, i) => (<li key={i}><div className={s.data}>{item.number}{item.icon}</div>{item.metric}</li>))}
        </ul>
    );
};
