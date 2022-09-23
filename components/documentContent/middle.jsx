import React from "react";
import {Ideacard} from "./hightlightCard";
import {HeadSection} from "./commonSection";
import {JavascriptCodeHightlight} from "../codeHightlight/javascript";

export default function MiddleDoc(){
    return(
        <div className="relative  max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:pr-20 xl:mr-[18rem]">
         <HeadSection colortext="Get started" head="API Introduction" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            <Ideacard/>

            <p className="prose">
              Use one of our default themes for wheel chart or get your exclusive customised natal chart designed from us.
          </p>
            <p className="prose">
                Natal planetary positions, house cusps, natal chart aspects and much more in a single API.
            </p>
            <JavascriptCodeHightlight>
                {`<ParamField body="user_age" type="integer" default="0" required>
  The age of the user. Cannot be less than 0
</ParamField>`}
            </JavascriptCodeHightlight>

        </div>
    )
}