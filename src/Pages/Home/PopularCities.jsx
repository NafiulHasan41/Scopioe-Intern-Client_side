import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularCities = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        async function getCities() {
            const cities = await axios.get("https://nafiulhasan41.github.io/Student-Housing-json/City.json");
            setCities(cities.data);
        }

        getCities();
    }, []);

    return (
        <>
        <div className=" mb-[18px]">
            <h1 className="text-[#152A16] font-medium text-[18px] ">Popular Cities</h1>
        </div>
            <div className="bg-[#FFF] rounded-[10px] w-[430px] h-[334px] md:w-[550px] md:h-[429px]">
                <div className="grid grid-cols-3 w-full h-full divide-y divide-gray-200">
                    {cities.map((city, index) => (
                        <div key={index} className="flex items-center justify-center p-2">
                            <Link className="link text-[13px] font-normal text-center text-[#156BCA]">
                                {city.cityName}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularCities;
