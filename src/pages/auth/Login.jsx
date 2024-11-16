import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/ui/forms/LoginForm";
import { MetaTags } from "../../components/shared";

function Login() {
  const navigate = useNavigate();

  return (
    // ? DESIGN 1
    // <section className="container w-full pt-28 pb-8">
    //   <div className="relative w-full h-full flex items-center justify-center border border-zinc-500">
    //     <div className="flex-1 w-full h-full flex items-center justify-center">
    //       <div className="w-full max-w-lg px-8 py-16">
    //         <h1 className="text-[3rem] font-medium">Login</h1>

    //          <LoginForm className="space-y-6 mt-4 mb-4" />

    //         <p className="text-xs mb-8">
    //           By continuing, I agree to the Terms of Use & Privacy Policy
    //         </p>

    //         <p className=" font-normal ">
    //           Don&apos;t have an Account?{" "}
    //           <span
    //             className="font-semibold cursor-pointer"
    //             onClick={() => navigate("/registration")}
    //           >
    //             Create an Account
    //           </span>
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-[500px] overflow-hidden bg-black border-l border-zinc-500">
    //       <img
    //         src="https://images.pexels.com/photos/28994680/pexels-photo-28994680/free-photo-of-fashionable-woman-in-hat-and-jeans-indoors.jpeg?auto=compress&cs=tinysrgb&w=600"
    //         alt="hero image"
    //       />
    //     </div>
    //   </div>
    // </section>

    //? DESIGN 2
    <section className="container w-full pt-28 pb-8">
      <MetaTags
        title="Login • Ecommerse"
        description="Login to your account"
        conicalRoute="/login"
      />

      <div className="relative w-full h-full flex items-center justify-center ">
        <div className="w-full max-w-xl p-16">
          <h1 className="text-[3rem] font-medium">Login</h1>

          <LoginForm className="space-y-4 mt-4 mb-4" />

          <p className="text-sm mb-8">
            By continuing, I agree to the Terms of Use & Privacy Policy
          </p>

          <p className=" font-normal ">
            Don&apos;t have an Account?{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => navigate("/registration")}
            >
              Create an Account
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
