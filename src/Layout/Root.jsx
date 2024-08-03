import { Outlet } from "react-router-dom";
import Sidebar_menu from "../Components/Sidebar/Sidebar_menu";


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
            <div>
                <div>
                    {/* for top navigation */}
                </div>
                <div>
                  <Outlet/>
                </div>
            </div>
           
        </div>
    );
};

export default Root;