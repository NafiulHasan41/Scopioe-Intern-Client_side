import { Outlet } from "react-router-dom";
import Sidebar_menu from "../Components/Sidebar/Sidebar_menu";
import Top_navbar from "../Components/Sidebar/Top_navbar";


const Root = () => {
    return (
        <div className=" flex" >
            <div className=" border-r-[1px] border-[#E7E7E7] lg:w-[250px] lg:h-screen lg:sticky static lg:top-0 lg:left-0 lg:z-50 hidden lg:block ">
                {/* for sidebar dekstop  */}
                <div>
                <img className=" hidden lg:block w-[110px] mx-auto my-[55px]" src="https://i.ibb.co/hDtnRkH/Therapy-Nest-Logo-removebg.png" alt="websiteLogo" />
                </div>
                <Sidebar_menu/>
            </div>
            <div className=" flex-1 flex flex-col">
                <div className="max-h-[88px] ">
                    <Top_navbar/>
                </div>
                <div className="flex-1 bg-[#EEF2F5]">
                    <div className=" max-w-[1130px] m-[30px] mx-auto">
                    <Outlet/>
                    </div>
                  
                </div>
            </div>
           
        </div>
    );
};

export default Root;