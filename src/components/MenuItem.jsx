const MenuItem = ({ name, description, price }) => {
  return (
    <div className="bg-gradient-to-r from-white border-b-2 border-gray-500 p-4 via-gray-400 to-white text-black w-3/6 shadow-lg rounded-md shadow-slate-900">
      <h2 className="text-lg font-semibold">{name}</h2>
      <h4 className="text-sm">{description}</h4>
      <h2 className="text-red-700 font-semibold">$ {price}</h2>
    </div>
  );
};

export default MenuItem;
