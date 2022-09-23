import Navbar from "../navbar";
import Sidebar from "../sidebar";
import {useState} from "react";

export default function ComonDocument({children}){
    const [mobilemenu,setmobilemenu] = useState(false);

    const handleMobileMenu = ()=>{
        setmobilemenu(prev=> !prev);
    }
    return(
        <div className="bg-white">
            <Navbar menuopen={handleMobileMenu}/>
            <div>
                <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                    <Sidebar closeMobileMenu={handleMobileMenu} mobile={mobilemenu}/>
                    {children}
                </div>
            </div>
        </div>
    )
}