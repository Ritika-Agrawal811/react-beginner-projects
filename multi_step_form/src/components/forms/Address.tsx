const Address = () => {
  return (
    <section className="p-4 lg:p-0 w-full my-8">
      <h2 className="text-3xl text-center font-bold text-purple-600 mb-4">
        Address
      </h2>
      <fieldset className="flex flex-col">
        <label htmlFor="addressLine1" className="font-medium mb-2">
          Address Line 1:
        </label>
        <input
          required
          type="text"
          id="addressLine1"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
        <label htmlFor="addressLine2" className="font-medium mb-2">
          Address Line 2(optional):
        </label>
        <input
          type="text"
          id="addressLine2"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
        <label htmlFor="usercity" className="font-medium mb-2">
          City:
        </label>
        <input
          required
          type="text"
          id="usercity"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
        <label htmlFor="usercountry" className="font-medium mb-2">
          Country:
        </label>
        <input
          required
          type="text"
          id="usercountry"
          className="bg-gray-100 rounded-md p-2 mb-4"
        />
      </fieldset>
    </section>
  );
};

export default Address;
