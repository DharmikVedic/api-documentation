export  function LinkHeading({text}){
    return(
        <h5 className="mb-6 lg:mb-4 font-semibold text-slate-900">
            {text}
        </h5>
    )
}

export function DocHead({head}){
    return(
        <h1 className="inline-block text-2xl sm:text-3xl font-bold text-slate-900">
            {head}
        </h1>
    )
}

export function ColorText({text}){
    return(
        <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">
            {text}
        </p>
    )
}

export function DocPara({para}){
    return(
        <p className="text-slate-700 text-lg">
            {para}
        </p>
    )
}

