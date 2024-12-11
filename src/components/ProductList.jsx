const ProductList = () => {
  // Example data
  const products = [
    { id: 1, name: "Paracetamol", category: "Tablet", price: 50, stock: 100 },
    { id: 2, name: "Cough Syrup", category: "Syrup", price: 120, stock: 50 },
    { id: 3, name: "Antiseptic Cream", category: "Ointment", price: 75, stock: 30 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Stock</th>
            <th className="py-3 px-6 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{product.name}</td>
              <td className="py-3 px-6 text-left">{product.category}</td>
              <td className="py-3 px-6 text-left">{product.price}</td>
              <td className="py-3 px-6 text-left">{product.stock}</td>
              <td className="py-3 px-6 text-right">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
