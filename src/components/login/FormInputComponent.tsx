import { Button, Input } from "@material-tailwind/react";
import { useLogin } from "../../../hooks/useLogin";

function FormInputComponent() {
  const { register, handleSubmit, onSubmit, errors } = useLogin();

  return (
    <div className="flex flex-col justify-center items-center p-8 sm:p-16 md:p-24 gap-4 w-full">
      <p className="text-4xl font-bold mb-4">Login</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Input
          {...register("userId", { required: "User ID is required" })}
          label="Masukan Id User"
          error={errors.userId ? true : false}
          className="w-full"
          crossOrigin={undefined}
        />
        {errors.userId && (
          <span className="text-red-500">{errors.userId.message}</span>
        )}

        <Input
          {...register("password", { required: "Password is required" })}
          type="password"
          label="Password"
          error={errors.password ? true : false}
          crossOrigin={undefined}
          className="w-full"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <Button type="submit" className="w-full px-20">
          Login
        </Button>
      </form>
    </div>
  );
}

export default FormInputComponent;
