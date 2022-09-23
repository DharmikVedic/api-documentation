import React, {useState} from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import RightDoc from "../components/documentContent/rightdoc";
import MiddleDoc from "../components/documentContent/middle";

export default function Home() {
    const [mobilemenu,setmobilemenu] = useState(false);

  const handleMobileMenu = ()=>{
      setmobilemenu(prev=> !prev);
  }

  // useEffect(()=>{
  //     const width = window.innerWidth;
  //     const handleCloseMenu =()=> {
  //         if (mobilemenu && window.innerWidth > 769) {
  //             setmobilemenu(false);
  //         }
  //     }
  //     window.addEventListener("resize",handleCloseMenu);
  //     return()=> window.removeEventListener("resize",handleCloseMenu);
  // },[])


  return (
    <div className="bg-white">
      <Navbar menuopen={handleMobileMenu}/>
<div>
<div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
<Sidebar closeMobileMenu={handleMobileMenu} mobile={mobilemenu}/>
<div className='lg:pl-[20rem]'>
    <MiddleDoc/>
<RightDoc/>
</div>
</div>
</div>
        </div>
  )
}
