import { Link, useNavigate } from "react-router-dom";

const SearchHome = () => { 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    navigate("/search", { state: { topic: search }});
  }

  return (
    <div className="flex flex-col justify-between lg:flex-row bg-[#FFFFFF] w-full p-2 lg:p-5 lg:h-[220px] rounded-[10px]">
      <div>
        <h1 className="text-[18px] md:text-xl font-medium text-[#152A16]">I&apos;m Looking for Massage Therapist Near...</h1>
        <p className="hidden md:block mt-[15px] text-[14px] md:text-[15px] font-normal text-[#2E3439]">
          In using this site, I agree to be bound by the <Link to="/terms" className="link font-medium text-[#156BCA]">Terms of Service</Link>
          <br />
          and <Link to="/privacy" className="link font-medium text-[#156BCA]">Privacy Policy</Link>
        </p>
        <p className="md:hidden mt-[15px] text-[14px] md:text-[15px] font-normal text-[#2E3439]">
          In using this site, I agree to be bound by the <br />
          <Link to="/terms" className="link font-medium text-[#156BCA]">Terms of Service</Link> and <Link to="/privacy" className="link font-medium text-[#156BCA]">Privacy Policy</Link>
        </p>
        <div className="my-[40px] relative md:hidden flex justify-center">
          <img src="https://i.ibb.co/fNDxf2B/Group-1000001700.png" alt="Therapist Search" />
          <img className="absolute top-[6px] right-[40px]" src="https://i.ibb.co/fFzWkKC/Vector.png" alt="Vector Icon" />
        </div>
        <form onSubmit={handleSearch} className="my-5 md:mt-[20px] relative">
          <input className="rounded-[10px] bg-[#EEF2F5] w-[370px] p-3 md:w-[470px] h-[50px] md:py-[20px] md:pl-[21px]" type="text" name="search" placeholder="ZIP code or city name" />
          <button type="submit" className="absolute right-[50px] top-[5px] lg:right-[5px] lg:top-[6px] rounded-[8px] text-white bg-[#156BCA] py-[11px] px-[10px] w-[83px] h-[40px]">GO</button>
        </form>
      </div>
      <div className="hidden md:block md:relative mr-[30px]">
        <img src="https://i.ibb.co/fNDxf2B/Group-1000001700.png" alt="Therapist Search" />
        <img className="absolute top-[35px] right-[140px]" src="https://i.ibb.co/fFzWkKC/Vector.png" alt="Vector Icon" />
      </div>
    </div>
  );
};

export default SearchHome;
