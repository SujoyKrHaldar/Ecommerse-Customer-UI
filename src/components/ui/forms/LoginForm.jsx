import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

// eslint-disable-next-line react/prop-types
function LoginForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const loginEvent = async (data) => {
    setError(false);
    setLoading(true);

    console.log(data);
    try {
      // const session = await authService.login(data);
      // if (session) {
      //   const { userData, profileData } = await authService.getCurrentUser();
      //   if (userData) {
      //     profileData
      //       ? dispatch(ACTIVATE_PROFILE(profileData))
      //       : dispatch(DISABLE_PROFILE());
      //     dispatch(LOGIN(userData));
      //     dispatch(
      //       SHOW_NOTIFICATION({
      //         message: `Welcome back ${userData.name} ✌️`,
      //         type: "SUCCESS",
      //       })
      //     );
      //     sessionStorage.setItem("isLoggedin", true);
      //   }
      // }
    } catch (error) {
      setError(error);
      // dispatch(
      //   SHOW_NOTIFICATION({
      //     message: "Login failed.",
      //     type: "ERROR",
      //   })
      // );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(loginEvent)} className={className}>
        <Input
          label="Your Email"
          type="email"
          placeholder="johndoe@xyz.com"
          error={errors?.email || error}
          errorMessage={errors?.email?.message}
          {...register("email", {
            required: "Email is required.",
            validate: (value) =>
              /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value) ||
              "Please enter a valid Email.",
          })}
        />

        <Input
          label="Password"
          type="password"
          enableResetPasswordBtn={true}
          placeholder="8+ characters"
          error={errors?.password || error}
          errorMessage={errors?.password?.message}
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
          })}
        />

        <button
          className="py-3 px-6 text-center bg-black text-white w-full border border-black"
          type="submit"
        >
          <p>{loading ? "Processing" : "Login"}</p>
        </button>
      </form>

      {/* <ShowError
          error={error}
          errorMessage={error}
          closeError={() => setError("")}
        /> */}
    </div>
  );
}

export default LoginForm;
