const FormSetup = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-800 items-center h-screen">
      <h1 className="font-bold text-2xl text-white mb-6">Basic Form Setup</h1>
      <form className="bg-white p-6 rounded shadow-md w-96">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-bold text-gray-600"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          className="w-full border p-2 mb-4"
        />

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-gray-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          className="w-full border p-2 mb-4"
        />

        <label
          htmlFor="channel"
          className="block mb-2 text-sm font-bold text-gray-600"
        >
          Channel
        </label>
        <input
          id="channel"
          type="text"
          name="channel"
          placeholder="Enter channel name"
          className="w-full border p-2 mb-4"
        />

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSetup;