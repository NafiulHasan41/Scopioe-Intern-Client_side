import { useMediaQuery } from "react-responsive";
import useAuth from "../../hooks/useAuth";
import { FaAngleDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { IoEnterOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import Swal from "sweetalert2";
import { useState } from "react";
import Mobile_sidebar from "./Mobile_sidebar";
import { ImCancelCircle } from "react-icons/im";


const Top_navbar = () => {

    const isNotMobile = useMediaQuery({ query: '(min-width: 640px)' });

    const [dropDown, setDropDown] = useState(false);
   
    
    const { user ,logOut , setLoading } = useAuth();

    const img = user?.photoURL ? user?.photoURL : "https://i.ibb.co/VJqW7Cy/Ellipse-102.png";

    const userLogo = (
        <div className=" pl-[30px]   h-[40px] flex gap-3 ">
            <div>
                <img className="w-[40px] h-[40px] rounded-[40px] " src={img} alt="websiteLogo" />
            </div>
            <div>
                <div className="flex justify-between gap-11 items-center">
                    <h1 className="text-[#152A16] font-medium text-[15px]">{user?.displayName} </h1>
                    <FaAngleDown />
                </div>
                <div>
                    <p className="text-[#5C635A] text-[14px] font-normal">{user?.email}</p>
                </div>
            </div>
        </div>
    );

    const demoLogo = (
        <div className=" pl-[30px]   h-[40px] flex gap-3 ">
            <div>
                <img className="w-[40px] h-[40px] rounded-[40px] " src={img} alt="websiteLogo" />
            </div>
            <div>
                <div className="flex justify-between gap-11 items-center">
                    <h1 className="text-[#152A16] font-medium text-[15px]">@username </h1>
                    <FaAngleDown />
                </div>
                <div>
                    <p className="text-[#5C635A] text-[14px] font-normal">@user_email</p>
                </div>
            </div>
        </div>

    );

    // handle logout 

     //control navigation 

     const navigate = useNavigate();


    const handleLogOut = () => {
        logOut()
          .then(() => {
            Swal.fire("User Logged out Successfully");
            setLoading(false);
            navigate("/login");
          })
          .catch((error) => {
            Swal.fire(error?.message);
          });
      };




    return (
        <div className="h-[60px] md:h-[88px] max-h-[88px]  w-full border-b-[1px] border-[#E7E7E7] flex justify-between items-center ">
            <div>
               {
                     !isNotMobile ? <img className="w-[60px] pl-[17px]   py-[12px] " src="https://i.ibb.co/hDtnRkH/Therapy-Nest-Logo-removebg.png" alt="websiteLogo" /> : user ? userLogo : demoLogo
               }
            </div>
            
               
               {
                    isNotMobile ? (<div className=" flex items-center pr-[30px] py-[24px]  h-[40px]">
                        <div className="w-[40px] h-[40px] rounded-[40px] border-[1px] border-[#E7E7E7] flex items-center justify-center ">
                        <FiBell className=" w-[20px] h-[20px] " />
                        </div>
                        <div className="h-[40px] flex items-center ml-5 pl-5 border-l-[1px] border-[#E7E7E7] ">
                             {
                                 user ? <button onClick={handleLogOut} className=" text-[#F15E4A] text-[15px] flex items-center gap-[10px]  ">Logout  <div className="w-[40px] bg-[#FFECEA] h-[40px] rounded-[40px]  flex items-center justify-center ">
                                 <IoEnterOutline className=" w-[20px] h-[20px] " />
                                 </div></button> : <Link to="/login"> <button className=" text-green-500 flex items-center gap-[10px]  ">Login  <div className="w-[40px] bg-green-100 h-[40px] rounded-[40px]  flex items-center justify-center ">
                                 <IoEnterOutline className=" w-[20px] h-[20px] " />
                                 </div></button></Link>
                             }
                            </div>
                            </div>) :   <div  className=" flex items-center gap-3 mr-4 mt-4">
                        <FiBell className=" w-[20px] h-[20px] " />
                <div onClick={()=>setDropDown(true)} className=" h-6 w-6 border border-black flex items-center justify-center">
                <HiMenuAlt3 />
                </div>
               </div>
               }

            <>
                {dropDown && (
                    <div className="fixed top-0 right-0 z-40">
                        <div className="relative">
                            <div className="absolute top-0 right-0">
                                <Mobile_sidebar />
                                <div onClick={() => setDropDown(false)} className="absolute top-5 right-5 z-50">
                                    <ImCancelCircle className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>



 
           
        </div>
    );
};

export default Top_navbar;