import {IconLink} from "./linkcard";
import React, {useEffect} from "react";
import {LinkBlock} from "./linkblock";
const navlinks = require("../jsondata/navlink.json");
export default function Sidebar({mobile,closeMobileMenu}){

    const handleMenu=()=>{
        closeMobileMenu(true)
    }

    useEffect(()=>{
        if(mobile){
            document.body.style.overflowY = "hidden"
        }
        else{
            document.body.style.overflowY = "auto"
        }
    },[])



    return(
        <>
            {mobile && <div className="fixed bg-zinc-400/30 w-full h-full z-30 top-0 left-0"></div>}
        <div  className={`${mobile ? "top-0 bg-white h-full z-30":"hidden lg:block top-[3.8125rem] bottom-0 z-20 "}    fixed  left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-scroll`}>
            {mobile &&
            <button onClick={handleMenu} className="absolute text-slate-600 hover:text-slate-800 right-4 top-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path
                        d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                </svg>
            </button>
            }
            <nav className="lg:text-sm  lg:leading-6 relative">
                <div className="h-[40px]"></div>
                <ul className="list-none">
                <li>
                    <IconLink link="/document" style='hover:text-sky-600' text="Documentation">
                <div
                    className=" rounded-md border border-slate-200 p-[2px] group-hover:shadow-sky-200">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                              className="fill-sky-200 group-hover:fill-sky-200"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                              className="fill-sky-400 group-hover:fill-white"></path>
                    </svg>
                </div>
            </IconLink>
                </li>
                <li>
                <IconLink link="" style='hover:text-sky-600' text="Documentation">
                <div
                    className=" rounded-md border border-slate-200 p-[2px] group-hover:shadow-sky-200">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                              className="fill-sky-200 group-hover:fill-sky-200"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                              className="fill-sky-400 group-hover:fill-white"></path>
                    </svg>
                </div>
            </IconLink>
                </li>
                <li>

                <IconLink link="" style='hover:text-sky-600' text="Documentation">
                <div
                    className=" rounded-md border border-slate-200 p-[2px] group-hover:shadow-sky-200">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                              className="fill-sky-200 group-hover:fill-sky-200"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                              className="fill-sky-400 group-hover:fill-white"></path>
                    </svg>
                </div>
            </IconLink>
                </li>
                <li>
                <IconLink link="" style='hover:text-sky-600' text="Documentation">
                <div
                    className=" rounded-md border border-slate-200 p-[2px] group-hover:shadow-sky-200">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                              className="fill-sky-200 group-hover:fill-sky-200"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                              className="fill-sky-400 group-hover:fill-white"></path>
                    </svg>
                </div>
            </IconLink>
                </li>
                    {navlinks.links.map((item,i)=>(
                        <li className="mt-9 lg:mt-8" key={i}>
                           <LinkBlock data={item}/>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
            </>
    )
}