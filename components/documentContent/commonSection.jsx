import {ColorText, DocHead, DocPara} from "../textSize";
import React from "react";

export function HeadSection({colortext,head,para}){
    return(
        <header className="flex flex-col mb-5 gap-1">
            <ColorText text={colortext}/>
            <DocHead head={head}/>
            <DocPara para={para}/>
        </header>
    )
}