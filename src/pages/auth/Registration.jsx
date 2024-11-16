import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "../../components/ui";
import { MetaTags } from "../../components/shared";
// import { EmailExistPopup, CreatingAccountPopup } from "../../components/pages";
// import { useState } from "react";

function Registration() {
  // const [isEmailExist, setEmailExist] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <MetaTags
        title="Create account • Ecommerse"
        description="Create your account"
        conicalRoute="/registration"
      />

      <section className="container relative w-full pt-28 pb-8">
        {/* {isEmailExist && (
          <div className="fixed w-full h-screen inset-0 flex items-center justify-center bg-[#ffffffcb] backdrop-blur-sm z-10">
            <EmailExistPopup handleClick={() => setEmailExist(false)} />
            <CreatingAccountPopup />
          </div>
        )} */}

        <div className="relative w-full h-full flex items-center justify-center border border-zinc-500">
          <div className="flex-1 w-full h-full flex items-center justify-center">
            <div className="w-full max-w-lg px-8 py-16">
              <h1 className="text-[3rem] font-medium">Create Account</h1>

              <RegistrationForm className="space-y-6 mt-4 mb-4" />

              <p className="text-xs mb-8">
                By continuing, I agree to the Terms of Use & Privacy Policy
              </p>

              <p className=" font-normal ">
                Already have an Account?{" "}
                <span
                  className="font-semibold cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Try Login
                </span>
              </p>
            </div>
          </div>

          <div className="flex-1 w-full bg-black border-l border-zinc-500">
            <img
              src="https://images.pexels.com/photos/27466821/pexels-photo-27466821/free-photo-of-model-in-blazer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
