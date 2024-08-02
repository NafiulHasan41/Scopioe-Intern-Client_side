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
       <div>
        <div>
          {/* logo */}
          <img src="https://i.ibb.co/hDtnRkH/Therapy-Nest-Logo-removebg.png" alt="websiteLogo" />
        </div>
       <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#86664b] font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#86664b] font-bold">Password</span>
                            
                        </label>
                       <div className=" relative"> 

                       <input type={ pass? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                        <span  onClick={() => setPass(!pass)} className=" text-2xl absolute top-3 right-3">{ pass ? <IoEye/> : <IoEyeOff/> }</span>

                       </div>
                        
                       
                        
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  text-[#86664b] border-none text-xs md:text-xl ">Login</button>
                    </div>

                </form>

                <div className=" text-center">
                     <p className=" mb-2 text-[#86664b] text-center text-xl"> Login with </p>
                    <button onClick={handleGoogleLogin} className="btn border-none text-2xl mx-5">  <FcGoogle/> </button>
                    <button onClick={handleFacebookLogin} className="btn border-none text-2xl text-blue-600 font-extrabold">  <FaFacebook/> </button>
                </div>

                <label className="label text-center  justify-center text-xl">
                        <p className=" mx-3 text-[#86664b] font-bold"> New User ?</p>    <Link to="/register"  className="label-text-alt btn  border-none  text-xl text-[#86664b]"> Register</Link>
                        </label>
       </div>

      </>
    );




    return (
        <div className="w-[95%] mx-auto mb-10">

          <Helmet>
            <title>TherapyNest : Login</title>
        </Helmet>
       <div className="hero gap-1 md:min-h-[500px] mt-3 ">
        <div className="hero-content w-full mx-auto flex-col lg:flex-row-reverse">
            <div className=" flex-1 text-center lg:text-left">
              <div className=" relative">
              <Auth_slider/>
               <div className=" absolute top-[332px] right-[153px]  z-50 bg-[#152A16]/30 py-[30px] px-[35px] rounded-[10px] max-h-[1433px] max-w-[341px] ">
                 <h1 className=" text-center text-[#fff] text-[22px] font-medium h-[35px]" ><span className=" text-center text-[#156BCA] text-[22px] font-semibold h-[35px]">Sign In </span>to view all the</h1>
                 <h1 className=" text-center text-[#fff] text-[22px] font-medium h-[35px]">massage therapists</h1>
                 <p ></p>
               </div>
              </div>
                
            </div>
            <div className=" flex-1 card shrink-0 w-full max-w-sm md:max-w-full shadow-2xl bg-[#a0c5c4] ">
               {customForm}
            </div>
        </div>
    </div>
  
</div>
    );
};


export default Login;