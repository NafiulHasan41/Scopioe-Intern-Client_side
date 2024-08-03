import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import Sidebar_menu from "./Sidebar_menu";



const Mobile_sidebar = () => {

    const { user ,logOut , setLoading } = useAuth();

    const img = user?.photoURL ? user?.photoURL : "https://i.ibb.co/VJqW7Cy/Ellipse-102.png";

    const userLogo = (
        <div className=" space-y-3 ">
            <div className="flex justify-center">
                <img className="w-[74px] h-[74px] rounded-[74px] " src={img} alt="websiteLogo" />
            </div>
            <div className=" text-center">
                <div className="">
                 <h1 className="text-[#FFF] font-semibold text-[24px]">{user?.displayName} </h1>
                  
                </div>
                <div>
                    <p className="text-[#1A2634] text-[14px] font-normal">{user?.email}</p>
                </div>
            </div>
        </div>
    );

    const demoLogo = (
        <div className=" space-y-3 ">
            <div className=" flex justify-center">
                <img className="w-[74px] h-[74px] rounded-[74px]  " src={img} alt="websiteLogo" />
            </div>
            <div className=" text-center">
                <div className="">
                    <h1 className="text-[#FFF] font-semibold text-[24px]">@username </h1>
                    
                </div>
                <div>
                    <p className="text-[#1A2634] text-[14px] font-normal">@user_email</p>
                </div>
            </div>
        </div>

    );


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
        <div className=" w-[268px] h-[686px]">
 
            <div className=" w-full h-[302px] bg-[#156BCA] ">
                <div className="flex items-center justify-center w-full h-[250px]">
                { user ? userLogo : demoLogo}
                </div>

                <div className=" ">
                        
                        <div className="h-[40px] flex items-center justify-center">
                             {
                                 user ? <button onClick={handleLogOut} className=" text-[#F15E4A] text-[15px] flex items-center gap-[10px]  ">Logout  <div className="w-[40px] bg-[#FFECEA] h-[40px] rounded-[40px]  flex items-center justify-center ">
                                 <IoEnterOutline className=" w-[20px] h-[20px] " />
                                 </div></button> : <Link to="/login"> <button className=" text-green-500 flex items-center gap-[10px]  ">Login  <div className="w-[40px] bg-green-100 h-[40px] rounded-[40px]  flex items-center justify-center ">
                                 <IoEnterOutline className=" w-[20px] h-[20px] " />
                                 </div></button></Link>
                             }
                            </div>
                            </div>
             
            </div>

            <div className=" border  bg-white w-full h-[384px]">
                <Sidebar_menu/>

            </div>

            
        </div>
    );
};

export default Mobile_sidebar;