import ComonDocument from "../components/documentContent/commonDocument";
import React from "react";
import {HeadSection} from "../components/documentContent/commonSection";
import { InfoCard} from "../components/documentContent/hightlightCard";
import RightDoc from "../components/documentContent/rightdoc";
import {TabCodeHightlight} from "../components/codeHightlight/tabCodeHightlight";

export default function Documentation(){
    return(
        <>
         <ComonDocument>
             <div className='lg:pl-[20rem]'>

             <div className="relative  max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:pr-20 xl:mr-[18rem]">
                 <HeadSection colortext="API Integration" head="Getting Started with PHP" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                 <InfoCard color="bg-slate-200"/>



                 <p className="prose">
                     Use one of our default themes for wheel chart or get your exclusive customised natal chart designed from us.
                 </p>
                 <p className="prose">
                     Natal planetary positions, house cusps, natal chart aspects and much more in a single API.
                 </p>
                 <TabCodeHightlight tab={["javascript","php"]}/>

             </div>
                 <RightDoc/>
             </div>
         </ComonDocument>
        </>
    )
}