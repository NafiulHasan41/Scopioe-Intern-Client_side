
import Testimonial from "../../Components/Slider/testimonial";
import Featured_Therapist from "./Featured_Therapist";
import Featured_Therapist2 from "./Featured_Therapist copy";
import PopularCities from "./PopularCities";
import SearchHome from "./SearchHome";


const Home = () => {

    
    return (
        <div>
            <div>
                {/* section search */}
                <SearchHome />
            </div>
            <div className=" mt-[41px] lg:p-10 bg-white rounded-[10px]">
                <div className=" hidden md:block">
                <Featured_Therapist/>
                </div>
                <div className="md:hidden">
                    <Featured_Therapist2/>
                </div>
                
            </div>
            <div className="mt-[30px] flex flex-col lg:flex-row gap-7">

                <div>
                    <Testimonial/>
                </div>

                <div>
                    <PopularCities/>
                </div>


            </div>
        </div>
    );
};

export default Home;