const FormButton = () => {
  return (
    <form className="space-x-4 space-y-2 ">
      <label className="font-medium">Amount</label>
      <input
        type="number"
        className="bg-gray-100 rounded-md border border-gray-700 h-6 text-center font-medium w-12"
      />
      <button
        type="submit"
        className="rounded bg-black hover:bg-gradient-to-bl transition-all duration-200 border-2 border-gray-700 hover:from-black hover:to-gray-600 text-white flex h-7 pl-2 w-16 "
      >
        +Add
      </button>
    </form>
  );
};

export default FormButton;
