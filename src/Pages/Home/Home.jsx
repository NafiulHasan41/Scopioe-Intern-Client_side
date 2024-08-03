import Featured_Therapist from "./Featured_Therapist";
import Featured_Therapist2 from "./Featured_Therapist copy";
import SearchHome from "./SearchHome";


const Home = () => {
    return (
        <div>
            <div>
                {/* section search */}
                <SearchHome/>
            </div>
            <div className=" mt-[41px] lg:p-10 bg-white rounded-[10px]">
                <div className=" hidden md:block">
                <Featured_Therapist/>
                </div>
                <div className="md:hidden">
                    <Featured_Therapist2/>
                </div>
                
            </div>
        </div>
    );
};

export default Home;