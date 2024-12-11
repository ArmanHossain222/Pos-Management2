const SalesSummary = () => {
	// Example sales data
	const sales = [
	  { id: 1, product: "Paracetamol", quantity: 2, total: 100 },
	  { id: 2, product: "Cough Syrup", quantity: 1, total: 120 },
	  { id: 3, product: "Antiseptic Cream", quantity: 3, total: 225 },
	];
  
	return (
	  <div className="overflow-x-auto">
		<table className="min-w-full bg-white border rounded-lg">
		  <thead>
			<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
			  <th className="py-3 px-6 text-left">Product</th>
			  <th className="py-3 px-6 text-left">Quantity</th>
			  <th className="py-3 px-6 text-left">Total</th>
			</tr>
		  </thead>
		  <tbody className="text-gray-600 text-sm font-light">
			{sales.map((sale) => (
			  <tr
				key={sale.id}
				className="border-b border-gray-200 hover:bg-gray-100"
			  >
				<td className="py-3 px-6 text-left">{sale.product}</td>
				<td className="py-3 px-6 text-left">{sale.quantity}</td>
				<td className="py-3 px-6 text-left">{sale.total}</td>
			  </tr>
			))}
		  </tbody>
		</table>
	  </div>
	);
  };
  
  export default SalesSummary;
  