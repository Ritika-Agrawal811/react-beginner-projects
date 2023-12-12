const Account = () => {
  return (
    <section className="p-4 lg:p-0 w-full my-8">
      <h2 className="text-3xl text-center font-bold text-purple-600 mb-4">
        Account Details
      </h2>
      <fieldset className="flex flex-col">
        <label htmlFor="username" className="font-medium mb-2">
          Username:
        </label>
        <input
          required
          type="text"
          id="username"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
        <label htmlFor="useremail" className="font-medium mb-2">
          Email:
        </label>
        <input
          required
          type="email"
          id="useremail"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
        <label htmlFor="userpassword" className="font-medium mb-2">
          Password:
        </label>
        <input
          required
          type="password"
          id="userpassword"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
        <label htmlFor="confirmpassword" className="font-medium mb-2">
          Confirm Password:
        </label>
        <input
          required
          type="password"
          id="confirmpassword"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
      </fieldset>
    </section>
  );
};

export default Account;
