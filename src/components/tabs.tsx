



import { CardType } from "./horizontal";
import { Tabs } from "./tab";
import MyMeedbook from '../../public/images/mymeedbook.png'
import EcoBazar from '../../public/images/ecobazar.png'
import Impulsion from '../../public/images/impulsion.png'
import TryMyStyle from '../../public/images/trymystyle.png'


export const serviceCardData:CardType[]  =[
    {
        title:"My MeedBook",
        desc:"We design websites that look amazing, convey the right brand message and are highly oriented for conversion.",
        color:"",
        img:MyMeedbook
    },
    {
        title:"EcoBazar",
        desc:"We develop fast, perfectly responsive, and SEO-optimized websites built with the best development practices of 2023.",
        color:"",
        img:EcoBazar
    },    {
        title:"Impulsion",
        desc:"We transform businesses into world-class brands by going through a well thought brand identity design process.",
        color:"",
        img: Impulsion
    },  
    {
      title:"Trymystyle",
      desc:"We design intuitive web & mobile apps focused on driving user engagement and increasing users retention.",
      color:"",
      img:TryMyStyle
  }, 
]

export function TabsDemo() {
 
    const tabs = serviceCardData.map((service) => ({
        title: service.title,
        value: service.title.toLowerCase().replace(/\s+/g, "-"),
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold ">
            
           
            <img src={service.img} alt={service.title} className="mt-4 h-full w-full bg-cover" />
          </div>
        ),
      }));
    
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

