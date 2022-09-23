export default function RightDoc(){
    const links = [
        {
            name:'Introduction',
            link:"#introduction",
            sub_links:[
                {
                    name:'Built to convert',
                    link:"#built-to-convert",
                },
                {
                    name:'Blazingly fast',
                    link:"#built-to-convert",
                },
                {
                    name:'Simple to work with',
                    link:"#built-to-convert",
                }
            ]
        },
        {
            name:'Showcase',
            link:"#introduction",
        },
        {
            name:'Testimonials',
            link:"#introduction",
        }

    ]
    return(
        <div className="z-10 hidden xl:block pr-8 fixed pl-8 w-[21rem] top-[3.8rem] bottom-0 right-[max(0px,calc(50%-45rem))] py-10 overflow-auto">
            <ul className="text-slate-700 text-sm leading-6">
                {links.map((item,i)=>(
                    <>
                    <li key={i}><a href={item.link}
                           className="block py-1 font-medium font-medium hover:text-slate-900 text-slate-700">{item.name}</a>
                    </li>
                        {item?.sub_links &&
                        <>
                            {item?.sub_links.map((item, i) =>
                                <li key={i} className="ml-4"><a href={item.link}
                                                                className="hover:text-slate-800 flex text-slate-600 items-start py-1 whitespace-pre-wrap ">{item.name}</a>
                                </li>
                            )}
                        </>
                        }
                    </>
                ))}
            </ul>
        </div>
    )
}