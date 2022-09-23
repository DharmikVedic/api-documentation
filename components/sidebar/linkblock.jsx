import React, { useState } from 'react'
import Link from 'next/link'
import {LinkHeading} from "../textSize";

export function LinkBlock({data}) {
    return (
        <>
            <LinkHeading text={data.heading}/>
            <ul
            className={`space-y-5 lg:space-y-2.5 border-l border-slate-200/50`}
        >
            {data?.sub_links?.map((item, i) => (
                <li
                    key={i}
                >
                    <Link href={item.link}>
                        <a className="flex border-l font-normal hover:border-sky-500 text-slate-700 hover:text-slate-900 border-transparent  -ml-px text-primary  font-semibold pl-4">
                            {item.name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}
