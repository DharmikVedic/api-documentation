import Link from "next/link";

export function IconLink({children,link,text,style,active}){
    return(
        <>
            <Link href={link}>
                <a
               className={`group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold ${style}`}>
                <div
                    className="mr-4 rounded-md  shadow-sm group-hover:bg-sky-500 ">
                    {children}
                </div>
                    {text}
                </a>
            </Link>
        </>
    )
}