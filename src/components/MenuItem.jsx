import FormButton from "./FormButtom";
const MenuItem = ({ name, description, price }) => {
  return (
    <div className="bg-gradient-to-r from-gray-100  via-white to-gray-400 text-black w-3/6 shadow-lg rounded-md shadow-slate-900 border-b-2 border-gray-500 p-4 flex justify-between">
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <h4 className="text-sm">{description}</h4>

        <h2 className="text-red-700 font-semibold">$ {price}</h2>
      </div>
      <div>
        <FormButton></FormButton>
      </div>
    </div>
  );
};

export default MenuItem;
