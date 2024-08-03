import { IoLocationSharp } from "react-icons/io5";


const TestimonialCard = () => {
    return (
        <div className=" flex items-center gap-[15px] bg-white w-[398px] rounded-[10px]  md:w-[490px] h-[160px] ">
  <figure className="  w-[230px]  pl-[10px] rounded-[8px]  ">
    <img
      src="https://i.ibb.co/5rxhcxm/image-116.png"
      alt="Movie" className="w-full h-[140px] rounded-[8px] " />
  </figure>
  <div className="">
    <p className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center "> <IoLocationSharp />location</p>
    <h2 className=" text-[#232F3C] text-[14px] font-medium">Healing Bodywork <span className=" text-[#156BCA] font-semibold">by Court</span></h2>
    <p className=" text-[12px] md:text-[13px] font-normal text-[#5C635A] ">Cort&apos;s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className=" text-[#156BCA] font-medium">Read More</span> </p>
   
  </div>
</div>
    );
};

export default TestimonialCard;