import {  useState } from "react"; import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { IoEye ,IoEyeOff } from "react-icons/io5";
import Auth_slider from "../../Components/Slider/Auth_slider";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";



const Register = () => {

    const [ pass , setPass] = useState(false);
    const [ pass2 , setPass2] = useState(false);

    const navigate = useNavigate();
    const { createUser , logOut ,setLoading } = useAuth();

    // success and error messages
    const onSuccess = ()=> {

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1000
      })
    }
  
      const onError = (err) => { 
        
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err,
          showConfirmButton: false,
          timer: 1500
      })
         
      }

    const handleRegister = e => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const confirm_password = form.get('confirm_password');

        if(password.length < 6){
            onError('Password must be at least 6 characters');
            return;
        }
        else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[a-zA-Z]).{8,}$/.test(password)){
            onError('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character');
            return;
        }
        else if(password !== confirm_password){
            onError('Passwords do not match');
            return;
        }


     

      
        createUser(email, password)
            .then(result => {
                
             
                updateProfile(result.user, { 
                    displayName: name,
                  }).then(() => {

                    onSuccess();
                    logOut().then( () => {
                        setLoading(false);
                        navigate('/login');

                    
                    })
                    .catch((error) => {
                        onError(error?.message);
                       
    
                      });

                  }).catch((error) => {
                    onError(error?.message);
                  });
              
               
            })
            .catch(error => {
                onError(error?.message);
            })


        }

        
    const customRegisterForm = (
        <>
        <div>
        <form onSubmit={handleRegister} className="">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[16px] text-[#152A16] font-medium">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="@username" className="input input-bordered" required />
                    </div>
                    <div className="form-control my-[24px]">
                        <label className="label">
                            <span className="label-text text-[16px] text-[#152A16] font-medium">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-[24px]">
                        <label className="label">
                            <span className="label-text text-[16px] text-[#152A16] font-medium">Password</span>
                        </label>
                        <div className=" relative">

                       <input type={ pass? "text" : "password" } name="password" placeholder="Enter your password"
                           className="input input-bordered w-full" required />
                       <span onClick={()=> setPass(!pass)} className=" text-2xl absolute top-3 right-3">{ pass ?
                           <IoEye /> :
                           <IoEyeOff /> }</span>

                   </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[16px] text-[#152A16] font-medium">Confirm Password</span>
                        </label>
                        <div className=" relative">

                       <input type={ pass2? "text" : "password" } name="confirm_password" placeholder="Re-type password"
                           className="input input-bordered w-full" required />
                       <span onClick={()=> setPass2(!pass2)} className=" text-2xl absolute top-3 right-3">{ pass2 ?
                           <IoEye /> :
                           <IoEyeOff /> }</span>

                   </div>

                    </div>

                    <div className="form-control mt-[17px]">
                    <div className=" flex gap-2">
                          <input type="checkbox" name="remember_me"  className="checkbox text-[#5C635A] " />
                          <p className=" text-[#5C635A] font-normal text-[14px]">Remember me</p>
                          </div>
                    </div>
                    <div className="form-control mt-[30px] w-[270px] h-[55px] mx-auto rounded-[10px] ">
                        <button className="rounded-[10px]  py-[16px] px-[40px] text-[#FFFFFF] text-[16px] font-semibold bg-[#4285F3] border-none text-xs md:text-xl ">Sign up</button>
                    </div>
                </form>

                <label className="label text-center  justify-center text-[15px] font-medium mt-[16px]">
                        <p className=" mx-1 text-[#142D3A] font-bold">Already Have an Account?</p><Link to="/login"  className="link  text-[#156BCA]">Log In </Link>
                 </label>
        </div>
        </>
    );








    return (
        <div className="w-[95%] mx-auto lg:mt-8">
             <Helmet>
            <title>TherapyNest : Create Account</title>
        </Helmet>
       <div className="hero gap-1 md:min-h-[500px]  rounded-3xl ">
        <div className="hero-content  w-full flex-col lg:flex-row-reverse lg:gap-[130px]">
            <div className="flex-1 text-center lg:text-left">
            <div className=" relative">
              <Auth_slider/>
               <div className=" absolute top-[332px] left-[170px] z-20 bg-[#152A16]/30 py-[30px] px-[35px] rounded-[10px] max-h-[143px] max-w-[341px] ">
                 <h1 className=" text-center text-[#156BCA] text-[22px] font-semibold h-[35px]">Create Account</h1>
                 <h1 className=" text-center text-[#fff] text-[22px] font-medium h-[35px]">Fill in Your Information</h1>
               </div>
              </div>
            </div>
            <div className=" flex-1  shrink-0 w-full max-w-sm md:max-w-[450px] ">
                <div className=" mb-[40px]">
                            {/* logo */}
                            <img className=" w-[110px] " src="https://i.ibb.co/hDtnRkH/Therapy-Nest-Logo-removebg.png" alt="websiteLogo" />
                            <h1 className=" text-[#152A16] mt-[32px] mb-[24px] text-[30px] font-semibold h-[24px]">Sign In To Your Account</h1>
                            <p className=" text-[#5C635A] text-[16px] font-normal mb-[40px]">Welcome Back! By click the sign up button, you&apos;re agree
                                to
                                Zenitood Terms and Service and acknlowledge the
                                <Link to="/privacy_and_policy"  className="link  text-[#156BCA]"> Privacy and Policy</Link></p>
                </div>
               {customRegisterForm}
            </div>
        </div>
    </div>
</div>
    );
};

export default Register;