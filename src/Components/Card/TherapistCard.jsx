import { FaCar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const TherapistCard = () => {
    return (
 <div className=" relative w-[178px] h-[253px] md:h-[303px] rounded-[10px] bg-[#FFFFFF] border-spacing-1 border-[#E7E7E7]">
  <figure className="px-[8px] pt-[8px] md:px-[10px] md:pt-[10px]">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="cardImage"
      className="rounded-[8px] w-[160px] h-[120px]  md:w-[194px] md:h-[146px]" />
  </figure>
  <div className=" m-[13px] md:m-[16px] ">
    <h1 className=" text-[#152A16] text-xs  md:text-[14px] font-medium  ">Name</h1>
    <p className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center "> <IoLocationSharp />location</p>
    <p className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center "> <FaCar />service</p>
    
  </div>
  <div className=" absolute bottom-0 rounded-b-[10px] w-full h-[45px] flex justify-center items-center hover:bg-[#156BCA] bg-[#D4E9FF]">
         <Link className=" link text-white text-[12px] md:text-[14px] font-medium ">See Details</Link>
  </div>
</div>
    );
};

export default TherapistCard;