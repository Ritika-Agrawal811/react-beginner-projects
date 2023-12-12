const Details = () => {
  return (
    <section className="p-4 lg:p-0 w-full my-8">
      <h2 className="text-3xl text-center font-bold text-purple-600 mb-4">
        Personal Details
      </h2>
      <fieldset className="flex flex-col">
        <label htmlFor="firstname" className="font-medium mb-2">
          First Name:
        </label>
        <input
          required
          type="text"
          id="firstname"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
        <label htmlFor="lastname" className="font-medium mb-2">
          Last Name:
        </label>
        <input
          required
          type="text"
          id="lastname"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
      </fieldset>
    </section>
  );
};

export default Details;
