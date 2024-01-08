import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
let renderCount = 0;
const FormSetup = () => {
  const form = useForm();

  renderCount++;

  //   REGISTER
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    console.log("Form Submitted: ", data);
  }

  return (
    <div className="flex flex-col justify-center bg-gray-800 items-center h-screen">
      <h1 className="font-bold text-2xl text-white mb-6">
        Basic Form Setup {renderCount / 2}
      </h1>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-bold text-gray-600"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: { value: true, message: "username is required my boi" },
          })}
          placeholder="Enter username"
          className="w-full border p-2 mb-4"
        />
        {/* Showing Error Messages */}
        <p className="text-red-500">{errors?.username?.message}</p>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-gray-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message: "Email format sahi kro",
            },
            // Custom Validation
            validate: {
              // Preventing users from choosing admin@example.com as their email
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" || "Enter any other email"
                );
              },
              // preventing users from entering baddomain in the email
              notBlacklisted: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "This domain is not supported"
                );
              },
            },
          })}
          placeholder="Enter email"
          className="w-full border p-2 mb-4"
        />
        {/* Showing Errors for Email */}
        <p className="text-red-500">{errors?.email?.message}</p>

        <label
          htmlFor="channel"
          className="block mb-2 text-sm font-bold text-gray-600"
        >
          Channel
        </label>
        <input
          id="channel"
          type="text"
          {...register("channel", {
            required: { value: true, message: "channel name dalo be" },
          })}
          placeholder="Enter channel name"
          className="w-full border p-2 mb-4"
        />
        <p className="text-red-500">{errors?.channel?.message}</p>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default FormSetup;
