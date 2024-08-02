import { Link , useLocation , useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {  useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoEye ,IoEyeOff } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Auth_slider from "../../Components/Slider/Auth_slider";



const Login = () => {


    const {  signIn , signInWithGoogle ,signInWithFacebook  } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const onSuccess = ()=> {

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1000
    })
  }

    const onError = (err) => { 
      const msg = err?.message;
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: msg,
        showConfirmButton: false,
        timer: 1500
    })
       
    }
    

    const handleLogin = async e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
      
        try {
            //User Login
            await signIn(email, password)         
          
            onSuccess();
        

            if( location.state === "/login")
                {
                  navigate("/")
                }
                else
                {
                  navigate(location?.state ? location.state.from : "/");
                }


          } catch (err) {
            console.log(err)
            onError(err);
          }
    }

    const handleGoogleLogin = async () => {
        try {
            
          await signInWithGoogle()
           
            onSuccess();
            
            if( location.state === "/login")
              {
                navigate("/")
              }
              else
              {
                navigate(location?.state ? location.state.from : "/");
              }

          } catch (err) {
            console.log(err)
            onError(err);
          }
    }

    const handleFacebookLogin = async () => {

        
        try {
           
            await signInWithFacebook()
          
          onSuccess();
          if( location.state === "/login")
            {
              navigate("/")
            }
            else
            {
              navigate(location?.state ? location.state.from : "/");
            }
          } catch (err) {
            console.log(err)
            onError(err);
          }
    };


     const [ pass , setPass] = useState(false);


    const customForm = (
      <>
       <div className=" md:max-w-[450px]">
        <div>
          {/* logo */}
          <img className=" w-[110px] " src="https://i.ibb.co/hDtnRkH/Therapy-Nest-Logo-removebg.png" alt="websiteLogo" />
          <h1 className=" text-[#152A16] my-[25px] text-[30px] font-semibold h-[24px]">Log In To Your Account</h1>
          <p className=" text-[#5C635A] text-[16px] font-normal mb-[40px]">Welcome back! Select a method to log in:</p>
          {/* social login */}
          <div className=" flex justify-between mb-[32px] ">
                    <button onClick={handleGoogleLogin} className=" w-[178px] h-[55px]  border-none rounded-[6px] text-2xl bg-gradient-to-r from-black/10 to-gray-50 shadow-xl shadow-black/35 "> <p className="flex gap-2 justify-center"><FcGoogle/> <span className=" text-[#152A16] text-center text-[16px] font-normal ">Google</span></p>  </button>
                    <button onClick={handleFacebookLogin} className="w-[205px] h-[55px] border-none rounded-[6px] text-2xl  bg-[#298FFF] font-extrabold shadow-xl shadow-black/35 ">  <p className=" flex gap-2 justify-center"><span className=" text-blue-600  "><FaFacebook/></span><span className=" text-[#FFF] font-normal text-[16px] ">Facebook</span> </p> </button>
           </div>
        </div>
        <div>
          <p className=" divider text-[#5C635A] text-[14px] font-normal mb-[32px]">Or Continue with Email</p>
        </div>
       <form onSubmit={handleLogin} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[16px] text-[#152A16] font-medium ">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-[28px]">
                        <label className="label">
                            <span className="label-text text-[16px] text-[#152A16] font-medium ">Password</span>
                            
                        </label>
                       <div className=" relative"> 

                       <input type={ pass? "text" : "password"} name="password" placeholder="Enter your password " className="input input-bordered w-full" required />
                        <span  onClick={() => setPass(!pass)} className=" text-2xl absolute top-3 right-3">{ pass ? <IoEye/> : <IoEyeOff/> }</span>

                       </div>            
                    </div>
                    <div className=" flex justify-between mt-[16px]">
                          <div className=" flex gap-2">
                          <input type="checkbox"  className="checkbox text-[#5C635A] " />
                          <p className=" text-[#5C635A] font-normal text-[14px]">Remember me</p>
                          </div>
                          <div>
                            <Link to="/forgot-password" className=" link  text-[#156BCA] text-[14px] font-medium">Forgot Password?</Link>
                          </div>
                       </div>
                    <div className="form-control mt-[65px] w-[270px] h-[55px] mx-auto rounded-[10px] ">
                        <button className="rounded-[10px]  py-[16px] px-[40px] text-[#FFFFFF] text-[16px] font-semibold bg-[#156BCA] border-none text-xs md:text-xl ">Sign in</button>
                    </div>

                </form>

              

                <label className="label text-center  justify-center text-[15px] font-medium mt-[16px]">
                        <p className=" mx-1 text-[#142D3A] font-bold">Don’t Have an Account?</p><Link to="/register"  className="link  text-[#156BCA]">Create Account</Link>
                 </label>
       </div>

      </>
    );




    return (
        <div className="w-[95%] mx-auto lg:mt-14">

          <Helmet>
            <title>TherapyNest : Login</title>
        </Helmet>
       <div className="hero gap-1 md:min-h-[500px] mt-3 ">
        <div className="hero-content w-full mx-auto flex-col lg:flex-row-reverse">
            <div className=" flex-1 text-center lg:text-left">
              <div className=" relative">
              <Auth_slider/>
               <div className=" absolute top-[332px] right-[153px]  z-50 bg-[#152A16]/35 py-[30px] px-[35px] rounded-[10px] max-h-[143px] max-w-[341px] ">
                 <h1 className=" text-center text-[#fff] text-[22px] font-medium h-[35px]" ><span className=" text-center text-[#156BCA] text-[22px] font-semibold h-[35px]">Sign In </span>to view all the</h1>
                 <h1 className=" text-center text-[#fff] text-[22px] font-medium h-[35px]">massage therapists</h1>
                 <p ></p>
               </div>
              </div>
                
            </div>
            <div className=" flex-1  shrink-0 w-full max-w-sm md:max-w-full  ">
               {customForm}
            </div>
        </div>
    </div>
  
</div>
    );
};


export default Login;