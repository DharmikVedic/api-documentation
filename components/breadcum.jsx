export default function Breadcum({sub_head,sub_link}){
    return(
        <div className="flex gap-3 text-sm text-slate-800 items-center ">
            <span className="text-slate-600">
                {sub_head}
            </span>
            {sub_link &&
            <>
            <span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
  <path fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"/>
</svg>

            </span>
                <span>
                {sub_link}
            </span>
            </>
            }
        </div>
    )
}