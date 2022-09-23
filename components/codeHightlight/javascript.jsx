import Head from "next/head";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import {useEffect, useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
hljs.registerLanguage('javascript', javascript);


export function JavascriptCodeHightlight({children}){
    const [state,setstate] = useState(false);


    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    const  handleCopy =()=>{
        setstate(prev=> !prev);
    }

    if(state){
        setTimeout(()=> setstate(false),2000);
    }

    return(
        <>
        <Head>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"
                  integrity="sha512-Jk4AqjWsdSzSWCSuQTfYRIF84Rq/eV0G2+tu07byYwHcbTGfdmLrHjUSwvzp5HvbiqK4ibmNwdcG49Y5RGYPTg=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>
        </Head>
            <div className="bg-[#282C34] relative py-4 px-4 rounded-[20px]">
                {state &&
                <span
                    className="text-white before:border-green-700 before:border-l-transparent before:border-r-transparent before:border-b-transparent before:absolute before:w-[10px]  before:top-full before:left-[55%] before:-translate-x-1/2 before:border-[6px] absolute top-[-20px] right-0 bg-green-700 py-1 px-4 text-sm font-semibold rounded-full">
                    Copied
                </span>
                }
                <CopyToClipboard text={children}
                                 onCopy={handleCopy}>
                    <span className="cursor-pointer absolute right-6 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-gray-400 hover:fill-white">
  <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z" clipRule="evenodd" />
</svg>

                    </span>
                </CopyToClipboard>
            <pre><code className="js text-sm leading-[1.6] no-scrollbar">
                {children}
            </code></pre>
            </div>
            </>
    )
}


export function JavascriptCard({children}){
    const [state,setstate] = useState(false);

    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    const  handleCopy =()=>{
        setstate(prev=> !prev);
    }

    if(state){
        setTimeout(()=> setstate(false),2000);
    }

    return(
        <>
            <Head>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"
                      integrity="sha512-Jk4AqjWsdSzSWCSuQTfYRIF84Rq/eV0G2+tu07byYwHcbTGfdmLrHjUSwvzp5HvbiqK4ibmNwdcG49Y5RGYPTg=="
                      crossOrigin="anonymous" referrerpolicy="no-referrer"/>
            </Head>
            <div className="relative">
                {state &&
                <span
                    className="text-white before:border-green-700 before:border-l-transparent before:border-r-transparent before:border-b-transparent before:absolute before:w-[10px]  before:top-full before:left-[55%] before:-translate-x-1/2 before:border-[6px] absolute top-[-20px] right-0 bg-green-700 py-1 px-4 text-sm font-semibold rounded-full">
                    Copied
                </span>
                }
                <CopyToClipboard text={children}
                                 onCopy={handleCopy}>
                    <span className="cursor-pointer absolute top-5 right-6 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-gray-400 hover:fill-white">
  <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z" clipRule="evenodd" />
</svg>

                    </span>
                </CopyToClipboard>
                <pre><code className="js ">
                {children}
            </code></pre>
            </div>
        </>
    )
}
