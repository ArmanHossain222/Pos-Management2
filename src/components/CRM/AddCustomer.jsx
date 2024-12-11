import React, { useState } from "react";

const AddCustomer = () => {
  // State to hold form data
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Customer:", customer);
    // Clear the form after submission
    setCustomer({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Customer</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Enter customer name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-bold">Email</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-bold">Phone</label>
          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-bold">Address</label>
          <textarea
            name="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
