import Breadcum from "../breadcum";

export default function  Navbar({menuopen}){
    const mobilemenu =()=>{
        menuopen(true)
    }

    return(
        <div className="bg-white sticky top-0 px-5 z-30 border-b border-slate-900/10">
            <div className="max-w-8xl border-b border-slate-900/10  lg:px-8 lg:border-0 py-5 mx-auto">
                <div className="w-[150px]">
                <img src="/imgs/logo2.svg" className="w-full"/>
            </div>
            </div>
                <div className="pt-4 gap-4 items-center lg:hidden flex pb-4">
                    {/* mobile menu */}
                    <button onClick={mobilemenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <Breadcum sub_head="Get Started" sub_link=""/>
                </div>
        </div>
    )
}