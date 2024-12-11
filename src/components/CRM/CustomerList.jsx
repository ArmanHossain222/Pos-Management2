const CustomerList = () => {
    const customers = [
      { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Customers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{customer.name}</td>
                  <td className="py-3 px-6 text-left">{customer.email}</td>
                  <td className="py-3 px-6 text-left">{customer.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default CustomerList;
  