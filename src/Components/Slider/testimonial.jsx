import Testimonial_slider from "./Testimonial_slider";


const Testimonial = () => {
    return (
        <div className=" ">
            <div className=" mb-[18px]">
            <h1 className="text-[#152A16] font-medium text-[18px] ">Featured Testimonial</h1>
          </div>

          <div className=" bg-white rounded-[10px] p-2 ">
             <Testimonial_slider/>
          </div>
            
        </div>
    );
};

export default Testimonial;