import { createPortal } from "react-dom";

const mountElement = document.getElementById("portal");

const Modal = ({ hideCart }) => {
  const cartItems = (
    <ul className="divide-y divide-gray-200">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id} className="flex items-center justify-between py-2">
          <span className="text-gray-900">{item.name}</span>
          <span className="text-gray-600">${item.price}</span>
        </li>
      ))}
    </ul>
  );
  return createPortal(
    <div className=" fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white broder p-8 rounded-lg shadow-lg w-96">
        <div className="mb-4">{cartItems}</div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-900">Total Amount</span>
          <span className="text-gray-900 font-bold">$35.62</span>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md mr-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={hideCart}
          >
            Close
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
            Order
          </button>
        </div>
      </div>
    </div>,
    mountElement
  );
};

export default Modal;
