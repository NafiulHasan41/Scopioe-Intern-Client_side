import { BiCategoryAlt } from "react-icons/bi";
import { CiSearch, CiSettings, CiSquareInfo } from "react-icons/ci";
import {  FaRegHeart,  } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Sidebar_menu = () => {
    return (
        <div>
             <ul className=" ">
                    {
                        <>                        
                            
                            <li>
                                <NavLink to="/"  className={({ isActive }) =>
                                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                                     "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                                
                                  <BiCategoryAlt className=" w-[18px] h-[18px]" />
                                  Home
                                 
                                    </NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/new_listings"
                                className={({ isActive }) =>
                                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                                     "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                                <LuUsers2 className=" w-[18px] h-[18px]" />
                                    New Listing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search"
                                 className={({ isActive }) =>
                                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                                     "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                                <CiSearch className=" w-[18px] h-[18px]" />
                                    Search</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"  className={({ isActive }) =>
                                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                                     "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                                <IoNewspaperOutline className=" w-[18px] h-[18px]" />
                                    About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/favorites"  className={({ isActive }) =>
                                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                                     "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                                <FaRegHeart className=" w-[18px] h-[18px]" />
                                    Favorites</NavLink>
                            </li>


                        </>
                           
                    }
                    {/* shared nav links */}
                    <div className="divider my-[25px] divide-gray-500 w-[210px] mx-auto"></div>
                    <li>
                        <NavLink to="/help_center"  className={({ isActive }) =>
                                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                                     "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                        <CiSquareInfo className=" w-[18px] h-[18px]" />
                            Help Center</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings"  className={({ isActive }) =>
                                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                                     "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#f80404] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                        <CiSettings className=" w-[18px] h-[18px]" />
                            Settings</NavLink>
                    </li>
                
                </ul>
        </div>
    );
};

export default Sidebar_menu;